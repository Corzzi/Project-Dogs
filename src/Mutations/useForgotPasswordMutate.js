import useMutation from "../Hooks/useMutation";
import apiFetch from "../Utils/apiFetch";

export function useForgotPasswordMutate(body) {
  return useMutation(() =>
    apiFetch("api/password/lost", {
      method: "POST",
      authorized: false,
      body: body,
    })
  );
}
