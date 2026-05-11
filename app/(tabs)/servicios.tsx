import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import estilos from "../css/estilosServicios";

interface Servicio {
    id: string
    nombre: string
    descripcion: string
    categoria: string
}

const listaServicios: Servicio[] = [
  { 
    id: "1", 
    nombre: "Reparación de celulares", 
    descripcion: "Pantallas, baterías y más", 
    categoria: "Reparaciones"
  },
  { 
    id: "2", 
    nombre: "Mantenimiento de PC", 
    descripcion: "Limpieza y optimización", 
    categoria: "Reparaciones"
  },
  { 
    id: "3", 
    nombre: "Instalación de software", 
    descripcion: "Programas y sistemas operativos", 
    categoria: "Software"
  },
  { 
    id: "4", 
    nombre: "Soporte técnico", 
    descripcion: "Asistencia presencial o remota", 
    categoria: "Soporte"
  },
  { 
    id: "5", 
    nombre: "Venta de accesorios", 
    descripcion: "Cargadores, audífonos, etc.", 
    categoria: "Accesorios"
  },
]

const categorias = [
  "Todos",
  "Reparaciones",
  "Mantenimiento",
  "Software",
  "Soporte",
  "Accesorios"
]

export default function Servicios() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
  useState("Todos");

  const serviciosFiltrados =
  categoriaSeleccionada === "Todos"
    ? listaServicios
    : listaServicios.filter(
        item => item.categoria === categoriaSeleccionada
      );

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
      data={categorias}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}

      contentContainerStyle={{
        paddingBottom: 20
      }}

      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => setCategoriaSeleccionada(item)}
        style={{backgroundColor: categoriaSeleccionada === item ? "#fff" : "#ddd"}}>
          <Text style={{
            backgroundColor: categoriaSeleccionada === item ? "#fff" : "#ddd",}}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
      
      />
      <FlatList 
      data={serviciosFiltrados}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between"
      }}
      keyExtractor={(item) => item.id}
      renderItem={render}
      contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  )
}