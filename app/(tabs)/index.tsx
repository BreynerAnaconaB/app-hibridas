import { Text } from "@react-navigation/elements";
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Image, ScrollView, TouchableOpacity, useWindowDimensions, View } from "react-native";
import estilos from "../css/estilos";


interface Introduccion {
  title: string,
  text: string,
  imagen?: string
}

interface Fotos_texto {
  title: string,
  imagen: string,
  texto: string
}

const task: Introduccion[] = [{
  title: "BIENVENIDO A TECNANO",
  text: "Elevamos el estándar de tu infraestructura digital con soluciones de hardware de alto rendimiento y arquitectura de software a medida.",
}];

const datosIndex: Fotos_texto[] = [{
  title: "COMPONENTES",
  imagen: "https://www.muycomputer.com/wp-content/uploads/2021/10/placa-base.jpg",
  texto:'popopopoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo'

},
{
  title: "SERVICIO",
  imagen: "https://www.muycomputer.com/wp-content/uploads/2021/10/placa-base.jpg",
   texto:'popopopoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo'
}, 
{
  title: "Contactanos",
  imagen: "https://www.muycomputer.com/wp-content/uploads/2021/10/placa-base.jpg",
   texto:'popopopoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo'
}


];




function renderItem({ item }: { item: Introduccion }) {
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
      <View >
        <Text style={estilos.tituloTarjeta}>{item.title}</Text>
        <Text style={[estilos.textIndex]}>{item.texto}</Text>
      </View>
    </TouchableOpacity>

  );
}

export default function paginaPrincipal() {

  const { width } = useWindowDimensions();
  const columnas = width < 700 ? 1 : 2;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList <Introduccion>
          data={task}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />


        <FlatList<Fotos_texto>
          data={datosIndex}
          renderItem={renderDetalles_producto}
          keyExtractor={(item) => item.title}
          key={columnas} 
          horizontal={columnas === 2}
        />
      </View>
    </ScrollView>
  )
}
