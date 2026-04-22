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

                <RegisterInput 
                onSubmit={(form) => {
                    console.log(form)
                    router.replace("/login")
                }}
                />

                <TouchableOpacity onPress={() => router.push("/login")}>
                    <Text style={estilos.noCuentaBoton}>Ya tienes una cuenta?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}