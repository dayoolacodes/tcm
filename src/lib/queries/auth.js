import * as authRequests from "lib/api/authRequests";
import { useQuery, useMutation, useQueryCache } from "react-query";

// useQuery takes care of all GET requests and caches the result
// useMutation takes care of all queries witha a payload used to
// mutate data, adn also caches results

// useQueryCache exposes apis used to access react-query's storage(cache)

// we use hooks notation to invoke useQuery due to the rules of hooks in react

export function useLogin() {
  const queryCache = useQueryCache();

  // on succes saves the user obj from response to reactquery cache
  //  current version using the query key "user"
  return useMutation(authRequests.login, {
    onSuccess: res => {
      queryCache.setQueryData("user", res.user);
    }
  });
}

export function useRegister() {
  const queryCache = useQueryCache();

  return useMutation(authRequests.register, {
    onSuccess: res => {
      queryCache.setQueryData("user", res.user);
    }
  });
}

// Get infomation about current user by calling the data from
// "user" query in react-query's cache and assign this query a key of "userDetails"
// returns the user object and status of the query ie loading, success, error ....
export function useUserDetails() {
  const queryCache = useQueryCache();

  const { data, status } = useQuery({
    queryKey: "userDetails",
    queryFn: async () => await queryCache.getQueryData("user")
  });

  return { user: data ?? null, status };
}
