import apiOrcamento from "../../services/apiOrcamento.js";
import React, { useState } from "react";
import useApi from "../../services/useApi.js";
import Accordion from "react-bootstrap/Accordion";
import ButtonEditar from "../../components/ButtonEditar";
import ButtonExcluir from "../../components/ButtonExcluir";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Orcamento() {
  const { handleEditar, handleExcluir, handleBuscar, handleSubmit } = apiOrcamento();
  const { dados, setDados } = useApi({ handleBuscar });
  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");
  const [modoEdicao, setModoEdicao] = useState(false);

  const handleExcluirItem = async (id) => {
    try {
      await handleExcluir(id);
      // Remove o item excluído da lista local antes de atualizar o estado
      setDados((prevDados) => prevDados.filter((item) => item.id !== id));
      // Desativa o modo de edição caso o item excluído esteja em modo de edição
      setModoEdicao(false);
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  };

  return (
    <Accordion style={{ margin: "100px 200px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>Orçamento</h1>

      {dados.map((dado, index) => (
        <Accordion.Item eventKey={dado.id} key={dado.id} style={{ width: "100%" }}>
          <Accordion.Header>{dado.descricao}</Accordion.Header>
          <Accordion.Body>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {/* Listagem */}
              <div>
                <p>{`Ano do orçamento : ${dado.anoOrcamento}`}</p>
                <p>{`Data Lançamento : ${dado.dataLancamento}`}</p>
                <p>{`Contratado : ${dado.contratado}`}</p>
                <p>{`Descrição : ${dado.descricao}`}</p>
                <p>{`Ged : ${dado.ged}`}</p>
                <p>{`Número lançamento : ${dado.numeroLancamento}`}</p>
                <p>{`Valor : ${dado.valor}`}</p>
                <p>{`Ação : ${dado.dsAcao}`}</p>
                <p>{`Elemento Despesa : ${dado.dsElementoDespesa}`}</p>
                <p>{`Fonte Recurso: ${dado.dsFonteRecurso}`}</p>
                <p>{`Grupo Despesa: ${dado.dsGrupoDespesa}`}</p>
                <p>{`Orçamento Pai(Tipo Lançamento): ${dado.dsTipoLancamento}`}</p>
                <p>{`Unidade: ${dado.dsUnidade}`}</p>
                <p>{`Unidade Orcamentaria: ${dado.dsUnidadeOrcamentaria}`}</p>
              </div>
              {/* Botões de editar e excluir */}
              <div>
                <ButtonEditar onClick={() => setModoEdicao(index)} />
                <ButtonExcluir onClick={() => handleExcluirItem(dado.id)} />
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}