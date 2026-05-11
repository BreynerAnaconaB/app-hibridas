import { RegisterInput } from "@/components/funciones/RegisterInput";
import { registrar } from "@/services/api";
import { useRouter } from "expo-router";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import estilos from "../css/estilosLoginRegister";

type RegisterForm = {
  nombres: string;
  apellidos: string;
  correo: string;
  contraseña: string;
  confirmarContraseña: string;
};

export default function Register() {
  const router = useRouter();

  const handleRegister = async (form: RegisterForm) => {
    try {
      const data = {
        nombre: `${form.nombres} ${form.apellidos}`,
        email: form.correo,
        contraseña: form.contraseña,
        telefono: "000000000", 
      };

      console.log("Enviando:", data);

      const res = await registrar(data);

      console.log("Respuesta:", res);

      Alert.alert("Éxito", "Usuario registrado");

      router.replace("/login");

    } catch (error: any) {
      console.log("ERROR:", error);
      Alert.alert("Error", error?.message || "No se pudo registrar");
    }
  };

  return (
    <View style={estilos.pantallaFondo}>
      <View style={estilos.tarjetaBlanca}>
        <Text style={estilos.registrate}>Regístrate</Text>

        <RegisterInput onSubmit={handleRegister} />

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={estilos.noCuentaBoton}>
            ¿Ya tienes una cuenta?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}