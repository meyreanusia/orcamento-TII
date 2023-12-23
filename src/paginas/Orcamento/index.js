import './Orcamento.css'

function Orcamento(){
    return(

        <div className="containerForm">
            <h1>Orçamento</h1>
             <form action="" className='formOrcamento'>
            <label htmlFor="anoOrcamento">Ano do orcamento</label>
            <input type="date" id="anoOrcamento" />
            <label htmlFor="contratado">Contratado</label>
            <input type="text" id="contratado" />
            <label htmlFor="dataLancamento">Data Lancamento</label>
            <input type="date" id="dataLancamento" />
            <label htmlFor="descricao">Descricao</label>
            <input type="date" id="descricao" />
            <label htmlFor="ged">Ged</label>
            <input type="text" id="ged" />
            <label htmlFor="id">Id</label>
            <input type="number" id="id" />
            <label htmlFor="idLancamentoPai">Id Lancamento Pai</label>
            <input type="number" id="idLancamentoPai" />

            {/* "lancamentoInvalido": true, */}
            <label htmlFor="numeroLancamento">Número lancamento</label>
            <input type="number" id="numeroLancamento" />
            <label htmlFor="valor">Valor</label>
            <input type="number" id="valor" />
        </form>

        </div>
 
    )
}

export default Orcamento; 