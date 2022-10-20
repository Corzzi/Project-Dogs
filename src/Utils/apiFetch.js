import { API_URL } from "./constants";

const defaultOptions = {
  method: "GET",
  authorized: true,
  noCache: false,
};

export default function apiFetch(url = API_URL, options = defaultOptions) {
  const { method, authorized, noCache } = {
    ...defaultOptions,
    ...options,
  };

  return fetch(API_URL + url, {
    method,
    ...(noCache
      ? {
          cache: "no-store",
        }
      : {}),
    headers: {
      "Content-Type": "application/json",
      ...(authorized
        ? {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          }
        : {}),
    },
  });
}
