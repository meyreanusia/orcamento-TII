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

function App() {

  const {
    handleSubmit,
    handleEditar,
    handleExcluir,
    elementosInput,
  } = useApiAcao();

  return (

    <BrowserRouter>
     <Menu/>
     <Routes>
        <Route path= '/' element={<Inicio/>}/>
        <Route path= "/acao" element={<Acao/>}/>
        <Route path= "/fonteRecurso" element={<FonteRecurso/>}/>
        <Route path= "/grupoDespesa" element={<GrupoDespesa/>}/>
        <Route path= "/unidade" element={<Unidade/>}/>
        <Route path= "/transacao" element={<Transacao/>}/>
        <Route path= "/lancamento" element={<Lancamento/>}/>
        <Route path= "/solicitante" element={<Solicitante/>}/>
        <Route path= "/objetivoEstrategico" element={<ObjetivoEstrategico/>}/>
        <Route path="*" element={<div style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center", height: "500px", gap: "30px"}}>Página não enontrada</div>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;