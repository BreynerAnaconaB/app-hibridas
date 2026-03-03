import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import estilos from "./css/estilos";

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    return (
        <View style={estilos.pantallaFondo}>
            <View style={estilos.tarjetaBlanca}>
                <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>TecNano</Text>

                <TextInput 
                    style={estilos.inputBlanco} 
                    placeholder="Usuario o correo electrónico"
                    placeholderTextColor="#888"
                    value={usuario}
                    onChangeText={setUsuario}
                />

                <TextInput 
                    style={estilos.inputBlanco} 
                    placeholder="Contraseña"
                    placeholderTextColor="#888"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={estilos.botonGrisOscuro} onPress={() => router.replace("/(tabs)")}>
                    <Text style={estilos.textoBlanco}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <Text style={{ color: '#666', textAlign: 'center', marginTop: 15, fontSize: 14 }}>Olvidaste tu contraseña?</Text>
                </TouchableOpacity>

                <View style={estilos.separador} />

                <TouchableOpacity 
                    style={estilos.botonGrisClaro} 
                    onPress={() => router.push("/register")}
                >
                    <Text style={estilos.textoNegro}>Crear cuenta nueva</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}