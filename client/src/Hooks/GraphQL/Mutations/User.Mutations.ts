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
