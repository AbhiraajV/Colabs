import { Prop, Ref } from "@typegoose/typegoose";
import { ArrayMinSize, MinLength } from "class-validator";
import { Field, InputType, ObjectType } from "type-graphql";
import { ProjectSchema } from "./Projects.Schema";
import { User } from "./User.Schema";

@ObjectType()
export default class TaskSchema {
  @Field(() => String)
  @Prop({ required: true })
  TaskTitle: string;

  @Field(() => String)
  Description: string;

  @Field(() => Boolean)
  @Prop({ required: true, default: false })
  isCompleted: boolean;

  @Field(() => [TaskSchema])
  @Prop({ required: true, default: [] })
  ChildTask: Ref<TaskSchema>[];

  @Field(() => ProjectSchema)
  @Prop({ required: true, ref: () => ProjectSchema })
  ParentProject: Ref<ProjectSchema>;

  @Field(() => [User])
  @Prop({ required: true, ref: () => User })
  Contributors: Ref<User>[];

  @Field(() => Date)
  @Prop({ default: Date.now() })
  Deadline: Date;

  @Field(() => Boolean)
  @Prop({ required: true, default: false })
  hasDeadline: Boolean;
}
@InputType()
export class createTaskInput {
  @Field(() => String)
  @Prop({ required: true })
  parentProjectId: string;

  @MinLength(1, {
    message: "Minimum length of a task title must be 1 character",
  })
  @Field(() => String)
  @Prop({ required: true })
  taskTitle: string;

  @Field(() => String)
  @Prop({ required: false })
  description: string;

  @ArrayMinSize(1, {
    message: "Atleast One user must be present",
  })
  @Field(() => [String])
  @Prop({ required: true })
  contributors: [string];
}
@InputType()
export class setDeadlineInput {
  @Field(() => String)
  @Prop({ required: true })
  taskId: string;

  @Field(() => Date)
  @Prop({ required: true })
  deadline: Date;
}
