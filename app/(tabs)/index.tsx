import { FlatList, Text, TouchableOpacity, View } from "react-native";
import estilos from "./css/estilos";

const task=[{
  title:"Bañarme",
  done:false,
  date:new Date()
},
{
  title:"Sacar al perro",
  done:true,
  date:new Date()
},
{
  title:"Comer",
  done:true,
  date:new Date()
}
]
interface Task{
  title:string,
  done:boolean,
  date:Date
}
function renderItem({item}:{item:Task}){
  return (
  <View style={estilos.itemContainer}>
    <TouchableOpacity>
      <Text style={item.done ? estilos.textdone : estilos.text}>{item.title}</Text>
      <Text>{item.date.toDateString()}</Text>
    </TouchableOpacity>
    {
      item.done &&
      (
      <TouchableOpacity style={estilos.eliminar}>
        <Text>Eliminar</Text>
      </TouchableOpacity> 
      )
    }
  </View>
  )
}
 
export default function Tareas() {
 
  return (
    <View style={[estilos.container, { flex: 1 }]}> 
        <View style={estilos.inputcontainer}>
        </View>
        <FlatList
            renderItem={renderItem}
            data={task}
            keyExtractor={(item) => item.title} 
        />
    </View>
);
}