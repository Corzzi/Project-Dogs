import useQuery from "../Hooks/useQuery";
import apiFetch from "../Utils/apiFetch";
import { PAGE_SIZE } from "../Utils/constants";

export function usePhotosQuery({ page, user }) {
  return useQuery(`photos/${user}/${page}`, () => apiFetch(`api/photo/?_page=${page}&_total=${PAGE_SIZE}&_user=${user}`, {
    authorized: false,
    noCache: true
  }))
}
