import { Text, TouchableOpacity, View } from 'react-native';
import estilos from './estilos-LayoutGlobal';

export const Header = () => (
  <View style={estilos.header}>
    <Text style={estilos.text}>App Híbrida</Text>
    
    <View style={estilos.containerBotones}>
      <TouchableOpacity style={estilos.botonesHeader}>
        <Text style={estilos.textBoton}>Iniciar sesion</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botonesHeader}>
        <Text style={estilos.textBoton}>Consulta servicios</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.botonesHeader}>
        <Text style={estilos.textBoton}>Registrate</Text>
      </TouchableOpacity>
    </View>
    
  </View>
);
export const Footer = () => (
  <View style={estilos.footer}>
    <Text style={estilos.textSmall}>Desarrollado por Juliano y Breyner</Text>
  </View>
);