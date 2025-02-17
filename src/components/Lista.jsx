function Lista({tareas}) {

    return (
        <>
        <h2>Lista de Números</h2>
        <ul>
            {tareas.length > 0 ? (
                tareas.map((tarea, index) => (
                    <li key={index}>
                        {tarea}
                    </li>
                ))
            ) : (
                <p>No hay Números en la lista</p>
            )}
        
        </ul>
        </>
    )
}

export default Lista