import {
  getModelForClass,
  Prop,
  Ref,
  pre,
  post,
  ReturnModelType,
  queryMethod,
} from "@typegoose/typegoose";
import { Field, InputType, MiddlewareFn, ObjectType } from "type-graphql";
import { ProjectSchema } from "./Projects.Schema";
import bcrypt from "bcrypt";
import { IsEmail, Matches, MaxLength, MinLength } from "class-validator";
import { nanoid } from "nanoid";
import { AsQueryMethod } from "@typegoose/typegoose/lib/types";
import { ApolloError } from "apollo-server";
import { UserModel } from "./GetModelsForClass";

export function findByEmail(
  this: ReturnModelType<typeof User, QueryHelpers>,
  email: User["email"] | null
) {
  if (email === null) {
    throw new ApolloError("Email doesn't exist");
  }
  return this.findOne({ email });
}
interface QueryHelpers {
  findByEmail: AsQueryMethod<typeof findByEmail>;
}
@pre<User>("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hashSync(this.password, salt);
  this.password = hash;
})
@queryMethod(findByEmail)
@ObjectType()
export class User {
  @Field(() => String)
  _id: string;

  @Field(() => String)
  @Prop({ required: true })
  username: string;

  @Field(() => String)
  @Prop({ required: true, unique: true })
  email: string;

  @Field(() => [User])
  @Prop({ required: true, ref: () => User, default: [] })
  circle: Ref<User>[];
  // https://stackoverflow.com/questions/70718955/type-graphql-typegoose-backend-error-while-linking-models-error-error-prop-op
  @Field(() => [ProjectSchema])
  @Prop({ required: true, ref: () => ProjectSchema, default: [] })
  projects: Ref<ProjectSchema>[];

  @Field(() => String)
  @Prop({ required: true })
  password: string;

  @Field(() => String, { nullable: true })
  @Prop({ required: false, default: () => nanoid() })
  verificationCode: string;

  @Field(() => Boolean)
  @Prop({ required: true, default: false })
  verified: boolean;
}

@InputType()
export class createUserInput {
  @Field(() => String)
  @Prop({ required: true })
  username: string;

  @IsEmail()
  @Field(() => String)
  @Prop({ required: true })
  email: string;

  @MinLength(6, {
    message: "Password must be atleast 6 characters long",
  })
  @MaxLength(50, {
    message: "Password cannot be longer than 50 words",
  })
  @Field(() => String)
  @Prop({ required: true })
  password: string;

  @Field(() => String)
  @Prop({ required: true })
  confirmPassword: string;
}
@InputType()
export class verifyUserInput {
  @Field(() => String)
  @Prop({ required: true })
  verificationCode: string;

  @IsEmail()
  @Field(() => String)
  @Prop({ required: true })
  email: string;
}
@InputType()
export class loginUserInput {
  @IsEmail()
  @Field(() => String)
  @Prop({ required: true })
  email: string;

  @Field(() => String)
  @Prop({ required: true })
  password: string;
}
@InputType()
export class addUserToCircleInput {
  @IsEmail()
  @Field(() => String)
  @Prop({ required: true })
  email: string;
}
@InputType()
export class removeUserFromCircleInput {
  @IsEmail()
  @Field(() => String)
  @Prop({ required: true })
  email: string;
}
