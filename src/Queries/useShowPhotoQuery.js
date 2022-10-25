import useQuery from "../Hooks/useQuery";
import apiFetch from "../Utils/apiFetch";

export function useShowPhotoQuery(id) {
  return useQuery("showPhoto", () =>
    apiFetch(`api/photo/${id}`, {
      method: "",
      authorized: false,
      content: false,
    })
  );
}
