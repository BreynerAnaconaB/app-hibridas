import { LoginInput } from "@/components/LoginInput";
import { useRouter } from "expo-router";
<<<<<<< HEAD
import { Text, TouchableOpacity, View } from "react-native";
import estilos from "../css/estilosLoginRegister";

export default function Login() {
    const router = useRouter();

    return (
        <View style={estilos.pantallaFondo}>
            <View style={estilos.tarjetaBlanca}>
                <Text style={estilos.nombrePagina}>TecNano</Text>
                
                <LoginInput />
=======
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import { useAuth } from "../../context/AuthContext";
import { login } from "../../services/api";
import estilos from "../css/estilos";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);
  const router = useRouter();
  const { setAuth } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Completá todos los campos");
      return;
    }
    try {
      setCargando(true);
      const data = await login(email, password);
      setAuth({ token: data.token, email: data.email, nombre: data.nombre });
      router.replace("/(tabs)");
    } catch (err: any) {
      Alert.alert("Error", err.message || "No se pudo iniciar sesión");
    } finally {
      setCargando(false);
    }
  };

  return (
    <View style={estilos.pantallaFondo}>
      <View style={estilos.tarjetaBlanca}>
        <Text style={estilos.tituloPantalla}>TecNano</Text>

        <AppInput
          style={estilos.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <AppInput
          style={estilos.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
>>>>>>> mis-cambios-seguros

        <AppButton
          label={cargando ? "Entrando..." : "Entrar"}
          style={estilos.botonOscuro}
          textStyle={estilos.textoBlanco}
          onPress={handleLogin}
          disabled={cargando}
        />

<<<<<<< HEAD
                <TouchableOpacity onPress={() => {}}>
                    <Text style={estilos.olvidarContraseña}>Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
=======
        <TouchableOpacity onPress={() => {}}>
          <Text style={estilos.textoLink}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
>>>>>>> mis-cambios-seguros

        <View style={estilos.separador} />

        <AppButton
          label="Crear cuenta nueva"
          style={estilos.botonClaro}
          textStyle={estilos.textoNegro}
          onPress={() => router.push("/register")}
        />
      </View>
    </View>
  );
}
