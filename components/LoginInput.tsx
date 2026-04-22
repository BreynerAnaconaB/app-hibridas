import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInputField } from "./TextInputField";
import { styles } from "./styles/estilosLoginInput";

type Campo = {
    name: keyof FormData
    label: string
    secureTextEntry?: boolean
}

type FormData = {
    correo: string
    contraseña: string
}

type Props = { 
    onSubmit: (form: FormData) => void
}

export const LoginInput: React.FC<Props> = ({onSubmit}) => {
    const [error, setError] = useState("")
    const [form, setForm] = useState<FormData>({
        correo: "",
        contraseña: ""
    })

    const campos: Campo[] = [
    {
        name: "correo",
        label: "Correo electrónico"
    },
    {
        name: "contraseña",
        label: "Contraseña"
    }
    ]

    const handleChange = (
        name: keyof FormData,
        value: string 
    ) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = () => {
        if(
            !form.correo.trim() ||
            !form.contraseña.trim()
        ) {
            setError("Todos los campos son obligatorios")
            return
        }

        if (!/\S+@\S+\.\S+/.test(form.correo)){
            setError("Correo invalido")
            return
        }

        onSubmit(form)
    }
    
    return (
        <View style={styles.container}>
            {campos.map((campo) => (

                <TextInputField 
                
                key={campo.name}
                name={campo.name}
                label={campo.label}
                value={form[campo.name]}
                secureTextEntry={campo.secureTextEntry}
                onChange={handleChange}
                />
            
            ))}

            {error !== "" && (
            <Text style={styles.errorText}>{error}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    )

    
}




