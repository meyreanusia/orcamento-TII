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

import "./Orcamento.css";

function Orcamento() {
  const { handleBuscar: buscarAcao } = apiAcao();
  const { handleBuscar: buscarFonteRecurso } = apiFonteRecurso();
  const { handleBuscar: buscarElementoDespesa } = apiElementoDespesa();
  const { handleBuscar: buscarGrupoDespesa} = apiGrupoDespesa();
  const { handleBuscar: buscarLancamento} = apiLancamento();
  const { handleBuscar: buscarModalidade} = useApiModalidadeAplicacao();
  const { handleBuscar: buscarObetivoEstrategico} = apiObetivoEstrategico();
  const { handleBuscar: buscarPrograma} = apiPrograma();
  const { handleBuscar: buscarSolicitante} = apiSolicitante();
  const { handleBuscar: buscarTransacao} = apiTransacao();
  const { handleBuscar: buscarUnidade} = apiUnidade();
  const { handleBuscar: buscarUnidadeOrcamentaria} = apiUnidadeOrcamentaria();

  const { dados: dadosAcao } = useApi({ handleBuscar: buscarAcao});
  const { dados: dadosFonteRecurso } = useApi({handleBuscar: buscarFonteRecurso});
  const { dados: dadosElementoDespesa } = useApi({handleBuscar: buscarElementoDespesa});
  const { dados: dadosGrupoDespesa} = useApi({handleBuscar: buscarGrupoDespesa});
  const { dados: dadosLancamento} = useApi({handleBuscar: buscarLancamento});
  const { dados: dadosModalidade} = useApi({handleBuscar: buscarModalidade});
  const { dados: dadosObetivoEstrategico} = useApi({handleBuscar: buscarObetivoEstrategico});
  const { dados: dadosPrograma} = useApi({handleBuscar: buscarPrograma});
  const { dados: dadosSolicitante} = useApi({handleBuscar: buscarSolicitante});
  const { dados: dadosTransacao} = useApi({handleBuscar: buscarTransacao});
  const { dados: dadosUnidade} = useApi({handleBuscar: buscarUnidade});
  const { dados: dadosUnidadeOrcamentaria} = useApi({handleBuscar: buscarUnidadeOrcamentaria});

  return (
    <div className="containerForm">
      <h1>Orçamento</h1>
      <form action="" className="formOrcamento">
        <div className="containerInputs">
          <label htmlFor="anoOrcamento">Ano do orçamento*</label>
          <input type="number" id="anoOrcamento" />
          <label htmlFor="contratado">Contratado </label>
          <input type="text" id="contratado" />
          <label htmlFor="dataLancamento">Data Lançamento*</label>
          <input type="date" id="dataLancamento" />
          <label htmlFor="descricao">Descricao*</label>
          <textarea name="" id="descricao" cols="10" rows="5"></textarea>
          <label htmlFor="ged">Ged</label>
          <input type="text" id="ged" />
         
          <label htmlFor="numeroLancamento">Número lançamento</label>
          <input type="number" id="numeroLancamento" />
          <label htmlFor="valor">Valor*</label>
          <input type="number" id="valor" />
          <label htmlFor="lancamentoValido">Lançamento válido*</label>
          <input type="checkbox" id="lancamentoValido" />
        </div>
        

        <div className="containerSelect">
          <label htmlFor="acao">Ação*</label>
          <select name="" id="acao">
            <option selected>---SELECT---</option>
            {dadosAcao.map((dado) => (
              <option key={dado.id}>{dado.nome}</option>
            ))}
          </select>
          <label htmlFor="elementoDespesa">Elemento Despesa*</label>
          <select name="" id="elementoDespesa">
            <option selected>---SELECT---</option>
            {dadosElementoDespesa.map((dado) => (
              <option key={dado.id}>{dado.nome}</option>
            ))}
          </select>
          <label htmlFor="fonteRecurso">Fonte Recurso*</label>
          <select name="" id="fonteRecurso">
            <option selected>---SELECT---</option>
              {dadosFonteRecurso.map((dado) => (
                <option key={dado.id}>{dado.nome}</option>
              ))}
          </select>
          <label htmlFor="grupoDespesa">Grupo Despesa*</label>
          <select name="" id="grupoDespesa">
            <option selected>---SELECT---</option>
              {dadosGrupoDespesa.map((dado) => (
                <option key={dado.id}>{dado.nome}</option>
              ))}
          </select>
          <label htmlFor="lancamento">Lançamento</label>
          <select name="" id="lancamento">
            <option selected>---SELECT---</option>
              {dadosLancamento.map((dado) => (
                <option key={dado.id}>{dado.nome}</option>
              ))}
          </select>
          <label htmlFor="modalidadeAplicacao">Modalidade*</label>
          <select name="" id="modalidadeAplicacao">
            <option selected>---SELECT---</option>
              {dadosModalidade.map((dado) => (
                <option key={dado.id}>{dado.nome}</option>
              ))}
          </select>
          <label htmlFor="obetivoEstrategico">Obetivo Estrategico*</label>
          <select name="" id="obetivoEstrategico">
            <option selected>---SELECT---</option>
              {dadosObetivoEstrategico.map((dado) => (
                <option key={dado.id}>{dado.nome}</option>
              ))}
          </select>
          <label htmlFor="programa">Programa*</label>
          <select name="" id="programa">
            <option selected>---SELECT---</option>
              {dadosPrograma.map((dado) => (
                <option key={dado.id}>{dado.nome}</option>
              ))}
          </select>
          <label htmlFor="solicitante">Solicitante*</label>
          <select name="" id="solicitante">
            <option selected>---SELECT---</option>
              {dadosSolicitante.map((dado) => (
                <option key={dado.id}>{dado.nome}</option>
              ))}
          </select>
          <label htmlFor="transacao">Transacao*</label>
          <select name="" id="transacao">
            <option selected>---SELECT---</option>
              {dadosTransacao.map((dado) => (
                <option key={dado.id}>{dado.nome}</option>
              ))}
          </select>
          <label htmlFor="unidade">Unidade*</label>
          <select name="" id="unidade">
            <option selected>---SELECT---</option>
              {dadosUnidade.map((dado) => (
                <option key={dado.id}>{dado.nome}</option>
              ))}
          </select>
          <label htmlFor="unidadeOrcamentaria">Unidade Orcamentaria*</label>
          <select name="" id="unidadeOrcamentaria">
            <option selected>---SELECT---</option>
              {dadosUnidadeOrcamentaria.map((dado) => (
                <option key={dado.id}>{dado.nome}</option>
              ))}
          </select>
        </div>
        
      </form>
    </div>
  );
}

export default Orcamento;
