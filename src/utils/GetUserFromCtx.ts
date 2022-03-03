import { ApolloError } from "apollo-server";
import { UserModel } from "../schema/GetModelsForClass";
import { User } from "../schema/User.Schema";
import Context from "../types/ContextType";

export default async function (context: Context) {
  // console.log(context);
  const email = context.user?.email;
  if (!email) {
    throw new ApolloError("Login to continue");
  }
  const curUser = await UserModel.find().findByEmail(email);
  if (!curUser) {
    throw new ApolloError("User must be logged in for this action");
  }
  return curUser;
}
