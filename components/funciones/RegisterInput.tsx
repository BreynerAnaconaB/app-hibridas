import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/estilosRegisterInput";
import { TextInputField } from "./TextInputField";

type FormData = {
  nombres: string;
  apellidos: string;
  correo: string;
  contraseña: string;
  confirmarContraseña: string;
};

type Props = {
  onSubmit: (form: FormData) => void;
};

export const RegisterInput: React.FC<Props> = ({ onSubmit }) => {
  const [error, setError] = useState("");

  const [form, setForm] = useState<FormData>({
    nombres: "",
    apellidos: "",
    correo: "",
    contraseña: "",
    confirmarContraseña: "",
  });

  const handleChange = (name: keyof FormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !form.nombres ||
      !form.apellidos ||
      !form.correo ||
      !form.contraseña ||
      !form.confirmarContraseña
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.correo)) {
      setError("Correo inválido");
      return;
    }

    if (form.contraseña.length < 6) {
      setError("Mínimo 6 caracteres");
      return;
    }

    if (form.contraseña !== form.confirmarContraseña) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setError("");
    onSubmit(form);
  };

  return (
    <View style={styles.container}>
      <TextInputField name="nombres" label="Nombres" value={form.nombres} onChange={handleChange} />
      <TextInputField name="apellidos" label="Apellidos" value={form.apellidos} onChange={handleChange} />
      <TextInputField name="correo" label="Correo" value={form.correo} onChange={handleChange} />
      <TextInputField name="contraseña" label="Contraseña" value={form.contraseña} onChange={handleChange} secureTextEntry />
      <TextInputField name="confirmarContraseña" label="Confirmar" value={form.confirmarContraseña} onChange={handleChange} secureTextEntry />

      {error !== "" && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};