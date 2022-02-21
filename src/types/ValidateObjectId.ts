import { ApolloError } from "apollo-server";
import { isValidObjectId } from "mongoose";

export default function ValidateObjectId(ids: string[]) {
  for (var i in ids) {
    if (!isValidObjectId(ids[i])) {
      throw new ApolloError("Invalid Id");
    }
  }
}
export function ValidateCanBeInTask(
  contributors: string[],
  circle: string[],
  members: string[]
) {
  for (var i in contributors) {
    if (
      !circle.includes(contributors[i]) &&
      !members.includes(contributors[i])
    ) {
      throw new ApolloError(
        "Only user's in your circle and/or in projects members list can be here"
      );
    }
  }
}
