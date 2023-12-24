import Tabela from "../../components/Tabela/index.js";
import Formulario from "../../components/Formulario/index.js";
import InputOrcamento from "../../components/InputOrcamento/index.js";
import ButtonCadastrar from "../../components/ButtonCadastrar/index.js";
import apiUnidadeOrcamentaria from "../../services/apiUnidadeOrcamentaria.js";
import useApi from "../../services/useApi.js";
import React, { useState, useEffect } from "react";
import "../Acao/Acao.css";

export default function UnidadeOrcamentaria() {

  const [showPopup, setShowPopup] = useState(false);
  const [codigo, setCodigo] = useState();
  const [nome, setNome] = useState("");
  const {  handleEditar, handleExcluir, handleBuscar, handleSubmit } = apiUnidadeOrcamentaria();
  const { dados,setDados } = useApi({ handleBuscar });


  function handleInputs(event) {
    if (event.target.id === "codigo") {
      setCodigo(event.target.value);

    }
    setNome(event.target.value);
  }
  const handleAdicionarClick = () => {
    setShowPopup(true);
  };

  async function cadastrar(event) {
    event.preventDefault();
    const codigoNumber = parseInt(codigo);

    handleSubmit(codigoNumber, nome)
      .then((resposta) => {
        if (resposta && resposta.ok) {
          return resposta.json();
        } else {
          console.error("Falha ao criar unidade orcamentaria:", resposta);
          alert(
            "Erro ao criar Unidade Orcamentaria! \n o código já existe na nossa base de dados."
          );
          setShowPopup(false);
          throw new Error("Erro ao criar a Unidade Orcamentaria");
        }
      })
      .then((dadoCriado) => {
        alert("Unidade Orcamentaria criada com sucesso");
        setDados([...dados, dadoCriado]);
        setShowPopup(false);

      })
      .catch((error) => {
        console.error("Erro ao criar unidade orcamentaria:", error);
      });
  }

  return (
    <main className={`acao ${showPopup ? "popup-visivel" : ""}`}>
      <div className="container-tabela">
        <h1 className="titulo-pagina">Unidade Orcamentaria</h1>
        <Tabela dados={dados} setDados={setDados} handleEditar = {handleEditar} handleExcluir ={handleExcluir} setCodigo ={setCodigo} setNome={setNome} codigo={true}/>
      </div>
      <button className="bttAdicionar" onClick={handleAdicionarClick}>
        +
      </button>
      {showPopup && (
        <Formulario handleSubmit={cadastrar}>
          <InputOrcamento
            titulo={"Cadastrar Unidade Orcamentaria"}
            exibirInput={true}
            onChange={handleInputs}
          />
          <ButtonCadastrar />
        </Formulario>
      )}
    </main>
  );
}
