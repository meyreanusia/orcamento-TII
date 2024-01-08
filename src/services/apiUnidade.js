import { useState } from 'react';


function useApiAcao(){

    const [nome, setNome] = useState(""); 
    const URL = "http://localhost:8080/api/orcamento/unidade/";

  
    async function handleBuscar(){
      try {
        const response = await fetch(URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
  
        if (!response.ok) {
          console.log(
            "Erro ao buscar dados",
            response.status,
            response.statusText
          );
        }
        const dados = await response.json();
        return dados;
      } catch (error) {
        console.log("Erro ao buscar  dados", error);
      }
    }

    async function handleSubmit(nome) {
        try {
          const response = await fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ nome }),
          });
    
          if (!response.ok) {
            console.log(
              "Erro ao enviar os dados",
              response.status,
              response.statusText
            );
          }
          console.log("Dados enviados com sucesso");
          return response
        } catch (error) {
          console.log("Erro ao enviar os dados", error);
        }
    }

    async function handleEditar(id, nome){
      // console.log(id, nome);
        try{
          const response = await fetch(`${URL}${id}`, {
            method: 'PUT',
            headers: { 
              "Content-Type": "application/json"
            },
            body: JSON.stringify({nome:nome})                          
          }) 
          if(!response.ok){
            console.log("Erro ao editar os dados", response.status, response.statusText);
          }
          console.log("Dado editado com sucesso");

          return response
        }catch (error) {
          console.error("Erro durante a edição:", error);
        }
          
    }

    async function handleExcluir(id){
        try{
          const response = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({id})
          })
      
          if(!response.ok){
            console.log("Erro ao excluir os dados", response.status, response.statusText);
          }
          return response; 
        }catch(error){
          console.log("Erro ao excluir elemento", error);
        }
    }

    return {handleSubmit, handleEditar, handleExcluir, setNome, handleBuscar}; 
}

export default useApiAcao; 