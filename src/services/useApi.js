import { useState, useEffect } from "react";

export default function useApi(apiFunction) {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dadosDaApi = await apiFunction.handleBuscar();
        setDados(dadosDaApi || []);
      } catch (error) {
        console.log("Erro ao buscar dados", error);
      }
    };
    fetchData();
  }, []);

  return { dados, setDados };
}
