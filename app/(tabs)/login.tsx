import { LoginInput } from "@/components/LoginInput";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import estilos from "../css/estilosLoginRegister";

export default function Login() {
    const router = useRouter();

    return (
        <View style={estilos.pantallaFondo}>
            <View style={estilos.tarjetaBlanca}>
                <Text style={estilos.nombrePagina}>TecNano</Text>
                
                <LoginInput 
                onSubmit={(form) => {
                    console.log(form)
                    router.replace("/(tabs)")
                }}
                />

                <TouchableOpacity onPress={() => {}}>
                    <Text style={estilos.olvidarContraseña}>Olvidaste tu contraseña?</Text>
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