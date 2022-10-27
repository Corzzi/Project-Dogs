import useMutation from "../Hooks/useMutation";
import apiFetch from "../Utils/apiFetch";

export function useResetPasswordMutation(body) {
  return useMutation(() =>
    apiFetch(`api/password/reset`, {
      method: "POST",
      authorized: false,
      body: body,
    })
  );
}
