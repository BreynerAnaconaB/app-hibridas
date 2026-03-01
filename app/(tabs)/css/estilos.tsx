import { StyleSheet } from "react-native";
 
const estilos = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Titulo: {
        fontSize: 20,
        color: 'blue',
        backgroundColor: 'gray',
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
    itemContainer:{
        paddingVertical:20,
        borderBottomColor:'#6f6f6f',
        borderWidth:2
    },
    textdone:{
        fontSize:16,
        textDecorationLine:"line-through"
    },
    text:{
        fontSize:16,
        color:"#6f6f6f"
    },
    eliminar:{
        backgroundColor:"red"
    }
});

export default estilos;