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
        <MenuLink to="/unidade">Unidade</MenuLink>
        <MenuLink to="/transacao">Transação</MenuLink>
        <MenuLink to="/lancamento">Lançamento</MenuLink>
        <MenuLink to="/solicitante">Solicitante</MenuLink>
        <MenuLink to="/objetivoEstrategico">Objetivo estratégico</MenuLink>
        <MenuLink to="/unidadeOrcamentaria">Unidade Orcamentaria</MenuLink>
        <MenuLink to="/elementoDespesa">Elemento Despesa</MenuLink>
        <MenuLink to="/programa">Programa</MenuLink>
        <MenuLink to="/modalidadeAplicacao">Modalidade Aplicação</MenuLink>
      </nav>
    </header>
  );
}
