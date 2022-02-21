import { ApolloError } from "apollo-server";
import Context, {
  ContextAndEmail,
  ContextAndParams,
} from "../types/ContextType";
import GetUserFromCtx from "../utils/GetUserFromCtx";
import { User, findByEmail } from "../schema/User.Schema";
import { ProjectModel, UserModel } from "../schema/GetModelsForClass";
import { isValidObjectId } from "mongoose";
import ValidateObjectId from "../types/ValidateObjectId";
export default class ProjectServices {
  async createProjectService({ param, context }: ContextAndEmail) {
    if (param.trim() === "") {
      throw new ApolloError("Title cannot be blank");
    }
    const curUser: User = await GetUserFromCtx(context);
    if (!curUser) {
      throw new ApolloError("Only Verified users can create their projects");
    }
    const CreatorUser = await UserModel.findById(curUser._id);
    const CreatedProject = await ProjectModel.create({
      Title: param,
      createdBy: curUser,
    });
    CreatorUser?.projects.push(CreatedProject._id);
    CreatorUser!!.save();
    return CreatedProject;
  }
  async addUserToProjectService({
    project_id,
    email,
    context,
  }: ContextAndParams) {
    project_id = project_id as string;
    email = email as string;
    context = context as Context;
    if (project_id.trim() === "") {
      throw new ApolloError("id cannot be blank");
    }
    ValidateObjectId([project_id]);
    // curUser is the user adding the new User
    const curUser: User = await GetUserFromCtx(context);
    if (!curUser) {
      throw new ApolloError("Only Verified users can create their projects");
    }
    //curProject is the project in which new user's to be added
    const curProject = await ProjectModel.findById(project_id);
    if (!curProject) {
      throw new ApolloError("No such project exists");
    }
    //checking to ensure creator is the one adding new members
    if (curProject.createdBy?.toString() !== curUser._id.toString()) {
      throw new Error("Only Project Creators can add new members");
    }
    const user_to_add = await UserModel.find().findByEmail(email);
    if (curProject.Members.includes(user_to_add)) {
      throw new ApolloError("User's already present in the Members list");
    }
    //Now ensuring user to be added belongs to the creator's circle
    if (!curUser.circle.includes(user_to_add._id.toString())) {
      throw new ApolloError(
        "Restricted Action, Only users in your circle can be added to your projects member list"
      );
    }
    //Now ensuring the creator cannot add themselves to the members list
    if (user_to_add._id.toString() === curProject.createdBy.toString()) {
      throw new ApolloError("Creator's cannot be a part of the members list");
    }
    try {
      curProject.Members.push(user_to_add._id);
      curProject.save();
      user_to_add.projects.push(curProject._id);
      user_to_add.save();
      return true;
    } catch (e: any) {
      throw new ApolloError(e, " Something went wrong adding new members");
    }
  }
  async removeUserFromProjectService({
    proj_id,
    user_id,
    context,
  }: ContextAndParams) {
    proj_id = proj_id as string; //project to remove from
    user_id = user_id as string; //user to remove
    context = context as Context;
    ValidateObjectId([proj_id, user_id]);
    //user removing other user from project
    const cur_user: User = await GetUserFromCtx(context);
    if (proj_id.trim() === "" || user_id.trim() === "") {
      throw new ApolloError("id cannot be blank");
    }
    //getting the user to remove
    const user_to_remove = await UserModel.findById(user_id);
    if (user_to_remove === null || user_to_remove === undefined) {
      throw new ApolloError("User doesn't exist or was not found");
    }
    //getting the project object
    const cur_proj = await ProjectModel.findById(proj_id);
    if (cur_proj === null || cur_proj === undefined) {
      throw new ApolloError("No such project exists");
    }
    //Ensuring only user themselves or creators can remove
    if (
      cur_proj?.createdBy?.toString() !== cur_user._id.toString() &&
      user_to_remove._id.toString() !== cur_user._id.toString()
    ) {
      throw new ApolloError(
        "Restricted Action ,Only Creators or User themselves can remove user from projects"
      );
    }
    //removing user from members list if theyre present else throwing an error
    const index_user = cur_proj?.Members.indexOf(user_to_remove?._id);
    try {
      if (index_user > -1) {
        cur_proj?.Members.splice(index_user, 1);
        await cur_proj?.save();
        const index_proj = user_to_remove?.projects.indexOf(cur_proj?._id);
        if (index_proj > -1) {
          user_to_remove.projects.splice(index_proj, 1);
          await user_to_remove.save();
        }
        return true;
      } else {
        throw new ApolloError(
          "If user existed they have been removed or user doesn't exist"
        );
      }
    } catch (e: any) {
      throw new ApolloError(e, " Something went wrong");
    }
  }
  async changeProjectTitleService({
    proj_id,
    title,
    context,
  }: ContextAndParams) {
    proj_id = proj_id as string; //project to remove from
    title = title as string; //title to change
    context = context as Context;
    ValidateObjectId([proj_id]);
    const cur_user: User = await GetUserFromCtx(context);
    if (proj_id.trim() === "" || title.trim() === "") {
      throw new ApolloError("id or title cannot be blank");
    }
    const cur_proj = await ProjectModel.findById(proj_id);
    if (cur_proj === null || cur_proj === undefined) {
      throw new ApolloError("No Project found");
    }
    if (cur_proj.createdBy?.toString() !== cur_user._id.toString()) {
      throw new ApolloError("Only Creators can change titles");
    }
    try {
      cur_proj.Title = title;
      await cur_proj.save();
      return true;
    } catch (e: any) {
      throw new ApolloError(e);
    }
  }
}
