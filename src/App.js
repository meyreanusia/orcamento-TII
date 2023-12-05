import "./App.css";
import ButtonEnviar from "./components/ButtonEnviar/index.js";
import Formulario from "./components/Formulario/index.js";
import InputOrcamento from "./components/InputOrcamento/index.js";
import { useState } from "react";

function App() {
  const [codigo, setCodigo] = useState("");
  const [nome, setNome] = useState("");

 async function handleSubmit(event) {
    event.preventDefault();
    try{
      const response = await fetch("http://localhost:8080/api/orcamento/acao", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({codigo, nome}),
      })

      if(!response.ok){
        console.log("Erro ao enviar os dados", response.status, response.statusText);
      }
      console.log("Dados enviados com sucesso", await response.json);
    }catch(error){
        console.log("Erro ao enviar os dados",  error);
    }
  }

  function elementosInput(event) {
    if (event.target.id === "codigo") {
      setCodigo(event.target.value);
    } else {
      setNome(event.target.value);
    }
  }

  return (
    <Formulario>
         <InputOrcamento  onChange={elementosInput} titulo={"Ação"} exibirInput={true}/>
         <ButtonEnviar/>
    </Formulario>
  );

      
}

export default  App;

