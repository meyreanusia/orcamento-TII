import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <header>
      <img src="marca-mp-se.png" className={styles.logo}></img>

      <nav className={styles.navegacao}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/orcamento">Orçamento</MenuLink>
        <MenuLink to="/novoOrcamento">Novo Orçamento</MenuLink>
        <MenuLink to="/acao">Ação</MenuLink>
        <MenuLink to="/fonteRecurso">Fonte Recurso</MenuLink>
        <MenuLink to="/grupoDespesa">Grupo Despesa</MenuLink>
        <MenuLink to="/unidade">Unidade</MenuLink>
        <MenuLink to="/transacao">Transação</MenuLink>
        <MenuLink to="/solicitante">Solicitante</MenuLink>
        <MenuLink to="/objetivoEstrategico">Objetivo Estratégico</MenuLink>
        <MenuLink to="/unidadeOrcamentaria">Unidade Orcamentaria</MenuLink>
        <MenuLink to="/elementoDespesa">Elemento Despesa</MenuLink>
        <MenuLink to="/programa">Programa</MenuLink>
        <MenuLink to="/tipoLancamento">Tipo Lançamento</MenuLink>
        <MenuLink to="/modalidadeAplicacao">Modalidade Aplicação</MenuLink>
      </nav>
    </header>
  );
}
