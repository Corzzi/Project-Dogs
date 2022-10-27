import useQuery from "../Hooks/useQuery";
import apiFetch from "../Utils/apiFetch";

export function usePhotoQuery({ id }) {
  return useQuery(`photo/${id}`, () =>
    apiFetch(`api/photo/${id}`, {
      authorized: false,
      noCache: true,
    })
  );
}
