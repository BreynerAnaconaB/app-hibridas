import { Text } from "@react-navigation/elements";
import { FlatList, View } from "react-native";
import estilos from "../css/estilos";


interface Introduccion{
  title:string,
  text:string,
}

const task: Introduccion[] = [{
  title:"Tecnano",
  text: "hola pepito",
}];


function renderItem({item}:{item:Introduccion}){
  return (
  <View>
    <Text style={estilos.text}>{item.title}</Text>
  </View>
  );
}

export default function informacion(){
  return(<View>
   <FlatList<Introduccion>
    data={task}
    renderItem={renderItem}
    keyExtractor={(item) => item.title}
/>
</View>)
  
}
