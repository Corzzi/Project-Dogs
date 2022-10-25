import useMutation from "../Hooks/useMutation";
import apiFetch from "../Utils/apiFetch";

export function usePostPhotoMutate(formData) {
  return useMutation(() =>
    apiFetch("api/photo", {
      method: "POST",
      authorized: true,
      body: formData,
    })
  );
}
