import { ApolloError } from "apollo-server";
import config from "config";
import jwt from "jsonwebtoken";

const publicKey = Buffer.from(config.get<string>("publicKey"), "base64")
  .toString("ascii")
  .trim();

const privateKey = Buffer.from(config.get<string>("privateKey"), "base64")
  .toString("ascii")
  .trim();
export function signJWT(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJWT(token: string | undefined): {
  email: string;
  username: string;
  id: string;
  verified: boolean;
} | null {
  if (token === undefined) {
    throw new ApolloError("Authentication Token Absent");
  }
  try {
    const decoded = jwt.verify(token!!, publicKey) as {
      email: string;
      username: string;
      id: string;
      verified: boolean;
    };
    return decoded;
  } catch {
    throw new ApolloError(
      "Authentication Failed, User must be logged in for this action"
    );
    return null;
  }
}
