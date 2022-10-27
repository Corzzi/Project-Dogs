import React, { useContext } from "react";
import { QueryContext } from "../Helper/QueryClientProvider/QueryClientProvider";

export default function useQuery(key, fetchFn) {
  const { cache, setCache } = useContext(QueryContext)
  console.log(cache)
  const [data, setData] = React.useState(cache[key]);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
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
        setCache({
          ...cache,
          [key]: json
        })
        return { response, json };
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return { data, loading, error };
}
