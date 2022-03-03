import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});
import "reflect-metadata";
import express from "express";
import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import Context from "./types/ContextType";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "apollo-server-core";
import { Resolvers as resolvers } from "./resolvers/index";
import { buildSchemaSync } from "type-graphql";
import { ConnectToMongoDb } from "./utils/mongoConnector";
import { verifyJWT } from "./utils/JWT";

async function ServerFunction() {
  const app = express();
  app.use(cookieParser());

  const schema = await buildSchemaSync({
    resolvers,
  });
  const server = new ApolloServer({
    schema,
    context: (ctx: Context) => {
      const authToken = ctx.req.headers.authorization;
      if (authToken) {
        const user = verifyJWT(authToken.replace("Bearer ", ""));
        ctx.user = user;
      }
      return ctx;
    },
    plugins: [
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageLocalDefault(),
    ],
  });
  await server.start();
  //apply express app to gql server as a middleware
  server.applyMiddleware({ app });
  app.listen({ port: 9000 }, () => {
    console.log("app is listening at http://localhost:9000");
  });
  //connecting to the database
  ConnectToMongoDb();
}
ServerFunction();
