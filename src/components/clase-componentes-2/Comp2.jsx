import React, {useState, useEffect} from 'react'

const Comp2 = ({button,children}) => {

    // console.log(children);

    const [state, setState] = useState({
        nombre:"Damian",
        apellido:"Abalos",
        edad:26
    })
    let {nombre,apellido,edad} = state;

    const [error, setError] = useState(false);

    const [name,setName] = useState("Dami");

    // useEffect(() => {
    //     console.log("nombre cambiado")
    // }, [name,error,state.nombre])

    useEffect(() => {
        console.log("este es mi prop",name)
        return () => {
        console.log("limpiando...")
        }
    }, [name])

    // console.log(state);
    // console.log(error);

    // const makeAlert = () => {
    //     alert(nombre)
    // }
    

    return (
        <div>
            <h1 className="text-center">Nombre: {nombre}<br/>Apellido: {apellido}<br/>Edad: {edad}</h1>
            <h2 className="text-center">{name}</h2>

            <button className="d-flex m-auto" onClick={()=> setState({...state, nombre:"Juan Carlos"})}>Cambiar a Juan Carlos</button>

            <button className="d-flex m-auto" onClick={()=> setName("Tu vieja")}>Tu javie</button>

            <button className="d-flex m-auto" onClick={()=> setError(true)} >Cambiar Boolean</button>

            {button({texto:"super boton"})}
            {children}
        </div>
    )
}

export default Comp2


