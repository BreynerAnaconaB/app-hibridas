import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import AppButton from "../components/AppButton";
import AppInput from "../components/AppInput";
import { registrar } from "../../services/api";
import estilos from "../css/estilos";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);
  const router = useRouter();

  const handleRegistrar = async () => {
    if (!nombre || !email || !password || !telefono) {
      Alert.alert("Error", "Completá todos los campos");
      return;
    }
    try {
      setCargando(true);
      await registrar({ nombre, email, contraseña: password, telefono });
      Alert.alert("Éxito", "Cuenta creada correctamente", [
        { text: "Ir al login", onPress: () => router.replace("/login") },
      ]);
    } catch (err: any) {
      Alert.alert("Error", err.message || "No se pudo crear la cuenta");
    } finally {
      setCargando(false);
    }
  };

  return (
    <View style={estilos.pantallaFondo}>
      <View style={estilos.tarjetaBlanca}>
        <Text style={estilos.tituloSeccion}>Regístrate</Text>

        <AppInput style={estilos.input} placeholder="Nombre completo" value={nombre} onChangeText={setNombre} />
        <AppInput style={estilos.input} placeholder="Correo electrónico" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <AppInput style={estilos.input} placeholder="Número de teléfono" value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />
        <AppInput style={estilos.input} placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />

        <AppButton
          label={cargando ? "Registrando..." : "Registrarte"}
          style={estilos.botonOscuro}
          textStyle={estilos.textoBlanco}
          onPress={handleRegistrar}
          disabled={cargando}
        />

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={estilos.textoLink}>¿Ya tienes cuenta? Iniciá sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
