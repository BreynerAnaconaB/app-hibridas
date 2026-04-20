import { Text } from "@react-navigation/elements";
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Image, TouchableOpacity, useWindowDimensions, View } from "react-native";
import estilos from "../css/estilos";


interface Introduccion {
  title: string,
  text: string,
  imagen?: string
}

interface Fotos_texto {
  title: string,
  imagen: any,
  texto: string
}

const task: Introduccion[] = [{
  title: "TECNANO",
  text: "Elevamos el estándar de tu infraestructura digital con soluciones de hardware de alto rendimiento",
}];

const datosIndex: Fotos_texto[] = [{
  title: "COMPONENTES",
  imagen: 'https://www.computronixco.com/wp-content/uploads/2021/09/mantimiento-computadoras-gamers-cali-1.png',
  texto:'Hardware de alto rendimiento seleccionado para máxima eficiencia. Desde procesadores de última generación hasta almacenamiento sólido (SSD) de alta velocidad,'

},
{
  title: "SERVICIO",
  imagen: "https://imgs.search.brave.com/hp7G0v7liISzxQc5zt33K4duahmaq5DJSqDQSmChoBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcGFy/dGFuZ2Vlay5jb20v/YXNzZXRzL2ltYWdl/cy9yZXBhaXIvcmVw/YWlyX2ljb24uc3Zn",
    texto:'Mantenimiento preventivo y correctivo con estándares de calidad industrial. Especialistas en limpieza interna, cambio de pasta térmica y optimización de software para prolongar la vida útil de tus equipos.'
}, 
{
  title: "ASESORIAS",
  imagen: "https://imgs.search.brave.com/erzg53lr2BGP8wQORb5k2tIyX1VQxaHJC0_wJXy3LMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vZnJlZXNsYWIv/ZnJlZXNsYWIyMzA4/L2ZyZWVzbGFiMjMw/ODA3MDYwLzIxMTY0/ODk1Ny1vbmxpbmUt/Y29uZmVyZW5jZS1t/ZWV0aW5nLWlsbHVz/dHJhdGlvbi1jb25j/ZXB0LWEtZmxhdC1p/bGx1c3RyYXRpb24t/aXNvbGF0ZWQtb24t/d2hpdGUtYmFja2dy/b3VuZC5qcGc_dmVy/PTY",
    texto:'Consultoría técnica personalizada para proyectos de infraestructura digital. Te ayudamos a elegir la configuración ideal según tu presupuesto y necesidades de procesamiento de datos o desarrollo.'
}


];

 

function RenderItem({ item }: { item: Introduccion }) {

   const {width} = useWindowDimensions();

  const margenDinamica = width < 400 ? 14:18;
  

  return (
       
    <View>
      <View style={estilos.Container}>
        <Image source={require('./assets/indexiImagen.jpg')}
          style={estilos.imgCard}
          resizeMode="cover"

        />

        <LinearGradient
          colors={['transparent', '#000000', '#7a7a7a']}
          start={{ x: 9, y: 2 }}
          end={{ x: 0, y: 9 }}
          style={estilos.gradientLayer}


        >
          <Text style={[estilos.Tituloindex]}>{item.title}</Text>
          <Text style={[estilos.textIndex]}>{item.text}</Text>
        </LinearGradient>


      </View>
    </View>

  );
}

function renderDetalles_producto({ item }: { item: Fotos_texto }) {
  return (
    <TouchableOpacity style={estilos.ContainerInfo}
    activeOpacity={0.7}>
        <Image  source={item.imagen}
          style={estilos.imgCardInfo}
          resizeMode='cover'

        />
      <View >
      <Text style={estilos.tituloTarjeta}>{item.title}</Text>
        <Text style={[estilos.textTarjeta]}>{item.texto}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function paginaPrincipal() {

  const { width } = useWindowDimensions();
  const columnas = width < 700 ? 1 : 2;

  return (
      <View style={{ flex: 1 }}>
    <FlatList
      data={datosIndex}
      renderItem={renderDetalles_producto}
      keyExtractor={(item) => item.title}
      key={columnas}
      horizontal={columnas === 2}


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
  )
}
