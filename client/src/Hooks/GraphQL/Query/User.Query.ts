import { gql, useQuery } from "@apollo/client";
export const GET_CUR_USER = gql`
  query Query {
    GetCurUser {
      _id
      username
      email
      projects {
        Title
        _id
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
export const useGetCurUser = (): any => {
  const { error, loading, data } = useQuery(GET_CUR_USER);
  console.log(data);
  if (error) return error;
  if (data == undefined) return {};
  return data.GetCurUser;
};
