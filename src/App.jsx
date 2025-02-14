import { useState } from "react";
import Contador from "./components/Contador";
import Boton from "./components/Boton";

function App() {
  const [contador, setContador] = useState(0);

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
  return (
    <>
      <h1>Contador con Props</h1>
      <Contador contInicial={contador} />
      <Boton btnIncrementar={incrementar} nombre={"Incrementar"} />
      <Boton btnIncrementar={decrementar} nombre={"Decrementar"} />
      <Boton btnIncrementar={reiniciar} nombre={"Reiniciar"} />
    </>
  );
}

export default App;
