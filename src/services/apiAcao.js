
function useApiAcao(){
    const URL = "http://localhost:8080/api/orcamento/acao/";
  
    // GET
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

    // POST
    async function handleSubmit(codigo, nome) {
        try {
          const response = await fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ codigo, nome }),
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

    // PUT
    async function handleEditar(id, paramCodigo, paramNome){
        try{
          const response = await fetch(`${URL}${id}`, {
            method: 'PUT',
            headers: { 
              "Content-Type": "application/json"
            },
            body: JSON.stringify({codigo: paramCodigo, nome:paramNome})                          
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
    // DELETE
    async function handleExcluir(codigo){
        try{
          const response = await fetch(`${URL}${codigo}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({codigo})
          })
      
          if(!response.ok){
            console.log("Erro ao excluir os dados", response.status, response.statusText);
          }
          return response; 
        }catch(error){
          console.log("Erro ao excluir elemento", error);
        }
    }

    return {handleSubmit, handleEditar, handleExcluir, handleBuscar}; 
}

export default useApiAcao; 