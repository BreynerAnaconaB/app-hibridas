import { StyleSheet } from "react-native";
 
const estilos = StyleSheet.create({
    Titulo: {
        fontSize: 20,
        color: 'blue',
        backgroundColor: 'gray',
        display:'flex',
        justifyContent:'center',
        textAlign:'center',
        padding: 10,
        borderRadius: 10
    },
    textinput: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        width: '50%',
        padding: 10,  
    },
    inputcontainer: {
        marginTop: 15,
        width: '100%',
        alignItems: 'center',
    },
    withetext:{
      fontSize:20,
      color:'black',
    },
    boton:{
      marginTop: 15,
      borderColor:'blue',
      backgroundColor:'gray',
      borderRadius:10,
      padding:10
    },
    textdone:{
        fontSize:16,
        textDecorationLine:"line-through"
    },
    text:{
        fontSize:50,
        color:"#000000",
        display:'flex',
        justifyContent:'center',
        padding:40
    },
    eliminar:{
        backgroundColor:"red"
    },
    estilosProducto:{
        width:200,
        height:200
    }
});

export default estilos;