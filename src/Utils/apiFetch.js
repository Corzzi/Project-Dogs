import { API_URL } from "./constants";

const defaultOptions = {
  method: "GET",
  authorized: true,
  noCache: false,
  body: false,
  content: true,
};

export default function apiFetch(url = API_URL, options = defaultOptions) {
  const { method, authorized, noCache, body, content } = {
    ...defaultOptions,
    ...options,
  };

  return fetch(API_URL + url, {
    ...(method ? { method: method } : {}),
    ...(noCache
      ? {
          cache: "no-store",
        }
      : {}),
    headers: {
      ...(content ? { "Content-Type": "application/json" } : {}),
      ...(authorized
        ? {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          }
        : {}),
    },
    ...(body
      ? { body: body instanceof FormData ? body : JSON.stringify(body) }
      : {}),
  });
}
