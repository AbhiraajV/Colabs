import { ApolloError } from "apollo-server";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import {
  ProjectSchema,
  createProjectInput,
  addUserToProjectInput,
  removeUserFromProjectInput,
  changeProjectTitleInput,
} from "../schema/Projects.Schema";
import ProjectServices from "../services/Project.Services";
import Context from "../types/ContextType";

@Resolver()
export default class ProjectResolver {
  constructor(private projectServices: ProjectServices) {
    this.projectServices = new ProjectServices();
  }
  @Mutation(() => ProjectSchema)
  async createProjectResolver(
    @Arg("input") input: createProjectInput,
    @Ctx() context: Context
  ) {
    return await this.projectServices.createProjectService({
      param: input.Title,
      context,
    });
  }
  @Mutation(() => Boolean)
  async addUserToProjectResolver(
    @Arg("input") input: addUserToProjectInput,
    @Ctx() context: Context
  ) {
    return await this.projectServices
      .addUserToProjectService({
        project_id: input.project_id,
        email: input.email,
        context: context,
      })
      .then((data) => data)
      .catch((e) => {
        throw new ApolloError(e);
      });
  }
  @Mutation(() => Boolean)
  async removeUserFromProjectResolver(
    @Arg("input") input: removeUserFromProjectInput,
    @Ctx() context: Context
  ) {
    return this.projectServices.removeUserFromProjectService({
      proj_id: input.projectId,
      user_id: input.userId,
      context: context,
    });
  }
  @Mutation(() => Boolean)
  async changeProjectTitleResolver(
    @Arg("input") input: changeProjectTitleInput,
    @Ctx() context: Context
  ) {
    return await this.projectServices.changeProjectTitleService({
      proj_id: input.projectId,
      title: input.title,
      context: context,
    });
  }
}
