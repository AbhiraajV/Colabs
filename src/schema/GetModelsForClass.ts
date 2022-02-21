import { User } from "./User.Schema";
import { getModelForClass } from "@typegoose/typegoose";
import { ProjectSchema } from "./Projects.Schema";
import TaskSchema from "./Tasks.Schema";
export const UserModel = getModelForClass<typeof User>(User);
export const ProjectModel =
  getModelForClass<typeof ProjectSchema>(ProjectSchema);
export const TaskModel = getModelForClass<typeof TaskSchema>(TaskSchema);
