import * as authRequests from "lib/api/authRequests";
import { useMutation } from "react-query";

export function useLogin() {
  // on succes saves the user obj from response to sessionStorage
  return useMutation(authRequests.login, {
    onSuccess: res => {
      sessionStorage.setItem("user", res);
      window.location.href = "/";
    }
  });
}

export function useRegister() {
  return useMutation(authRequests.register, {
    onSuccess: res => {
      sessionStorage.setItem("user", res);
      window.location.href = "/";
    }
  });
}

export function useUserDetails() {
  const data = sessionStorage.getItem("user");
  return { user: data ?? null };
}
