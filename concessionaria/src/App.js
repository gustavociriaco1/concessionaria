
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario/Formulario';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <nav>
          <Link to="/">Produtos</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route
            path="/Home"
            element={<Home aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;