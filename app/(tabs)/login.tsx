import { LoginInput } from "@/components/LoginInput";
import { login } from "@/services/api";
import { useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import estilos from "../css/estilosLoginRegister";

export default function Login() {
  const router = useRouter();

  const handleLogin = async (form: {
    correo: string;
    contraseña: string;
  }) => {
    try {
      console.log("Enviando login:", form);

      const res = await login(form.correo, form.contraseña); // 👈 AQUÍ EL FIX

      console.log("Respuesta:", res);

      router.replace("/(tabs)");

    } catch (error: any) {
      console.error("Error login:", error);

      Alert.alert(
        "Error",
        "Credenciales incorrectas"
      );
    }
  };

  return (
    <View style={estilos.pantallaFondo}>
      <View style={estilos.tarjetaBlanca}>
        <Text style={estilos.nombrePagina}>TecNano</Text>

        <LoginInput onSubmit={handleLogin} />

        <TouchableOpacity onPress={() => {}}>
          <Text style={estilos.olvidarContraseña}>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}