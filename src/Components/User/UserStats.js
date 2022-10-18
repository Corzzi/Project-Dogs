import React from "react";
import { GET_STATS } from "../../api";
import Error from "../../Helper/Error";
import Head from "../../Helper/Head";
import Loading from "../../Helper/Loading";
import useFetch from "../../Hooks/useFetch";

const UserStatsContent = React.lazy(() => import("./UserStatsContent"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = GET_STATS(token);
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<Loading />}>
        <Head title="Estatísticas" description="Estatísticas do usuário" />
        <UserStatsContent data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
