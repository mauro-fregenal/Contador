function Boton({onclick, texto}) {

    return (
        <div>
            <button onClick={onclick}>{texto}</button>
        </div>
    )
}
export default Boton



