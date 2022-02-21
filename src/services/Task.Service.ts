import Context, { ContextAndParams } from "../types/ContextType";
import { ApolloError } from "apollo-server";
import ValidateObjectId, {
  ValidateCanBeInTask,
} from "../types/ValidateObjectId";
import {
  ProjectModel,
  TaskModel,
  UserModel,
} from "../schema/GetModelsForClass";
import GetUserFromCtx from "../utils/GetUserFromCtx";

export default class TaskServices {
  async createTaskService({
    taskTitle,
    description,
    parentProjectId,
    contributors,
    context,
  }: ContextAndParams) {
    taskTitle = taskTitle as string;
    description = description as string;
    parentProjectId = parentProjectId as string;
    contributors = contributors as string[];
    context = context as Context;
    const curUser = await GetUserFromCtx(context);
    //checking basic requirements in user input
    if (contributors.length < 1) {
      throw new ApolloError("Atleast one contributor must be added");
    }
    if (taskTitle.trim() === "") {
      throw new ApolloError("Tasks cannot have blank titles");
    }
    //ensuring all the ids are valid
    ValidateObjectId([parentProjectId, ...contributors]);
    //ensuring project exists
    const curProject = await ProjectModel.findById(parentProjectId);
    if (curProject === undefined || curProject === null) {
      throw new ApolloError("No such project exists");
    }
    //ensuring user creating the task is the Creator of the parent project
    if (curProject!!.createdBy!!.toString() !== curUser._id.toString()) {
      throw new ApolloError("Only creators can create tasks");
    }
    //ensuring contributors can be added to the task
    //current conditions :
    //1. must be in creators Circle
    //2. must be in the parentProject's member's list
    const members = curProject.Members as string[];
    const circle = curUser.circle as string[];
    ValidateCanBeInTask(contributors, members!!, circle);
    const createdTask = await TaskModel.create({
      TaskTitle: taskTitle,
      Description: description,
      ParentProject: curProject._id,
      Contributors: contributors,
    });
    curProject.Tasks.push(createdTask._id);
    await curProject.save();
    return createdTask;
  }
}
