import {
  createUserInput,
  loginUserInput,
  verifyUserInput,
  addUserToCircleInput,
  removeUserFromCircleInput,
  User,
} from "../schema/User.Schema";
import { ProjectModel, UserModel } from "../schema/GetModelsForClass";
import { findByEmail } from "../schema/User.Schema";
import bcrypt from "bcrypt";
import { ApolloError } from "apollo-server";
import { signJWT } from "../utils/JWT";
import Context, { ContextAndEmail } from "../types/ContextType";
import { Ctx, MiddlewareFn } from "type-graphql";
import GetUserFromCtx from "../utils/GetUserFromCtx";
export default class UserServices {
  async createUserService(input: createUserInput) {
    try {
      const { password, confirmPassword, username, email } = input;
      if (username.trim() === "" || email.trim() === "") {
        throw new Error("Username or Email was not provided");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      if (await UserModel.findOne({ email })) {
        throw new Error("User with this email already exists");
      }

      return UserModel.create(input);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async verifyUserService({ email, verificationCode }: verifyUserInput) {
    if (verificationCode === null) {
      throw new Error("Invalid verification code");
    }
    const curUser = await UserModel.find().findByEmail(email);
    console.log(curUser, " ", curUser.verificationCode, " ", verificationCode);
    if (curUser.verificationCode === verificationCode) {
      console.log("hi");
      curUser.verified = true;
      curUser.verificationCode = "";
      await curUser.save();
      return true;
    }
    return false;
  }
  async loginUserService({ email, password }: loginUserInput) {
    const curUser = await UserModel.find().findByEmail(email).lean();
    if (!curUser.password) {
      throw new ApolloError("Invalid Credentials");
    }
    const isPasswordValid = await bcrypt.compare(password, curUser.password);
    if (!isPasswordValid) {
      throw new ApolloError("Invalid Credentials");
    } else {
      const token = signJWT(
        {
          id: curUser._id,
          email: curUser.email,
          username: curUser.username,
          verified: curUser.verified,
        },
        {
          expiresIn: "1y",
        }
      );
      return token;
    }
  }
  async addUserToCircleService({ param, context }: ContextAndEmail) {
    const email = param;
    const curUser = await GetUserFromCtx(context);
    if (curUser.email === email) {
      throw new ApolloError(
        "You cannot add yourself to your circle you lonely f*ck"
      );
    }
    const userToAdd = await UserModel.find().findByEmail(email);
    if (!userToAdd || !userToAdd.verified) {
      throw new ApolloError(
        "No such user was found or they're account isnt verified yet"
      );
    }
    if (curUser.circle.includes(userToAdd._id)) {
      throw new ApolloError("User is already in your circle");
    }

    try {
      curUser.circle.push(userToAdd);
      await curUser.save();
      return true;
    } catch (e: any) {
      throw new ApolloError(e);
    }
  }
  async removeUserFromCircleService({ param, context }: ContextAndEmail) {
    const email = param;
    const curUser = await GetUserFromCtx(context);
    const userToRemove = await UserModel.find().findByEmail(email);

    if (curUser.email === email) {
      throw new ApolloError("You cannot remove/add yourself to your circle");
    }
    if (!userToRemove) {
      throw new ApolloError(
        "No such user was found or they're account isnt verified yet"
      );
    }
    if (!curUser.circle.includes(userToRemove._id)) {
      throw new ApolloError("User is not in your circle");
    }
    try {
      curUser.circle.remove(userToRemove);
      await curUser.save();
      return true;
    } catch (e: any) {
      throw new ApolloError(e);
    }
  }
}
export const UserInterceptor: MiddlewareFn<any> = async ({ info }, next) => {
  const user = await next();
  // intercept user before returning the query
  // get user ids from the circle and fetch actual users for each
  if (user === undefined) {
    return;
  }
  var circle = user.circle;
  var populatedCircle = [];
  if (circle.length !== 0) {
    for (var i in circle) {
      let user_in_circle = await UserModel.findById(circle[i]);
      populatedCircle.push(user_in_circle);
    }
  }

  var projects = user.projects;
  var populatedprojects = [];
  if (projects.length !== 0) {
    for (var i in projects) {
      let user_in_projects = await ProjectModel.findById(projects[i]);
      user_in_projects!.createdBy = await UserModel.findById(
        user_in_projects?.createdBy
      ).username;
      populatedprojects.push(user_in_projects);
    }
  }
  console.log(populatedprojects);
  user.circle = populatedCircle;
  user.projects = populatedprojects;

  // removing password verificationCode
  user.password = "Restricted";
  user.verificationCode = "Restricted";
  return user;
};
