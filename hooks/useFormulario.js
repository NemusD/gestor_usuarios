import { useState } from "react"

const useFormulario = (inicial) => {
    //Destructuring
    const [formulario, setFormulario] = useState(inicial)
    //Guardar los valores del formulario
    const handleChange = (e) => {
        setFormulario({
        ...formulario,
        [e.target.name] : e.target.value
        })
    }

    const reset = () => {
        setFormulario(inicial);
    }

    return [formulario, handleChange, reset];
}

export default useFormulario