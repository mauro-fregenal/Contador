import { useState } from "react"
import Contador from "./components/Contador";

function App() {
  const [contador, setContador] = useState(0);

  const contadordinamico = () => {
    setContador (contador +1);
  }

  return (
    <>
      <h1>Contador con Props</h1>
      <Contador contInicial = {contador}/>
    </>
  )
}

export default App
