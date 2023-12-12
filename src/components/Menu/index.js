import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header>

      <nav className={styles.navegacao}>
      <img src="marca-mp-se.png" className={styles.logo}></img>
        <MenuLink to="/inicio">Início</MenuLink>
        <MenuLink to="/acao">Ação</MenuLink>
        <MenuLink to="/fonteRecurso">Fonte recurso</MenuLink>
        <MenuLink to="/grupoDespesa">Grupo despesa</MenuLink>
      </nav>
    </header>
  );
}
