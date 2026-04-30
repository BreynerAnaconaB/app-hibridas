import { Text } from "@react-navigation/elements";
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

const task: Introduccion[] = [{
  title: "TECNANO",
  text: "Elevamos el estándar de tu infraestructura digital con soluciones de hardware de alto rendimiento",
}];

const datosIndex: Fotos_texto[] = [
  {
    title: "COMPONENTES",
    imagen: 'https://www.computronixco.com/wp-content/uploads/2021/09/mantimiento-computadoras-gamers-cali-1.png',
    texto: 'Hardware de alto rendimiento seleccionado para máxima eficiencia. Desde procesadores de última generación hasta almacenamiento sólido (SSD) de alta velocidad.'
  },
  {
    title: "SERVICIO",
    imagen: "https://imgs.search.brave.com/hp7G0v7liISzxQc5zt33K4duahmaq5DJSqDQSmChoBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcGFy/dGFuZ2Vlay5jb20vYQ",
    texto: 'Mantenimiento preventivo y correctivo con estándares de calidad industrial. Especialistas en limpieza interna, cambio de pasta térmica y optimización de software para prolongar la vida útil de tus equipos.'
  },
  {
    title: "ASESORIAS",
    imagen: "https://imgs.search.brave.com/erzg53lr2BGP8wQORb5k2tIyX1VQxaHJC0_wJXy3LMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4xMjNyZi5jb20vNDUw",
    texto: 'Consultoría técnica personalizada para proyectos de infraestructura digital. Te ayudamos a elegir la configuración ideal según tu presupuesto y necesidades de procesamiento de datos o desarrollo.'
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



function renderDetalles_producto({ item, cardWidth }: any) {
  return (
    <TouchableOpacity
      style={[estilos.ContainerInfo, { width: cardWidth }]}
      activeOpacity={0.7}
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
}


export default function paginaPrincipal() {

  const { width } = useWindowDimensions();


  const columnas =
    width < 700 ? 1 :
    width < 1100 ? 2 :
    3;

  const cardWidth =
    columnas === 1 ? "100%" :
    columnas === 2 ? "48%" :
    "30%";

  return (
    <View style={{ flex: 1 }}>

      <FlatList
        data={datosIndex}
        keyExtractor={(item) => item.title}
        numColumns={columnas}
        key={columnas}

        contentContainerStyle={{
          paddingHorizontal: 10
        }}

        columnWrapperStyle={
          columnas > 1
            ? { justifyContent: "space-between", width: "100%" }
            : undefined
        }

        renderItem={({ item }) =>
          renderDetalles_producto({ item, cardWidth })
        }

        ListHeaderComponent={
          <FlatList
            data={task}
            renderItem={({ item }) => <RenderItem item={item} />}
            keyExtractor={(item) => item.title}
            scrollEnabled={false}
          />
        }
      />

    </View>
  );
}