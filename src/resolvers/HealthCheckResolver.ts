import { Query, Resolver } from "type-graphql";
@Resolver()
export default class HealthCheckResolver {
  @Query(() => String)
  async HealthCheck() {
    return "Healthy Line Established";
  }
}
