import { Text } from "@react-navigation/elements";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import estilos from "../css/estilos";


interface Introduccion {
  title: string,
  text: string,
   imagen?:string
}

interface Fotos_texto{
  title: string,
  imagen:string,
}

const task: Introduccion[] = [{
  title: "BIENVENIDO A TECNANO",
  text: "Elevamos el rendimiento de tu hardware al siguiente nivel. montaje de componentes y soluciones avanzadas de software en Bogotá.",
}];

const datosIndex: Fotos_texto[] = [{
   title:"COMPONENTES",
   imagen: "https://www.muycomputer.com/wp-content/uploads/2021/10/placa-base.jpg",
   
},
{
  title:"SERVICIO",
   imagen: "https://www.muycomputer.com/wp-content/uploads/2021/10/placa-base.jpg",
}


];


function renderItem({ item }: { item: Introduccion }) {
  return (
    <View style={estilos.Container}>
      <Text style={[estilos.Tituloindex]}>{item.title}</Text>
      <Text style={[estilos.textIndex]}>{item.text}</Text>
    </View>
  );
}

function renderDetalles_producto({item}: { item: Fotos_texto}){
  return(
    <View style={estilos.ContainerInfo}>
<TouchableOpacity>
  <Text style={estilos.tituloTarjeta}>{item.title}</Text>

</TouchableOpacity>
</View>

  );
}

export default function paginaPrincipal(){
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
  <View>
    <FlatList <Introduccion>
      data={task}
      renderItem={renderItem}
      keyExtractor={(item) => item.title}
    />
      <FlatList<Fotos_texto>
        data={datosIndex}
        renderItem={renderDetalles_producto}
        numColumns={2}
        keyExtractor={(item) => item.title}
          />
    </View>
    </ScrollView>
  )
}
