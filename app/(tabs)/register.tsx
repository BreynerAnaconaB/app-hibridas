import { RegisterInput } from "@/components/RegisterInput";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import estilos from "../css/estilosLoginRegister";

export default function Register() {
    const router = useRouter();

    return (
        <View style={estilos.pantallaFondo}>
            <View style={estilos.tarjetaBlanca}>
                <Text style={estilos.registrate}>Regístrate</Text>

                <RegisterInput />

                <TouchableOpacity style={estilos.botonGrisOscuro} onPress={() => router.replace("/login")}>
                    <Text style={estilos.textoBlanco}>Registrarte</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/login")}>
                    <Text style={estilos.noCuentaBoton}>Ya tienes una cuenta?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}