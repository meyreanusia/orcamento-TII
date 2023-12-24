import Tabela from "../../components/Tabela/index.js";
import Formulario from "../../components/Formulario/index.js";
import InputOrcamento from "../../components/InputOrcamento/index.js";
import ButtonCadastrar from "../../components/ButtonCadastrar/index.js";
import apiSolicitante from "../../services/apiSolicitante.js";
import useApi from "../../services/useApi.js";
import React, { useState } from "react";
import "../Acao/Acao.css";

export default function Solicitante() {
  const [showPopup, setShowPopup] = useState(false);
  const [nome, setNome] = useState("");
  const {  handleEditar, handleExcluir, handleBuscar, handleSubmit } = apiSolicitante();
  const { dados,setDados } = useApi({ handleBuscar });

  function handleInputs(event) {
    if (event.target.id === "nome") {
      setNome(event.target.value);
    }
  }
  const handleAdicionarClick = () => {
    setShowPopup(true);
  };

  async function cadastrar(event) {
    event.preventDefault();
    // const codigoNumber = parseInt(codigo);

    handleSubmit(nome)
      .then((resposta) => {
        if (resposta && resposta.ok) {
          return resposta.json();
        } else {
          console.error("Falha ao criar ação:", resposta);
          alert(
            "Erro ao criar Ação! \n o código já existe na nossa base de dados."
          );
          setShowPopup(false);
          throw new Error("Erro ao criar a Ação");
        }
      })
      .then((dadoCriado) => {
        alert("Ação criada com sucesso");
        setDados([...dados, dadoCriado]);
        setShowPopup(false);

      })
      .catch((error) => {
        console.error("Erro ao criar ação:", error);
      });
  }

  return (
    <main className={`acao ${showPopup ? "popup-visivel" : ""}`}>
      <div className="container-tabela">
        <h1 className="titulo-pagina">Solicitante</h1>
        <Tabela codigo = {false} dados={dados} setDados={setDados} handleEditar = {handleEditar} handleExcluir ={handleExcluir} setNome={setNome}/>
      </div>
      <button className="bttAdicionar" onClick={handleAdicionarClick}>
        +
      </button>
      {showPopup && (
        <Formulario handleSubmit={cadastrar}>
          <InputOrcamento
            titulo={"Cadastrar Solicitante"}
            exibirInput={true}
            onChange={handleInputs}
          />
          <ButtonCadastrar />
        </Formulario>
      )}
    </main>
  );
}
