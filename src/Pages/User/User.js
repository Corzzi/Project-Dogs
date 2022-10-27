import React from "react";
import { Route, Routes } from "react-router-dom";
import Feed from "../../Components/Feed";
import UserHeader from "../../Components/UserHeader";
import UserPostPhoto from "../../Components/UserPostPhoto";
import Head from "../../Helper/Head/Head";
import NotFound from "../../Pages/NotFound";
import { UserContext } from "../../UserContext";

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
