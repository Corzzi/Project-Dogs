import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../Helper/Error/index";
import Head from "../../Helper/Head/index";
import Loading from "../../Helper/Loading/index";
import { useShowPhotoQuery } from "../../Queries/useShowPhotoQuery";
import PhotoContent from "../PhotoContent/index";

const Photo = () => {
  const { id } = useParams();

  const { data, error } = useShowPhotoQuery(id);

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
