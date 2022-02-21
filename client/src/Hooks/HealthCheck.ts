import { useQuery, gql } from "@apollo/client";
const CHECK_HEALTH = gql`
  query Query {
    HealthCheck
  }
`;
export const useHealthCheck = (): String | undefined => {
  const { error, loading, data } = useQuery(CHECK_HEALTH);
  console.log(data);
  return data;
};
