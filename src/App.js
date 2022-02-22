import './App.css';
import React, {useState} from 'react';
import Cabecera from './components/Cabecera';
import Cuerpo from './components/Cuerpo';

function App() {
  var nombres = ['Jose', 'David', 'Juan'];

  var titulo = 'Ejercicio';

  const [datos, setDatos] = useState({titulo:titulo, nombres:nombres})

  const anadenombre = (nombre)=>{
    datos.nombres.push(nombre)
    setDatos({
      titulo:titulo,
      nombres:[...datos.nombres]
    })
  }

  const cambiatitulo = (titulo)=>{
    datos.titulo = titulo
    setDatos({
      titulo:datos.titulo,
      nombres:nombres
    })
  }
  return (
    <div>
      <Cabecera titulo={datos.titulo} />
      <Cuerpo nombres={datos.nombres} add={anadenombre} change={cambiatitulo}/>
    </div>
  );
}

export default App;
