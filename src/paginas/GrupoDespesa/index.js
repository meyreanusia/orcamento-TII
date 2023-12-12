import Tabela from "../../components/Tabela/index.js";
import Formulario from "../../components/Formulario/index.js";
import InputOrcamento from "../../components/InputOrcamento/index.js";
import ButtonCadastrar from "../../components/ButtonCadastrar/index.js";
import apiGrupoDespesa from "../../services/apiGrupoDespesa.js";
import React, { useState, useEffect } from "react";
import "../Acao/Acao.css";

export default function GrupoDespesa() {
  // const { handleSubmit, handleBuscar } = apiGrupoDespesa();
  const [showPopup, setShowPopup] = useState(false);
  const [codigo, setCodigo] = useState();
  const [nome, setNome] = useState("");
  const [dados, setDados] = useState([]);
  const {  handleEditar, handleExcluir, handleBuscar, handleSubmit } = apiGrupoDespesa();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosDaApi = await handleBuscar();
        setDados(dadosDaApi || []);
      } catch (error) {
        console.log("Erro ao buscar dados", error);
      }
    };
    fetchData();
  }, []);

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
        <h1 className="titulo-pagina">Grupo despesa</h1>
        <Tabela dados={dados} setDados={setDados} handleEditar = {handleEditar} handleExcluir ={handleExcluir} setCodigo ={setCodigo} setNome={setNome}/>
      </div>
      <button className="bttAdicionar" onClick={handleAdicionarClick}>
        +
      </button>
      {showPopup && (
        <Formulario handleSubmit={cadastrar}>
          <InputOrcamento
            titulo={"Cadastrar Ação"}
            exibirInput={true}
            onChange={handleInputs}
          />
          <ButtonCadastrar />
        </Formulario>
      )}
    </main>
  );
}
