import useMutation from "../Hooks/useMutation";
import apiFetch from "../Utils/apiFetch";

export function useRegisterUserMutation(body) {
  return useMutation(() =>
    apiFetch(`api/user`, {
      method: "POST",
      authorized: false,
      body: body,
    })
  );
}
