import ButtonEditar from "../../components/ButtonEditar";
import ButtonExcluir from "../../components/ButtonExcluir";
import "./Tabela.css";

function Tabela({
  dados,
  setDados,
  handleEditar,
  handleExcluir,
  setCodigo,
  setNome,
  codigo,
}) {
  function elementosInput(event, index) {
    const { id, value } = event.target;
    setDados((prevDados) =>
      prevDados.map((item, i) =>
        i === index ? { ...item, [id]: value } : item
      )
    );
  }

  function entrarModoEdicao(index) {
    setDados((prevDados) =>
      prevDados.map((item, i) =>
        i === index
          ? { ...item, modoEdicao: true }
          : { ...item, modoEdicao: false }
      )
    );
  }

  async function salvarEdicao(event, id, codigo, nome, index) {
    console.log(id, codigo, nome, index);
    event.preventDefault();

    // Verifique se 'codigo' é fornecido e se é uma string antes de converter
  if (codigo !== undefined && typeof codigo === 'string') {
    // Converta 'codigo' para um número
    const parseIntCodigo = parseInt(codigo, 10);
    setCodigo(parseIntCodigo);
  }

  try {
    setNome(nome);
    const resposta = await handleEditar(id, codigo, nome);
    if (resposta && resposta.ok) {
      setDados((prevDados) =>
        prevDados.map((item, i) =>
          i === index ? { ...item, modoEdicao: false } : item
        )
      );
    }
  } catch (error) {
    console.error("Erro ao salvar edição:", error);
  }

  }

  function editar(index) {
    entrarModoEdicao(index);
  }

  async function excluir(id) {
    try {
      const resposta = await handleExcluir(id);
      // Remover o item da lista de dados após a exclusão
      setDados((prevDados) => prevDados.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Erro ao excluir:", error);
    }
  }

  return (
    <table className="tabela">
      <thead>
        {codigo ? (
          <tr>
            <td>Codigo</td>
            <td>Descrição</td>
            <td>Alterar</td>
            <td>Excluir</td>
          </tr>
        ) : (
          <tr>
            <td>Descrição</td>
            <td>Alterar</td>
            <td>Excluir</td>
          </tr>
        )}
        
      </thead>

      <tbody>
        {dados.map((item, index) => (
          <tr key={index}>
            {codigo && (
              <td>
              {item.modoEdicao ? (
                <input
                  type="number"
                  autoFocus
                  className='input-edicao'
                  id="codigo"
                  value={item.codigo}
                  onChange={(event) => elementosInput(event, index)}
                />
              ) : (
                item.codigo
              )}
            </td>
            )}
            
            <td>
              {item.modoEdicao ? (
                <input
                  type="text"
                  id="nome"
                  className="input-edicao"
                  value={item.nome}
                  onChange={(event) => elementosInput(event, index)}
                />
              ) : (
                item.nome
              )}
            </td>
            <td>
              {item.modoEdicao ? (
                <button
                  className="btt-salvar"
                  onClick={(event) =>
                    salvarEdicao(event, item.id, item.codigo, item.nome, index)
                  }
                >
                  Salvar
                </button>
              ) : (
                <ButtonEditar onClick={() => editar(index)} />
              )}
            </td>
            <td>
              <ButtonExcluir onClick={() => excluir(item.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
