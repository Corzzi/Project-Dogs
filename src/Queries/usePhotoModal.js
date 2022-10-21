import useQuery from "../Hooks/useQuery";
import apiFetch from "../Utils/apiFetch";

export function usePhotoModal({ id }) {
  return useQuery("photoModal", () =>
    apiFetch(`api/photo/${id}`, {
      authorized: false,
      noCache: true,
    })
  );
}
