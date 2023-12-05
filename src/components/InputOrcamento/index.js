import "./InputOrcamento.css";
function InputOrcamento({ onChange, titulo, exibirInput }) {
  return (
    <div className="inputOrcamento">
      <h1>{titulo}</h1>
      {exibirInput && (
        <>
          <label htmlFor="codigo">Código</label>
          <input
            type="number"
            name=""
            id="codigo"
            onChange={onChange}
            placeholder="Digite o código..."
          />
        </>
      )}

      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        name="nome"
        id="nome"
        onChange={onChange}
        placeholder="Digite o nome..."
      />
    </div>
  );
}

export default InputOrcamento;
