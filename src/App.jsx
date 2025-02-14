import { useState } from "react"

function App() {
  const [contador, setContador] = useState(0);

  const contadordinamico = () => {
    setContador (contador +1);
  }

  return (
    <>
      <h1>Contador con Props</h1>

    </>
  )
}

export default App
