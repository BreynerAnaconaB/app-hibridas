import { FlatList, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import estilos from "../styles/estilosServiciosProductosDestacados";

interface productos {
    id: string,
    nombre: string,
    precio: string,
    imagen: any
}   

const productosDestacados: productos[] = [
  {
    id: "1",
    nombre: "GeForce RTX 4070",
    precio: "$2.000.000",
    imagen: require('@/app/(tabs)/assets/4070-SUPER-600x480.png')
  },
  {
    id: "2",
    nombre: "Ryzen 7 5800X",
    precio: "$700.000",
    imagen: require('@/app/(tabs)/assets/2069-600x600-1.png')
  },
  {
    id: "3",
    nombre: 'Monitor 27"',
    precio: "$900.000",
    imagen: require('@/app/(tabs)/assets/ACER-27-KG270-2-Photoroom.webp')
  }
]

export default function ProductosDestacados() {

  const {width} = useWindowDimensions()

  const cardWidth =
  width < 700 ? 220 :
  width < 1100 ? 320 :
  480

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
        source={item.imagen}
        style={estilos.imgCardInfo}
        resizeMode="contain"
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