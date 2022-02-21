import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import TaskSchema, {
  createTaskInput,
  setDeadlineInput,
} from "../schema/Tasks.Schema";
import TaskServices from "../services/Task.Service";
import Context from "../types/ContextType";

@Resolver()
export default class TaskResolver {
  constructor(private taskServices: TaskServices) {
    this.taskServices = new TaskServices();
  }
  @Mutation(() => TaskSchema)
  async createTaskResolver(
    @Arg("input") input: createTaskInput,
    @Ctx() context: Context
  ) {
    return await this.taskServices.createTaskService({ ...input, context });
  }

  @Mutation(() => Boolean)
  async setDeadlineResolver(
    @Arg("input") input: setDeadlineInput,
    @Ctx() context: Context
  ) {}
}
