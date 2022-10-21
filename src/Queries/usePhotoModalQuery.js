import useQuery from "../Hooks/useQuery";
import apiFetch from "../Utils/apiFetch";

export function usePhotoModalQuery({ id }) {
  return useQuery("photoModal", () =>
    apiFetch(`api/photo/${id}`, {
      authorized: false,
      noCache: true,
    })
  );
}
