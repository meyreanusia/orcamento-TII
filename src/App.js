import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useApiAcao from "./services/apiAcao.js";
import Menu from "./components/Menu/index.js";
import Despesa from './paginas/ElementoDespesa/index.js';
import Acao from './paginas/Acao/index.js';
import FonteRecurso from './paginas/FonteRecurso';

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
        <Route path= '/elementoDespesa' element={<Despesa/>}/>
        <Route path= "/acao" element={<Acao/>}/>
        <Route path= "/fonteRecurso" element={<FonteRecurso/>}/>
        <Route path="*" element={<div>Página não enontrada</div>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;