import { useRouter } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import estilos from "./css/estilos";

export default function Register() {
    const router = useRouter();

    return (
        <View style={estilos.pantallaFondo}>
            <View style={estilos.tarjetaBlanca}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 5 }}>Regístrate</Text>

                <TextInput style={estilos.inputElegante} placeholder="Nombre completo" placeholderTextColor="#888" />
                <TextInput style={estilos.inputElegante} placeholder="Nombre de usuario" placeholderTextColor="#888" />
                <TextInput style={estilos.inputElegante} placeholder="Correo electrónico" placeholderTextColor="#888" />
                <TextInput style={estilos.inputElegante} placeholder="Número de teléfono" placeholderTextColor="#888" />
                <TextInput style={estilos.inputElegante} placeholder="Contraseña" secureTextEntry placeholderTextColor="#888" />

                <TouchableOpacity style={[estilos.botonGrisOscuro, { marginTop: 20 }]} onPress={() => router.replace("/login")}>
                    <Text style={estilos.textoBlanco}>Registrarte</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/login")}>
                    <Text style={{ color: '#444', textAlign: 'center', marginTop: 15, fontWeight: '600' }}>Ya tienes una cuenta?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}