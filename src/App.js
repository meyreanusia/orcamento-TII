import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useApiAcao from "./services/apiAcao.js";
import Menu from "./components/Menu/index.js";
import Acao from './paginas/Acao/index.js';
import FonteRecurso from './paginas/FonteRecurso';
import GrupoDespesa from "./paginas/GrupoDespesa/index.js";
import Inicio from "./paginas/Inicio";
import Unidade from "./paginas/Unidade/index.js";
import Transacao from "./paginas/Transacao/index.js";
import Lancamento from "./paginas/Lancamento/index.js";
import Solicitante from "./paginas/Solicitante/index.js";
import ObjetivoEstrategico from "./paginas/ObjetivoEstrategico/index.js";
import UnidadeOrcamentaria from "./paginas/UnidadeOrcamentaria/index.js";
import ElementoDespesa from "./paginas/ElementoDespesa/index.js";
import Programa from "./paginas/Programa/index.js";
import ModalidadeAplicacao from "./paginas/ModalidadeAplicacao/index.js";
import Orcamento from "./paginas/Orcamento/index.js";
function App() {

  // const {
  //   handleSubmit,
  //   handleEditar,
  //   handleExcluir,
  //   elementosInput,
  // } = useApiAcao();

  return (

    <BrowserRouter>
     <Menu/>
     <Routes>
        <Route path= '/' element={<Inicio/>}/>
        <Route path= "/orcamento" element={<Orcamento/>}/>
        <Route path= "/acao" element={<Acao/>}/>
        <Route path= "/fonteRecurso" element={<FonteRecurso/>}/>
        <Route path= "/grupoDespesa" element={<GrupoDespesa/>}/>
        <Route path= "/unidade" element={<Unidade/>}/>
        <Route path= "/transacao" element={<Transacao/>}/>
        <Route path= "/lancamento" element={<Lancamento/>}/>
        <Route path= "/solicitante" element={<Solicitante/>}/>
        <Route path= "/objetivoEstrategico" element={<ObjetivoEstrategico/>}/>
        <Route path= "/unidadeOrcamentaria" element={<UnidadeOrcamentaria/>}/>
        <Route path= "/elementoDespesa" element={<ElementoDespesa/>}/>
        <Route path= "/programa" element={<Programa/>}/>
        <Route path= "/modalidadeAplicacao" element={<ModalidadeAplicacao/>}/>
        <Route path="*" element={<div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", height: "500px", gap: "30px"}}>
          <h1>Esta página não está disponível</h1></div>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;