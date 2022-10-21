import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Post } from "../../Assets/adicionar.svg";
import { ReactComponent as Feed } from "../../Assets/feed.svg";
import { ReactComponent as Logout } from "../../Assets/sair.svg";
import useMedia from "../../Hooks/useMedia";
import { UserContext } from "../../UserContext";
import Navlink from "../Header/Navlink";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobileMenu, setMobileMenu] = React.useState(null);
  const { logout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Navlink to="/my-account" end>
          <Feed />
          {mobile && "Minhas fotos"}
        </Navlink>

        <Navlink to="/my-account/post">
          <Post />
          {mobile && "Postar foto"}
        </Navlink>

        <button onClick={logout}>
          <Logout />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
