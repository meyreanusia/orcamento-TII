import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useApiAcao from "./services/apiAcao.js";
import Menu from "./components/Menu/index.js";
import Acao from './paginas/Acao/index.js';
import FonteRecurso from './paginas/FonteRecurso';
import GrupoDespesa from "./paginas/GrupoDespesa/index.js";
import Inicio from "./paginas/Inicio"

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
        <Route path= '/inicio' element={<Inicio/>}/>
        <Route path= "/acao" element={<Acao/>}/>
        <Route path= "/fonteRecurso" element={<FonteRecurso/>}/>
        <Route path= "/grupoDespesa" element={<GrupoDespesa/>}/>
        <Route path="*" element={<div>Página não enontrada</div>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;