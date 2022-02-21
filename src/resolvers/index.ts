import { NonEmptyArray } from "type-graphql";
import HealthCheckResolver from "./HealthCheckResolver";
import ProjectResolver from "./Project.Resolver";
import TaskResolver from "./Task.Resolver";
import UserResolver from "./User.Resolver";

export const Resolvers = [
  UserResolver,
  ProjectResolver,
  TaskResolver,
  HealthCheckResolver,
] as NonEmptyArray<Function> | NonEmptyArray<string>;
