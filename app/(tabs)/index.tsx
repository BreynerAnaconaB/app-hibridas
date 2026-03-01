import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
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
  done:false,
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
        <View style={estilos.container}>
            <Text style={estilos.Titulo}>Mis Tareas</Text>
            <View style={estilos.inputcontainer}>
                <TextInput style={estilos.textinput} placeholder="Agregar tarea"/>
                <TouchableOpacity style={estilos.boton}>
                    <Text style={estilos.withetext}>Agregar</Text>
                </TouchableOpacity>
            </View>
            <View>
              <FlatList
               renderItem={renderItem}
               data={task}
              />
            </View>
        </View>
    );
}