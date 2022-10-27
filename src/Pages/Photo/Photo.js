import React from "react";
import { useParams } from "react-router-dom";
import PhotoContent from "../../Components/PhotoContent";
import Error from "../../Helper/Error";
import Head from "../../Helper/Head";
import Loading from "../../Helper/Loading";
import { usePhotoQuery } from "../../Queries/usePhotoQuery";

const Photo = () => {
  const { id } = useParams();

  const { data, error } = usePhotoQuery({ id });

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
