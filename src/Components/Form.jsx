import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [values, setValues] = useState({
    name : "",
    email : "",
  })

  const [validation, setValidation] = useState(false)

  const validarNombre = () => {
    let nombreUsuario = values.name.split(" ")
    if(nombreUsuario.length < 1) return alert ("por favor ingresar su nombre y apellido 😅")

    if(nombreUsuario[0].length < 3 || nombreUsuario[1].length < 3) return alert ("por favor ingresar un nombre o apellido validos 🤨") 
    //Esta alerta salta cuando se ingresa un nombre con espacio al final, osea "camilo " pero si se ingresa "camilo" no salta ninguna alerta

    return true
  }

  const validarCorreo = () => {
    let correoUsuario = values.email.split("@")
    if(correoUsuario.length < 2) return alert ("Direccion de correo invalida, recuerde que el correo debe de llevar un '@' 😉")
    
    let correoCom = correoUsuario[1].split(".")
    if(correoCom.length < 2) return alert ("Dirrecion de correo invalida, recuerde que el correo debe de llevar una extencion .com 😱")

    return true
  }

  const handleChange = (e) => {
    const {target} = e
    const {name, value} = target

    const newValues = {
      ...values,
      [name]:value,
    }
    setValues(newValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let nameValidation = validarNombre()
    let emailValidation = validarCorreo()

    if(nameValidation && emailValidation) {
      setValidation(true)
    }
  }

  return (
    <div className="cont-formComp">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type = "text" name = "name" className="inputForm" onChange={handleChange}/>
        <label htmlFor="email">Correo</label>
        <input type = "text" name = "email" className="inputForm" onChange={handleChange}/>
        <button type = "submit" className="btn-form">Enviar</button>
      </form>
      <div className="cont-h3">
        {validation ? <h3 className="h3">Gracias {values.name}, nos comunicaremos con usted 😀</h3> : ""}
      </div>
    </div>
  );
};

export default Form;
