import { Request, Response } from "express";
import { User } from "../schema/User.Schema";
import jwt from "jsonwebtoken";
export default interface Context {
  req: Request;
  res: Response;
  user: {
    email: string;
    username: string;
    id: string;
    verified: boolean;
  } | null;
}
export interface ContextAndEmail {
  param: string;
  context: Context;
}
export interface ContextAndParams {
  [key: string]: string | Context | string[];
}
