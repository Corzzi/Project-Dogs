const API_URL = "https://dogsapi.origamid.dev/json/";

export function POST_PHOTO(formData, token) {
  return {
    url: API_URL + "api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}
