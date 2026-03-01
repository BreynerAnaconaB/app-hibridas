import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import estilos from "./css/estilos";

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const manejarLogin = () => {
        if (usuario === "admin" && password === "123") {
            router.replace("/(tabs)"); 
        }
    };

    return (
        <View style={estilos.container}>
            <View style={estilos.recuadroLogin}>
                <Text style={estilos.Titulo}>Registrate</Text>

                <View style={estilos.inputcontainer}>
                    <TextInput 
                        style={estilos.textinput} 
                        placeholder="Ingresa tu nombre"
                        placeholderTextColor="#999"
                    />
                </View>

                <View style={estilos.inputcontainer}>
                    <TextInput 
                        style={estilos.textinput} 
                        placeholder="Ingresa tu correo"
                        placeholderTextColor="#999"
                    />
                </View>

                <View style={estilos.inputcontainer}>
                    <TextInput 
                        style={estilos.textinput} 
                        placeholder="Ingresa tu numero de telefono"
                        placeholderTextColor="#999"
                    />
                </View>

                <View style={estilos.inputcontainer}>
                    <TextInput 
                        style={estilos.textinput} 
                        placeholder="Ingresa tu contraseña"
                        placeholderTextColor="#999"
                    />
                </View>

                <TouchableOpacity style={estilos.boton} onPress={manejarLogin}>
                    <Text style={estilos.withetext}>REGISTRATE</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/login")}>
                    <Text style={estilos.linkText}>Ya tengo una cuenta </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}