import apiOrcamento from "../../services/apiOrcamento.js";
import useApi from "../../services/useApi.js";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Orcamento() {
  const { handleBuscar } = apiOrcamento();
  const { dados, setDados } = useApi({ handleBuscar });
  return (

    <Accordion>
  {console.log(dados)}
      {dados.map((dado, index) => (
        <Accordion.Item eventKey={dado.id} key={dado.id}>
          <Accordion.Header>{dado.descricao}</Accordion.Header>
          <Accordion.Body>
            <p>{`Ano do orçamento : ${dado.anoOrcamento}`}</p>
            <p>{`Data Lançamento : ${dado.dataLancamento}`}</p>
            <p>{`Contratado : ${dado.contratado}`}</p>
            <p>{`Descrição : ${dado.descricao}`}</p>
            <p>{`Ged : ${dado.ged}`}</p>
            <p>{`Número lançamento : ${dado.numeroLancamento}`}</p>
            <p>{`Valor : ${dado.valor}`}</p>
            <p>{`Lançamento válido : ${dado.lancamentoInvalido}`}</p>
            <p>{`Ação : ${dado.acao}`}</p>
            <p>{`Elemento Despesa : ${dado.dsElementoDespesa}`}</p>
            <p>{`Fonte Recurso: ${dado.dsFonteRecurso}`}</p>
            <p>{`Grupo Despesa: ${dado.dsGrupoDespesa}`}</p>
            <p>{`Orçamento pai: ${dado.idLancamentoPai}`}</p>
            <p>{`Unidade: ${dado.unidade}`}</p>
            <p>{`Unidade Orcamentaria: ${dado.unidadeOrcamentaria}`}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
