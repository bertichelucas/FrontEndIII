import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const [sent, setSent] = useState(false)

    useEffect(() =>{
    }, [sent])

    const validateData = (data) =>{
        if (data.name.length <= 5) {
            window.alert("Ingrese un nombre con mas de 5 letras")
            return false
        }
        // eslint-disable-next-line 
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) return true
        window.alert("Ingrese un mail con formato valido")
        return false
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(validateData(formData)){
            setSent(true)
        }
    }

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            {
                sent?
                <h2>Gracias {formData.name}, te contactaremos cuanto antes vía mail</h2>:
                <div className="form">
                <input className="input" type="text" onChange={handleChange} name="name" placeholder="Nombre"/>
                <input className="input" type="email" onChange={handleChange} name="email" placeholder="Email"/>
                <button className="button" type="submit">Send</button>
                </div>
                
            }
        </form>
        </div>
    );
};

export default Form
