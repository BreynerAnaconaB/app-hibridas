import Banner from '@/components/funciones/Banner';
import ProductosDestacados from '@/components/funciones/ProductosDestacados';
import ServiciosDestacados from '@/components/funciones/ServiciosDestacados';
import { router } from "expo-router";
import { FlatList, Image, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import estilos from "../css/estilos";

interface Introduccion {
  title: string,
  text: string,
}

interface Fotos_texto {
  title: string,
  imagen: string,
  texto: string
}

const datosIndex: Fotos_texto[] = [
  {
    title: "COMPONENTES",
    imagen: 'https://www.computronixco.com/wp-content/uploads/2021/09/mantimiento-computadoras-gamers-cali-1.png',
    texto: 'Hardware de alto rendimiento para máxima eficiencia.'
  },
  {
    title: "SERVICIO",
    imagen: "https://imgs.search.brave.com/hp7G0v7liISzxQc5zt33K4duahmaq5DJSqDQSmChoBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcGFy/dGFuZ2Vlay5jb20vYQ",
    texto: 'Mantenimiento y optimización de equipos.'
  },
  {
    title: "ASESORIAS",
    imagen: "https://imgs.search.brave.com/erzg53lr2BGP8wQORb5k2tIyX1VQxaHJC0_wJXy3LMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4xMjNyZi5jb20vNDUw",
    texto: 'Consultoría tecnológica personalizada.'
  }
];

export default function PaginaPrincipal() {

  const { width } = useWindowDimensions();

  const columnas =
    width < 700 ? 1 :
    width < 1100 ? 2 :
    3;

  const cardWidth =
    columnas === 1 ? "100%" :
    columnas === 2 ? "48%" :
    "30%";

  const renderCard = ({ item }: { item: Fotos_texto }) => (
    <TouchableOpacity
      style={[estilos.ContainerInfo, { width: cardWidth }]}
      activeOpacity={0.7}
      onPress={() => {
        if (item.title === "SERVICIO") {
          router.push("/servicios")
        }
      }}
    >
      <Image
        source={{ uri: item.imagen }}
        style={estilos.imgCardInfo}
        resizeMode="cover"
      />

      <Text style={estilos.tituloTarjeta}>{item.title}</Text>
      <Text style={estilos.textTarjeta}>{item.texto}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>

      <FlatList
        data={datosIndex}
        keyExtractor={(item) => item.title}
        numColumns={columnas}
        key={columnas}

        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 30
        }}

        columnWrapperStyle={
          columnas > 1
            ? { justifyContent: "space-between", width: "100%" }
            : undefined
        }

        renderItem={renderCard}

        ListHeaderComponent={
          <View>

            <Banner 
              title="TECNANO"
              text="Elevamos el estándar de tu infraestructura digital con soluciones de hardware de alto rendimiento"
            />

            <Text style={estilos.tituloCategorias}>Servicios destacados</Text>

            <ServiciosDestacados />

            <Text style={estilos.tituloCategorias}>Productos destacados</Text>

            <ProductosDestacados />

            <Text style={estilos.tituloCategorias}>Explorar categorías</Text>

          </View>
        }
      />

    </View>
  );
}