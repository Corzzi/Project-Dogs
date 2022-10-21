import useQuery from "../Hooks/useQuery";
import apiFetch from "../Utils/apiFetch";

export function UseGetUserQuery() {
  return useQuery("userToken", () =>
    apiFetch("api/user", {
      authorized: true,
    })
  );
}
