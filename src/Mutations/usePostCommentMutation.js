import useMutation from "../Hooks/useMutation";
import apiFetch from "../Utils/apiFetch";

export function usePostCommentMutation(id, body) {
  return useMutation(() =>
    apiFetch(`api/comment/${id}`, {
      method: "POST",
      authorized: true,
      body: body,
    })
  );
}
