import { Text } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Image, TouchableOpacity, useWindowDimensions, View } from "react-native";
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

interface servicios {
  id: string,
  title: string,
  imagen: string
}


const task: Introduccion[] = [{
  title: "TECNANO",
  text: "Elevamos el estándar de tu infraestructura digital con soluciones de hardware de alto rendimiento",
}];

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

const serviciosDescatados = [
  {
    id: "1",
    title: "Instalación de software",
    imagen: "https://cdn-icons-png.flaticon.com/512/888/888879.png"
  },
  {
    id: "2",
    title: "Mantenimiento de computadores",
    imagen: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
  },
  {
    id: "3",
    title: "Reparación de celulares",
    imagen: "https://cdn-icons-png.flaticon.com/512/15/15874.png"
  },
]

const productosDestacados = [
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
];

function RenderItem({ item }: { item: Introduccion }) {
  return (
    <View style={estilos.Container}>
      <Image
        source={require('./assets/indexiImagen.jpg')}
        style={estilos.imgCard}
        resizeMode="cover"
      />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={estilos.gradientLayer}
      >
        <Text style={estilos.Tituloindex}>{item.title}</Text>
        <Text style={estilos.textIndex}>{item.text}</Text>
      </LinearGradient>
    </View>
  );
}

export default function PaginaPrincipal() {

  const { width } = useWindowDimensions();
  const navigation = useNavigation();

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
          navigation.navigate("Servicios" as never);
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

            {task.map(item => (
              <RenderItem key={item.title} item={item} />
            ))}

            <Text>Servicios destacados</Text>

            <FlatList
              data={serviciosDescatados}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                style={[estilos.ContainerInfo, {width: 200, marginRight: 10}]}
                  onPress={() => navigation.navigate("Servicios" as never)}
                >
                  <Image
                    source={{ uri: item.imagen }}
                    style={estilos.imgCardInfo}
                    resizeMode="cover"
                  />
                  <Text style={estilos.tituloTarjeta}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />

            <Text>Productos destacados</Text>

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
          width: 220,
          marginRight: 10,
          flex: undefined
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

            <Text>Explorar categorías</Text>

          </View>
        }
      />

    </View>
  );
}