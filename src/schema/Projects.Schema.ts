import { ObjectType, Field, InputType } from "type-graphql";
import { modelOptions, Prop, Ref, Severity } from "@typegoose/typegoose";
import { User } from "./User.Schema";
import TaskSchema from "./Tasks.Schema";
import { IsEmail, MinLength } from "class-validator";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
@ObjectType()
export class ProjectSchema {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @Prop({ required: true })
  Title: string;

  @Field(() => User)
  @Prop({ required: true, ref: () => User })
  createdBy: Ref<User>;

  @Field(() => Number)
  @Prop({ required: true, max: 100, default: 0 })
  Progress: number;

  @Field(() => [User])
  @Prop({ required: true, ref: () => User, default: [] })
  Members: Ref<User>[];

  @Field(() => [TaskSchema])
  @Prop({ required: true, ref: () => TaskSchema, default: [] })
  Tasks: Ref<TaskSchema>[];
}

@InputType()
export class createProjectInput {
  @MinLength(4, {
    message: "Title must be atleast 4 characters long",
  })
  @Field(() => String)
  @Prop({ required: true })
  Title: string;
}
@InputType()
export class addUserToProjectInput {
  @IsEmail()
  @Field(() => String)
  @Prop({ required: true })
  email: string;

  @Field(() => String)
  @Prop({ required: true })
  project_id: string;
}
@InputType()
export class removeUserFromProjectInput {
  @Field(() => String)
  @Prop({ required: true })
  projectId: string;

  @Field(() => String)
  @Prop({ required: true })
  userId: string;
}
@InputType()
export class changeProjectTitleInput {
  @Field(() => String)
  @Prop({ required: true })
  projectId: string;

  @Field(() => String)
  @Prop({ required: true })
  title: string;
}
