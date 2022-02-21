import { ApolloError } from "apollo-server";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import {
  addUserToCircleInput,
  createUserInput,
  findByEmail,
  loginUserInput,
  removeUserFromCircleInput,
  User,
  verifyUserInput,
} from "../schema/User.Schema";

import { UserModel } from "../schema/GetModelsForClass";
import UserService, { UserInterceptor } from "../services/User.Services";
import Context from "../types/ContextType";
import GetUserFromCtx from "../utils/GetUserFromCtx";
import SendMail from "../utils/mailer";
@Resolver()
export default class UserResolver {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }
  @Query(() => User)
  @UseMiddleware(UserInterceptor)
  async GetCurUser(@Ctx() context: Context) {
    return await GetUserFromCtx(context);
  }
  @Mutation(() => User)
  @UseMiddleware(UserInterceptor)
  CreateUser(@Arg("input") input: createUserInput) {
    return this.userService
      .createUserService(input)
      .then((curUser) => {
        const { email, verificationCode } = curUser;
        SendMail({
          from: "colabsmailer@gmail.com",
          to: email,
          subject: "Verify Your Email",
          text: verificationCode,
        });
        return curUser;
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
  @Mutation(() => Boolean)
  async VerifyUser(@Arg("input") input: verifyUserInput) {
    return this.userService.verifyUserService(input);
  }
  @Mutation(() => String)
  async LoginUser(@Arg("input") input: loginUserInput) {
    return this.userService.loginUserService(input);
  }
  @Mutation(() => Boolean)
  async AddUserToCircle(
    @Arg("input") input: addUserToCircleInput,
    @Ctx() context: Context
  ) {
    return await this.userService.addUserToCircleService({
      param: input.email,
      context,
    });
  }
  @Mutation(() => Boolean)
  async RemoveUserFromCircle(
    @Arg("input") input: removeUserFromCircleInput,
    @Ctx() context: Context
  ) {
    return await this.userService.removeUserFromCircleService({
      param: input.email,
      context,
    });
  }
}
