import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO } from "../../api";
import Error from "../../Helper/Error/index";
import Head from "../../Helper/Head/index";
import Loading from "../../Helper/Loading/index";
import useFetch from "../../Hooks/useFetch";
import PhotoContent from "../PhotoContent/index";

const Photo = () => {
  const { id } = useParams();
  const { data, error, request } = useFetch();

  React.useEffect(() => {
    const { url } = PHOTO(id);
    request(url);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (!data) return <Loading />;
  return (
    <section className="container mainContainer">
      <Head
        title={data.photo.title}
        description={`Página foto da ${data.photo.title}`}
      />
      <PhotoContent single={true} data={data} />
    </section>
  );
};

export default Photo;
