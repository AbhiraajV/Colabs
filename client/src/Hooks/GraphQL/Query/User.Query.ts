import { gql, useQuery } from "@apollo/client";
export const GET_CUR_USER = gql`
  query Query {
    GetCurUser {
      _id
      username
      email
      projects {
        _id
        Progress
        # Tasks {
        #   TaskTitle
        # }
        Title
        Members {
          _id
        }
      }
      circle {
        username
        _id
        email
      }
      verified
    }
  }
`;
export const GET_CUR_USER_BY_ID = gql`
  query Query($input: getUserByIdInput!) {
    GetUserById(input: $input) {
      username
      email
      _id
    }
  }
`;
export const useGetCurUserById = (uid: string[]): any => {
  const { error, loading, data } = useQuery(GET_CUR_USER_BY_ID, {
    variables: {
      input: {
        uid,
      },
    },
  });
  if (error) return error;
  if (data == undefined) return {};
  return data.GetUserById;
};
export const useGetCurUser = (): any => {
  const { error, loading, data } = useQuery(GET_CUR_USER);
  console.log(data);
  if (error) return error;
  if (data == undefined) return {};
  return data.GetCurUser;
};
