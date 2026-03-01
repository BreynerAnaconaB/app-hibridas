import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import estilos from './estilos-LayoutGlobal';

export const Header = () => {
  const router = useRouter(); 

  return (
    <View style={estilos.header}>
        <TouchableOpacity style={estilos.text} onPress={() => router.push('/')}>
            <Text style={estilos.text}>App-Hibridas</Text>
        </TouchableOpacity>
      
      <View style={estilos.containerBotones}>
        <TouchableOpacity 
          style={estilos.botonesHeader}
          onPress={() => router.push('/login')} 
        >
          <Text style={estilos.textBoton}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={estilos.botonesHeader}
          onPress={() => router.push('/servicios')} 
        >
          <Text style={estilos.textBoton}>Consulta servicios</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={estilos.botonesHeader}
          onPress={() => router.push('/register')} 
        >
          <Text style={estilos.textBoton}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Footer = () => (
  <View style={estilos.footer}>
    <Text style={estilos.textSmall}>Desarrollado por Juliano y Breyner</Text>
  </View>
);