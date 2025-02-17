import { useState } from "react";
import Contador from "./components/Contador";
import Boton from "./components/Boton";
import Lista from "./components/Lista";

function App() {
  const [contador, setContador] = useState(0);

  const [tareas, setTareas] = useState([]);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  const reiniciar = () => {
    setContador(0);
  };

  const agregarNumeroALista = () =>{
    setTareas([...tareas, contador])
  };

  const eliminarAgregados = () => {
    setTareas([]);
  }
  return (
    <>
      <h1>Contador con Props</h1>
      <Contador valor={contador} />
      <div style={{ display: "flex", gap: "10px" }}>
        <Boton onclick={incrementar} texto={"Incrementar"} />
        <Boton onclick={decrementar} texto={"Decrementar"} />
        <Boton onclick={reiniciar} texto={"Reiniciar"} />
        <Boton onclick={agregarNumeroALista} texto={"Agregar"} />
        <Boton onclick={eliminarAgregados} texto={"Borrar Lista"} />
        
      </div>
      <Lista tareas = {tareas}/>
    </>
  );
}

export default App;
