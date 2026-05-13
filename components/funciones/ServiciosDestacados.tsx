import { router } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import estilos from "../styles/estilosServiciosProductosDestacados";

interface servicios {
  id: string,
  title: string,
  imagen: string
}

const serviciosDestacados: servicios[] = [
  {
    id: "1",
    title: "Instalación de software",
    imagen: "https://cdn-icons-png.flaticon.com/512/888/888879.png"
  },
  {
    id: "2",
    title: "Mantenimiento de computadores",
    imagen: "https://cdn-icons-png.flaticon.com/128/2344/2344521.png"
  },
  {
    id: "3",
    title: "Reparación de celulares",
    imagen: "https://cdn-icons-png.flaticon.com/512/15/15874.png"
  },
]

export default function ServiciosDestacados() {

    const {width} = useWindowDimensions()
  
    const cardWidth =
    width < 700 ? 220 :
    width < 1100 ? 320 :
    480

    return (
            <FlatList
              data={serviciosDestacados}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{
                paddingHorizontal: 5
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                style={[estilos.ContainerInfo, {width: cardWidth, marginRight: 15}]}
                  onPress={() => router.push("/servicios")}
                >
                  <Image
                    source={{ uri: item.imagen }}
                    style={estilos.imgCardInfo}
                    resizeMode="contain"
                  />
                  <Text style={estilos.tituloTarjeta}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />        
    )
}