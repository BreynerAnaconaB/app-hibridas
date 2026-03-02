import { Text } from "@react-navigation/elements";
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native";
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
  text: "Elevamos el estándar de tu infraestructura digital con soluciones de hardware de alto rendimiento y arquitectura de software a medida.",
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
    <View>
    <View style={estilos.Container}>
      <Image source={require('./assets/Tecnano.jpeg')}
       style={estilos.imgCard}   
       resizeMode="cover"
      
      />

      <LinearGradient
       colors={['transparent','#000000', '#7a7a7a']}
       start={{x:9, y:2}}
       end={{x:0, y:9}}
        style={estilos.gradientLayer}
         
      >
        
      <Text style={[estilos.Tituloindex]}>{item.title}</Text>
      <Text style={[estilos.textIndex]}>{item.text}</Text>
       <TouchableOpacity style={[estilos.botonIndex, estilos.contenedorBoton]}>
       <Text style={estilos.textBotonIndex}
       adjustsFontSizeToFit={true}>Servicios</Text> 
      </TouchableOpacity>
      </LinearGradient>

       
    </View>
    </View>
    
  );
}

function renderDetalles_producto({item}: { item: Fotos_texto}){
  return(
    <TouchableOpacity>
    <View style={estilos.ContainerInfo}>
  <Text style={estilos.tituloTarjeta}>{item.title}</Text>
    </View>
</TouchableOpacity>
    
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
        keyExtractor={(item) => item.title}
          />
    </View>
    </ScrollView>
  )
}
