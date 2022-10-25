import useMutation from "../Hooks/useMutation";
import apiFetch from "../Utils/apiFetch";

export function useRegisterUserMutate(body) {
  return useMutation(() =>
    apiFetch(`api/user`, {
      method: "POST",
      authorized: false,
      body: body,
    })
  );
}
