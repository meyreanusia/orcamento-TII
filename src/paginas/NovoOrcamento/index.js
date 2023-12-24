import apiFonteRecurso from "../../services/apiFonteRecurso.js";
import apiAcao from "../../services/apiAcao.js";
import useApi from "../../services/useApi.js";
import apiElementoDespesa from "../../services/apiElementoDespesa.js";
import apiGrupoDespesa from "../../services/apiGrupoDespesa.js";
import apiLancamento from "../../services/apiLancamento.js";
import useApiModalidadeAplicacao from "../../services/apiModalidadeAplicacao.js";
import apiObetivoEstrategico from "../../services/apiObetivoEstrategico.js";
import apiPrograma from "../../services/apiPrograma.js";
import apiSolicitante from "../../services/apiSolicitante.js";
import apiTransacao from "../../services/apiTransacao.js";
import apiUnidade from "../../services/apiUnidade.js";
import apiUnidadeOrcamentaria from "../../services/apiUnidadeOrcamentaria.js";
import React, { useState } from "react";
import "./Orcamento.css";
import ButtonCadastrar from "../../components/ButtonCadastrar/index.js";
function NovoOrcamento() {
  const { handleBuscar: buscarAcao } = apiAcao();
  const { handleBuscar: buscarFonteRecurso } = apiFonteRecurso();
  const { handleBuscar: buscarElementoDespesa } = apiElementoDespesa();
  const { handleBuscar: buscarGrupoDespesa } = apiGrupoDespesa();
  const { handleBuscar: buscarLancamento } = apiLancamento();
  const { handleBuscar: buscarModalidade } = useApiModalidadeAplicacao();
  const { handleBuscar: buscarObetivoEstrategico } = apiObetivoEstrategico();
  const { handleBuscar: buscarPrograma } = apiPrograma();
  const { handleBuscar: buscarSolicitante } = apiSolicitante();
  const { handleBuscar: buscarTransacao } = apiTransacao();
  const { handleBuscar: buscarUnidade } = apiUnidade();
  const { handleBuscar: buscarUnidadeOrcamentaria } = apiUnidadeOrcamentaria();

  const { dados: dadosAcao } = useApi({ handleBuscar: buscarAcao });
  const { dados: dadosFonteRecurso } = useApi({
    handleBuscar: buscarFonteRecurso,
  });
  const { dados: dadosElementoDespesa } = useApi({
    handleBuscar: buscarElementoDespesa,
  });
  const { dados: dadosGrupoDespesa } = useApi({
    handleBuscar: buscarGrupoDespesa,
  });
  const { dados: dadosLancamento } = useApi({ handleBuscar: buscarLancamento });
  const { dados: dadosModalidade } = useApi({ handleBuscar: buscarModalidade });
  const { dados: dadosObetivoEstrategico } = useApi({
    handleBuscar: buscarObetivoEstrategico,
  });
  const { dados: dadosPrograma } = useApi({ handleBuscar: buscarPrograma });
  const { dados: dadosSolicitante } = useApi({
    handleBuscar: buscarSolicitante,
  });
  const { dados: dadosTransacao } = useApi({ handleBuscar: buscarTransacao });
  const { dados: dadosUnidade } = useApi({ handleBuscar: buscarUnidade });
  const { dados: dadosUnidadeOrcamentaria } = useApi({
    handleBuscar: buscarUnidadeOrcamentaria,
  });

  const [valoresSelecionados, setValoresSelecionados] = useState({
    acao: "",
    elementoDespesa: "",
    fonteRecurso: "",
    grupoDespesa: "",
    lancamento: "",
    modalidadeAplicacao: "",
    obetivoEstrategico: "",
    programa: "",
    solicitante: "",
    transacao: "",
    unidade: "",
    unidadeOrcamentaria: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValoresSelecionados((prevValores) => ({
      ...prevValores,
      [name]: value,
    }));
  }

  function cadastrarOrcamento(event) {
    event.preventDefault();
    const anoOrcamento = document.getElementById("anoOrcamento").value;
    const contratado = document.getElementById("contratado").value;
    const dataLancamento = document.getElementById("dataLancamento").value;
    const descricao = document.getElementById("descricao").value;
    const ged = document.getElementById("ged").value;
    const numeroLancamento = document.getElementById("numeroLancamento").value;
    const valor = document.getElementById("valor").value;
    const lancamentoValido =
      document.getElementById("lancamentoValido").checked;
    console.log(valoresSelecionados);
  }
  return (
    <div className="containerForm">
      <h1>Novo Orçamento</h1>
      <form action="" className="formOrcamento" onSubmit={cadastrarOrcamento}>
        <div className="containerInputs">
          <section>
            <label htmlFor="anoOrcamento">Ano do orçamento*</label>
            <input type="number" id="anoOrcamento" />
            <label htmlFor="contratado">Contratado </label>
            <input type="text" id="contratado" />
            <label htmlFor="dataLancamento">Data Lançamento*</label>
            <input type="date" id="dataLancamento" />
            <label htmlFor="descricao">Descricao*</label>
            <textarea name="" id="descricao" cols="10" rows="5"></textarea>
          </section>

          <section>
            <label htmlFor="ged">Ged</label>
            <input type="text" id="ged" />
            <label htmlFor="numeroLancamento">Número lançamento</label>
            <input type="number" id="numeroLancamento" />
            <label htmlFor="valor">Valor*</label>
            <input type="number" id="valor" />
            <label htmlFor="lancamentoValido">Lançamento válido*</label>
            <input type="checkbox" id="lancamentoValido" />
          </section>
        </div>

        <div className="containerSelect">
          <section>
            <label htmlFor="acao">Ação*</label>
            <select name="acao" id="acao" onChange={handleChange}>
              <option>---SELECT---</option>
              {dadosAcao.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="elementoDespesa">Elemento Despesa*</label>
            <select
              name="elementoDespesa"
              id="elementoDespesa"
              onChange={handleChange}
            >
              <option>---SELECT---</option>
              {dadosElementoDespesa.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="fonteRecurso">Fonte Recurso*</label>
            <select
              name="fonteRecurso"
              id="fonteRecurso"
              onChange={handleChange}
            >
              <option>---SELECT---</option>
              {dadosFonteRecurso.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="grupoDespesa">Grupo Despesa*</label>
            <select
              name="grupoDespesa"
              id="grupoDespesa"
              onChange={handleChange}
            >
              <option>---SELECT---</option>
              {dadosGrupoDespesa.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="lancamento">Lançamento</label>
            <select name="lancamento" id="lancamento" onChange={handleChange}>
              <option>---SELECT---</option>
              {dadosLancamento.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="modalidadeAplicacao">Modalidade*</label>
            <select
              name="modalidadeAplicacao"
              id="modalidadeAplicacao"
              onChange={handleChange}
            >
              <option>---SELECT---</option>
              {dadosModalidade.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
          </section>

          <section>
            <label htmlFor="obetivoEstrategico">Obetivo Estrategico*</label>
            <select
              name="obetivoEstrategico"
              id="obetivoEstrategico"
              onChange={handleChange}
            >
              <option>---SELECT---</option>
              {dadosObetivoEstrategico.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="programa">Programa*</label>
            <select name="programa" id="programa" onChange={handleChange}>
              <option>---SELECT---</option>
              {dadosPrograma.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="solicitante">Solicitante*</label>
            <select name="solicitante" id="solicitante" onChange={handleChange}>
              <option>---SELECT---</option>
              {dadosSolicitante.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="transacao">Transacao*</label>
            <select name="transacao" id="transacao" onChange={handleChange}>
              <option>---SELECT---</option>
              {dadosTransacao.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="unidade">Unidade*</label>
            <select name="unidade" id="unidade" onChange={handleChange}>
              <option>---SELECT---</option>
              {dadosUnidade.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="unidadeOrcamentaria">Unidade Orcamentaria*</label>
            <select
              name="unidadeOrcamentaria"
              id="unidadeOrcamentaria"
              onChange={handleChange}
            >
              <option>---SELECT---</option>
              {dadosUnidadeOrcamentaria.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
          </section>
        </div>

        <ButtonCadastrar />
      </form>
    </div>
  );
}

export default NovoOrcamento;
