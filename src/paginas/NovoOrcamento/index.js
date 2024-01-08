import apiFonteRecurso from "../../services/apiFonteRecurso.js";
import apiAcao from "../../services/apiAcao.js";
import useApi from "../../services/useApi.js";
import apiElementoDespesa from "../../services/apiElementoDespesa.js";
import apiGrupoDespesa from "../../services/apiGrupoDespesa.js";
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
import apiOrcamento from "../../services/apiOrcamento.js";
import apiLancamento from '../../services/apiLancamento.js';

function NovoOrcamento() {

  const { handleBuscar: buscarAcao } = apiAcao();
  const { handleBuscar: buscarFonteRecurso } = apiFonteRecurso();
  const { handleBuscar: buscarElementoDespesa } = apiElementoDespesa();
  const { handleBuscar: buscarGrupoDespesa } = apiGrupoDespesa();
  const { handleBuscar: buscarOrcamento, handleSubmit } = apiOrcamento();
  const { handleBuscar: buscarModalidade } = useApiModalidadeAplicacao();
  const { handleBuscar: buscarObetivoEstrategico } = apiObetivoEstrategico();
  const { handleBuscar: buscarPrograma } = apiPrograma();
  const { handleBuscar: buscarSolicitante } = apiSolicitante();
  const { handleBuscar: buscarLancamento } = apiLancamento();
  const { handleBuscar: buscarTransacao } = apiTransacao();
  const { handleBuscar: buscarUnidade } = apiUnidade();
  const { handleBuscar: buscarUnidadeOrcamentaria } = apiUnidadeOrcamentaria();

  const { dados: dadosAcao } = useApi({ handleBuscar: buscarAcao });
  const { dados: dadosFonteRecurso } = useApi({ handleBuscar: buscarFonteRecurso,});
  const { dados: dadosElementoDespesa } = useApi({handleBuscar: buscarElementoDespesa,});
  const { dados: dadosGrupoDespesa } = useApi({handleBuscar: buscarGrupoDespesa,});
  const { dados: dadosOrcamento } = useApi({ handleBuscar: buscarOrcamento });
  const { dados: dadosModalidade } = useApi({ handleBuscar: buscarModalidade });
  const { dados: dadosObetivoEstrategico } = useApi({handleBuscar: buscarObetivoEstrategico,});
  const { dados: dadosPrograma } = useApi({ handleBuscar: buscarPrograma });
  const { dados: dadosTransacao } = useApi({ handleBuscar: buscarTransacao });
  const { dados: dadosLancamento } = useApi({handleBuscar: buscarLancamento,});
  const { dados: dadosSolicitante } = useApi({handleBuscar: buscarSolicitante,});
  const { dados: dadosUnidade } = useApi({ handleBuscar: buscarUnidade });
  const { dados: dadosUnidadeOrcamentaria } = useApi({handleBuscar: buscarUnidadeOrcamentaria});

  const [valoresSelecionados, setValoresSelecionados] = useState({
    idAcao: "",
    idElementoDespesa: "",
    idFonteRecurso: "",
    idGrupoDespesa: "",
    idLancamentoPai: "",
    idModalidadeAplicacao: "",
    idObjetivoEstrategico: "",
    idPrograma: "",
    idSolicitante: "",
    idTipoTransacao: "",
    idUnidade: "",
    idUnidadeOrcamentaria: "",
    idTipoLancamento: ""
  });


  function handleChange(event) {
    const { name, value } = event.target;
    setValoresSelecionados((prevValores) => ({
      ...prevValores,
      [name]: value,
    }));
  }

  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  function cadastrarOrcamento(event) {
    event.preventDefault();

    const anoOrcamento = document.getElementById("anoOrcamento").value;
    const contratado = document.getElementById("contratado").value;
    const dataLancamento = document.getElementById("dataLancamento").value;
    const descricao = document.getElementById("descricao").value;
    const ged = document.getElementById("ged").value;
    const numeroLancamento = document.getElementById("numeroLancamento").value;
    const valor = document.getElementById("valor").value;
    const lancamentoInvalido =document.getElementById("lancamentoValido").checked;
     
    const orcamento = {
      anoOrcamento,
      contratado,
      dataLancamento,
      descricao,
      ged,
      numeroLancamento,
      valor,
      lancamentoInvalido,
    ...valoresSelecionados
    }

    // handleSubmit(orcamento)
    // .then(() => {
    //   alert("Orçamento criado com sucesso");

    //   window.location.reload();
    // })
    // .catch((erro) => {
    //   console.error("Erro ao cadastrar o orçamento:", erro);
    // });


  }
  return (
    <div className="containerForm">
      <h1>Novo Orçamento</h1>
      <form action="" className="formOrcamento" onSubmit={cadastrarOrcamento}>
        <div className="containerInputs">
          <section>
            <label htmlFor="anoOrcamento">Ano do orçamento*</label>
            <input type="number" id="anoOrcamento" required />
            <label htmlFor="contratado">Contratado </label>
            <input type="text" id="contratado" />
            <label htmlFor="dataLancamento">Data Lançamento*</label>
            <input type="date" id="dataLancamento" required />
            <label htmlFor="descricao">Descricao*</label>
            <textarea name="" id="descricao" cols="10" rows="5" required></textarea>
          </section>

          <section>
            <label htmlFor="ged">Ged</label>
            <input type="text" id="ged" />
            <label htmlFor="numeroLancamento">Número lançamento</label>
            <input type="number" id="numeroLancamento" />
            <label htmlFor="valor">Valor*</label>
            <input type="number" id="valor" required />
            <label htmlFor="lancamentoValido">Lançamento válido</label>
            <input type="checkbox" id="lancamentoValido" />
          </section>
        </div>

        <div className="containerSelect">
          <section>
            <label htmlFor="acao">Ação*</label>
            <select
              name="idAcao"
              id="acao"
              onChange={handleChange}
              required={valoresSelecionados.acao === ""}
            >
              <option value={""}>---SELECT---</option>
              {dadosAcao.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="elementoDespesa">Elemento Despesa*</label>
            <select
              name="idElementoDespesa"
              id="elementoDespesa"
              onChange={handleChange}
              required={valoresSelecionados.idElementoDespesa === ""}
            >
              <option value={""}>---SELECT---</option>
              {dadosElementoDespesa.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="fonteRecurso">Fonte Recurso*</label>
            <select name="idFonteRecurso" id="fonteRecurso" onChange={handleChange}
             required={valoresSelecionados.idFonteRecurso === ""} >
              <option value >---SELECT---</option>

              {dadosFonteRecurso.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="grupoDespesa">Grupo Despesa*</label>
            <select
              name="idGrupoDespesa"
              id="grupoDespesa"
              onChange={handleChange}
              required={valoresSelecionados.idGrupoDespesa === ""}
            >
              <option value={""}>---SELECT---</option>
              {dadosGrupoDespesa.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="lancamento">Lançamento</label>
            <select name="idLancamentoPai" id="lancamento" onChange={handleChange}>
              <option value={""}>---SELECT---</option>
              {dadosOrcamento.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.descricao}
                </option>
              ))}
            </select>
            <label htmlFor="idLancamentoPai">Tipo Lançamento*</label>
            <select 
              name="idTipoLancamento" 
              id="idLancamentoPai" 
              onChange={handleChange}
              required={valoresSelecionados.idTipoLancamento === ""}
            >
              <option value={""}>---SELECT---</option>
              {dadosLancamento.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="idModalidadeAplicacao">Modalidade*</label>
            <select
              name="idModalidadeAplicacao"
              id="idModalidadeAplicacao"
              onChange={handleChange}
              required={valoresSelecionados.idModalidadeAplicacao === ""}
            >
              <option value={""}>---SELECT---</option>

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
              name="idObjetivoEstrategico"
              id="obetivoEstrategico"
              onChange={handleChange}
              required={valoresSelecionados.idObjetivoEstrategico === ""}
            >
              <option value={""}>---SELECT---</option>
              {dadosObetivoEstrategico.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="programa">Programa*</label>
            <select
              name="idPrograma"
              id="programa"
              onChange={handleChange}
              required={valoresSelecionados.idPrograma === ""}
            >
              <option value={""}>---SELECT---</option>
              {dadosPrograma.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="solicitante">Solicitante*</label>
            <select
              name="idSolicitante"
              id="solicitante"
              onChange={handleChange}
              required={valoresSelecionados.idSolicitante === ""}
            >
              <option value={""}>---SELECT---</option>
              {dadosSolicitante.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="idTipoTransacao">Transacao*</label>
            <select
              name="idTipoTransacao"
              id="idTipoTransacao"
              onChange={handleChange}
              required={valoresSelecionados.transacao === ""}
            >
              <option value={""}>---SELECT---</option>
              {dadosTransacao.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="unidade">Unidade*</label>
            <select
              name="idUnidade"
              id="unidade"
              onChange={handleChange}
              required={valoresSelecionados.idUnidade === ""}
            >
              <option value={""}>---SELECT---</option>
              {dadosUnidade.map((dado) => (
                <option key={dado.id} value={dado.id}>
                  {dado.nome}
                </option>
              ))}
            </select>
            <label htmlFor="unidadeOrcamentaria">Unidade Orcamentaria*</label>
            <select
              name="idUnidadeOrcamentaria"
              id="unidadeOrcamentaria"
              onChange={handleChange}
              required={valoresSelecionados.idUnidadeOrcamentaria === ""}
            >
              <option value={""}>---SELECT---</option>
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
 