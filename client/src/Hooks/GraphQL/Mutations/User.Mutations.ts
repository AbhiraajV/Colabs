import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: createUserInput!) {
    CreateUser(input: $input) {
      username
      email
      _id
    }
  }
`;
export const VERIFY_USER = gql`
  mutation VerifyUser($input: verifyUserInput!) {
    VerifyUser(input: $input)
  }
`;
export const LOGIN_USER = gql`
  mutation LoginUser($input: loginUserInput!) {
    LoginUser(input: $input)
  }
`;
export const ADD_USER_TO_CIRCLE = gql`
  mutation AddUserToCircle($input: addUserToCircleInput!) {
    AddUserToCircle(input: $input)
  }
`;
export const REMOVE_USER_FROM_CIRCLE = gql`
  mutation RemoveUserFromCircle($input: removeUserFromCircleInput!) {
    RemoveUserFromCircle(input: $input)
  }
`;
export const CREATE_PROJECT = gql`
  mutation Mutation($input: createProjectInput!) {
    createProjectResolver(input: $input) {
      Title
      _id
      Progress
      Members {
        username
        email
      }
      Tasks {
        TaskTitle
      }
    }
  }
`;
