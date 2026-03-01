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
                <Text style={estilos.Titulo}>Iniciar sesion</Text>

                <View style={estilos.inputcontainer}>
                    <TextInput 
                        style={estilos.textinput} 
                        placeholder="Usuario"
                        placeholderTextColor="#999"
                        value={usuario}
                        onChangeText={setUsuario}
                    />
                </View>

                <View style={estilos.inputcontainer}>
                    <TextInput 
                        style={estilos.textinput} 
                        placeholder="Contraseña"
                        placeholderTextColor="#999"
                        secureTextEntry={true} 
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <TouchableOpacity style={estilos.boton} onPress={manejarLogin}>
                    <Text style={estilos.withetext}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botonForgot} onPress={manejarLogin}>
                    <Text style={estilos.textForgot}>Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/register")}>
                    <Text style={estilos.linkText}>Crear cuenta nueva</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}