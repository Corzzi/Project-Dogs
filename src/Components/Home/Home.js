import React from "react";
import Head from "../../Helper/Head/index";
import Feed from "../Feed/index";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos."
      />
      <Feed />
    </section>
  );
};

export default Home;
