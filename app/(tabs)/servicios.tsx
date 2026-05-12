import { useState } from "react";
import { FlatList, ListRenderItem, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
    categoria: "Mantenimiento"
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
  {
    id: "6",
    nombre: "Reparación de audifonos",
    descripcion: "Auriculares, inalambricos y cascos",
    categoria: "Reparaciones"
  }
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

      const render: ListRenderItem<Servicio> = ({ item }) => (
      <View style={estilos.card}>
      <Text style={estilos.nombreItem}>{item.nombre}</Text>
      <Text style={estilos.descripcion}>{item.descripcion}</Text>

      <TouchableOpacity style={estilos.botonAgregar}>
        <Text style={estilos.textoBoton}>Solicitar</Text>
      </TouchableOpacity>
       </View>    
      )



  return (
    <SafeAreaView style={estilos.vistaCategorias}>
    <View style={estilos.vistaGeneral}>

      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={
        estilos.containerCategorias
      }>
        {categorias.map(cat => (
          <TouchableOpacity
          style={[estilos.categorias,

            {
              backgroundColor: categoriaSeleccionada === cat ? '#007bff' : '#ddd'
            }
          ]}
          key={cat}
          onPress={() =>
            setCategoriaSeleccionada(cat)
          }>
            <Text style={[
              estilos.cuadroCategoria,
              {
                color: categoriaSeleccionada === cat ? '#fff' : '#333'
              }
            ]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </View>
      
      <FlatList 
      data={serviciosFiltrados}
      numColumns={2}
      columnWrapperStyle={{
        justifyContent: "space-between"
      }}
      keyExtractor={(item) => item.id}
      renderItem={render}
      contentContainerStyle={{ paddingBottom: 100, paddingHorizontal: 10 }}
      />
    
    </SafeAreaView>
  )
}