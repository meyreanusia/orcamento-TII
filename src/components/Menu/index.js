import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/elementoDespesa">Elemento despesa</MenuLink>
        <MenuLink to="/acao">Ação</MenuLink>
        <MenuLink to="/fonteRecurso">Fonte recurso</MenuLink>
      </nav>
    </header>
  );
}
