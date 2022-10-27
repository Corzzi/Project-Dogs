import React from "react";

export default function useMutation(fetchFn) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  async function mutate() {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetchFn();
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setLoading(false);
      setData(json);
      return { response, json };
    }
  }

  return { data, loading, error, mutate };
}
