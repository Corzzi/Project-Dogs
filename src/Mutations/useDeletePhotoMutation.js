import useMutation from "../Hooks/useMutation";
import apiFetch from "../Utils/apiFetch";

export function useDeletePhotoMutation(id) {
  return useMutation(() =>
    apiFetch(`api/photo/${id}`, {
      method: "DELETE",
      content: false,
    })
  );
}
