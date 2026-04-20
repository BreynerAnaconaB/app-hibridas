import React, { useState } from "react";
import { Button, View } from "react-native";
import { TextInputField } from "./TextInputField";

type Campo = {
    name: keyof FormData
    label: string
    secureTextEntry?: boolean
}

type FormData = {
    correo: string
    contraseña: string
}

export const LoginInput: React.FC = () => {
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
        console.log(form)
    }
    
    return (
        <View>
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

            <Button title="Entrar" onPress={handleSubmit} />
        </View>
    )

    
}




