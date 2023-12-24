import Tabela from "../../components/Tabela";
import Formulario from "../../components/Formulario";
import InputOrcamento from "../../components/InputOrcamento";
import ButtonCadastrar from "../../components/ButtonCadastrar";
import apiFonteRecurso from "../../services/apiFonteRecurso.js";
import React, { useState } from "react";
import useApi from "../../services/useApi.js";

import "../Acao/Acao.css";

export default function FonteRecurso() {
  const [showPopup, setShowPopup] = useState(false);
  const [codigo, setCodigo] = useState();
  const [nome, setNome] = useState("");

  const {  handleEditar, handleExcluir, handleBuscar, handleSubmit } = apiFonteRecurso();
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
        <h1 className="titulo-pagina">Fonte recurso</h1>
        <Tabela codigo={true} dados={dados} setDados={setDados} handleEditar = {handleEditar} handleExcluir ={handleExcluir} setCodigo ={setCodigo} setNome={setNome}/>

      </div>
      <button className="bttAdicionar" onClick={handleAdicionarClick}>
        +
      </button>
      {showPopup && (
        <Formulario handleSubmit={cadastrar}>
          <InputOrcamento
            titulo={"Cadastrar Fonte Recurso"}
            exibirInput={true}
            onChange={handleInputs}
          />
          <ButtonCadastrar />
        </Formulario>
      )}
    </main>
  );
}
