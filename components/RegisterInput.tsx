import React, { useState } from "react";
import { Button, View } from "react-native";
import { TextInputField } from "./TextInputField";

type Campo = {
    name: keyof FormData
    label: string
    secureTextEntry?: boolean
}

type FormData = {
    nombres: string
    apellidos: string
    correo: string
    contraseña: string
    confirmarContraseña: string
}

export const RegisterInput: React.FC = () => {
    const [form, setForm] = useState<FormData>({
        nombres: "",
        apellidos: "",
        correo: "",
        contraseña: "",
        confirmarContraseña: ""
    })

    const campos: Campo[] = [
        {
            name: "nombres",
            label: "Nombres"
        },
        {
            name: "apellidos",
            label: "Apellidos"
        },
        {
            name: "correo",
            label: "Correo electronico"
        },
        {
            name: "contraseña", 
            label: "Contraseña", 
            secureTextEntry: true
        },
        {
            name: "confirmarContraseña",
            label: "Confirmar contraseña",
            secureTextEntry: true
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
                <TextInputField<FormData>
                key={campo.name}
                name={campo.name}
                label={campo.label}
                value={form[campo.name]}
                onChange={handleChange}
                secureTextEntry={campo.secureTextEntry}
                />
            ))}

            <Button title="Registrarse" onPress={handleSubmit} />
        </View>
    )
}