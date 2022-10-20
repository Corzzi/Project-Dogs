import React from "react";
import { Route, Routes } from "react-router-dom";
import Head from "../Helper/Head/Head";
import { UserContext } from "../UserContext";
import Feed from "./Feed";
import NotFound from "./NotFound";
import UserHeader from "./UserHeader";
import UserPostPhoto from "./UserPostPhoto";

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha conta" description={`Perfil do usuário`} />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPostPhoto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
