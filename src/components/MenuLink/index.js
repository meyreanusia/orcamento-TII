import styles from "./MenuLink.module.css";
import { Link, NavLink, useLocation } from "react-router-dom";


export default function MenuLink({children, to}) {
  const localizacao = useLocation();
  return (
    <>
      <NavLink
        className={`${styles.link} }`}
        to= {to}>
        {children}
      </NavLink>
    </>
  );
}
