import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navlink.module.css";

const Navlink = ({ children, path, ...props }) => {
  return (
    <NavLink
      to={path}
      className={(navData) => (navData.isActive ? styles.active : "")}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default Navlink;
