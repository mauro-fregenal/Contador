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
      <Contador valor={contador} />
      <Boton onclick={incrementar} texto={"Incrementar"} />
      <Boton onclick={decrementar} texto={"Decrementar"} />
      <Boton onclick={reiniciar} texto={"Reiniciar"} />
    </>
  );
}

export default App;
