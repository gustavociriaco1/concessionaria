
import Banner from './Componentes/Banner/Banner';
import Formulario from './Componentes/Formulario/Formulario';
import { useState } from 'react';







function App() {
  

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])

  }

  return (
    
    
    <div className="App">
     <Banner />
     <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/> 
    
    
      
      
      
     
   
    


    </div>
  );
}

export default App;
