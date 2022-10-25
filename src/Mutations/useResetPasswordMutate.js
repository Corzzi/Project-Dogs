import useMutation from "../Hooks/useMutation";
import apiFetch from "../Utils/apiFetch";

export function useResetPasswordMutate(body) {
  return useMutation(() =>
    apiFetch(`api/password/reset`, {
      method: "POST",
      authorized: false,
      body: body,
    })
  );
}
