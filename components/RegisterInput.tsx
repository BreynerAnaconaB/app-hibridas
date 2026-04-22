import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInputField } from "./TextInputField";
import { styles } from "./styles/estilosRegisterInput";

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

type Props = {
    onSubmit: (form: FormData) => void
}


export const RegisterInput: React.FC<Props> = ({onSubmit}) => {
    const [error, setError] = useState("")
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
        if (
            !form.nombres.trim() ||
            !form.apellidos.trim() ||
            !form.correo.trim() ||
            !form.contraseña.trim() ||
            !form.confirmarContraseña.trim()
        ) {
            setError("Todos los campos son obligatorios")
            return
        }

        if (!/\S+@\S+\.\S+/.test(form.correo)){
            setError("Correo invalido")
            return
        }

        if (form.contraseña.length < 6){
            setError("La contraseña debe tener al menos 6 caracteres")
            return
        }

        if(form.contraseña !== form.confirmarContraseña) {
            setError("Las contraseñas no coinciden")
            return
        }

        setError("")
        onSubmit(form)
    }

    return (
        <View style={styles.container}>
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

                {error !== "" && (
                    <Text style={styles.errorText}>{error}</Text>
                )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>

            
        </View>
    )
}