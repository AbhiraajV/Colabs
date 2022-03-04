import { gql } from "@apollo/client";

export const CHANGE_PROJECT_TITLE = gql`
  mutation Mutation($input: changeProjectTitleInput!) {
    changeProjectTitleResolver(input: $input)
  }
`;
export const ADD_USER_TO_PROJECT = gql`
  mutation AddUserToProjectResolver($input: addUserToProjectInput!) {
    addUserToProjectResolver(input: $input)
  }
`;
