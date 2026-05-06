import { FlatList, Text, TouchableOpacity, View } from "react-native";
import estilos from "../css/estilosServicios";

interface Servicio {
    id: string
    nombre: string
    descripcion: string
}

const listaServicios: Servicio[] = [
  { id: "1", nombre: "Reparación de celulares", descripcion: "Pantallas, baterías y más" },
  { id: "2", nombre: "Mantenimiento de PC", descripcion: "Limpieza y optimización" },
  { id: "3", nombre: "Instalación de software", descripcion: "Programas y sistemas operativos" },
  { id: "4", nombre: "Soporte técnico", descripcion: "Asistencia presencial o remota" },
  { id: "5", nombre: "Venta de accesorios", descripcion: "Cargadores, audífonos, etc." },
]

export default function servicios() {
  const render = ({ item }: { item: Servicio }) => (
    <View style={estilos.card}>
      <Text style={estilos.nombreItem}>{item.nombre}</Text>
      <Text style={estilos.descripcion}>{item.descripcion}</Text>

      <TouchableOpacity style={estilos.botonAgregar}>
        <Text style={estilos.textoBoton}>Solicitar</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Servicios</Text>

      <FlatList 
      data={listaServicios}
      keyExtractor={(item) => item.id}
      renderItem={render}
      contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  )
}