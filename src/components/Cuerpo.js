function Cuerpo (data){
    var nombres = [];
    for(let nombre of data.nombres){
        nombres.push(<li>{nombre}</li>);
    }

    return(
        <div>
            <ul>
                {nombres}
            </ul>
            <button onClick={()=>{
                data.add('Germán');
            }}>Añade nombre</button>
            <button onClick={()=>{
                data.change('German');
            }}>Cambia titulo</button>
        </div>
    )

}

export default Cuerpo;