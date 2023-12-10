import Tabela from "../../components/Tabela";
import Formulario from "../../components/Formulario";
import InputOrcamento from "../../components/InputOrcamento";
import ButtonCadastrar from "../../components/ButtonCadastrar";
import useApiAcao from "../../services/apiAcao.js";
import React, { useState } from "react";
import "./Acao.css";
export default function Acao() {
  const { handleSubmit, handleBuscar } = useApiAcao();
  const [showPopup, setShowPopup] = useState(false);
  const [codigo, setCodigo] = useState();
  const [nome, setNome] = useState("");
  const [dados, setDados] = useState([]);

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
          const dadoCriado = resposta.json();
          return dadoCriado
        } else {
          console.error("Falha ao criar ação:", resposta);
          alert(
            "Erro ao criare Ação! \n o código já existe na nossa base de dados."
          );
          setShowPopup(false);
        }
      }).then((dadoCriado) => {
        setDados([...dados, dadoCriado])
        alert("Ação criada com sucesso");
               setShowPopup(false);
    })
      .catch((error) => {
        console.error("Erro ao criar ação:", error);
      });
  }

  return (
    <main className={`acao ${showPopup ? "popup-visivel" : ""}`}>
      <div className="container-tabela">
        <Tabela dados={dados} setDados={setDados} />
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
