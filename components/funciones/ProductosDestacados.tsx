import { FlatList, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import estilos from "../styles/estilosServiciosProductosDestacados";

interface productos {
    id: string,
    nombre: string,
    precio: string,
    imagen: string
}   

const productosDestacados: productos[] = [
  {
    id: "1",
    nombre: "RTX 4070",
    precio: "$2.000.000",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_690593-MLA74651271920_022024-F.webp"
  },
  {
    id: "2",
    nombre: "Ryzen 7 5800X",
    precio: "$700.000",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5c6aI3N8GJY6u1gQ4Wn9rxI7VE4L4W5W0g&s"
  },
  {
    id: "3",
    nombre: "Monitor Gamer",
    precio: "$900.000",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0W9w1C0x7Bhx6A2v7_xR6M3T0Yc8H1bYk4w&s"
  }
]

export default function ProductosDestacados() {

  const {width} = useWindowDimensions()

  const cardWidth =
  width < 700 ? 220 :
  width < 1100 ? 320 :
  420

    return (
    <FlatList
  data={productosDestacados}
  horizontal
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item) => item.id}
  contentContainerStyle={{ paddingHorizontal: 5 }}

  renderItem={({ item }) => (
    <TouchableOpacity
      style={[
        estilos.ContainerInfo,
        {
          width: cardWidth,
          marginRight: 15,
        }
      ]}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: item.imagen }}
        style={estilos.imgCardInfo}
        resizeMode="cover"
      />

      <Text style={estilos.tituloTarjeta}>
        {item.nombre}
      </Text>

      <Text style={estilos.textTarjeta}>
        {item.precio}
      </Text>
    </TouchableOpacity>
  )}
/>
)
}