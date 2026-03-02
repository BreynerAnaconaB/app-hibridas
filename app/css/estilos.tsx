import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    Titulo: {
        fontSize: 20,
        color: 'blue',
        backgroundColor: 'gray',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
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
    withetext: {
        fontSize: 20,
        color: 'black',
    },
    boton: {
        marginTop: 15,
        borderColor: 'blue',
        backgroundColor: 'gray',
        borderRadius: 10,
        padding: 10
    },
    textdone: {
        fontSize: 16,
        textDecorationLine: "line-through"
    },
    Tituloindex: {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 800,
        fontSize: 40,
        borderRadius: '20%',
        marginTop:'2%',
        color: "#000000",
        flexDirection:'row',
        justifyContent: 'center',
        padding: 20,
        margin:30
    },

    textIndex: {
        fontSize: 26,
        marginLeft:20,
        fontFamily: 'sans-serif-medium',
        fontWeight: 400,
        color: '#0d0d0e',
        maxWidth: 500,
        marginTop: 0,
        padding: 30,


    },
    estilosProducto: {
        width: 200,
        height: 200

    },
    ContainerImg: {
      width:400,
      height:300,
      resizeMode:'contain'
    },
    Container: {
          backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
        margin: 27,
        flex: 1,
    
        justifyContent:'center',
        alignItems:'baseline',

        shadowColor: '#a0a0a0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },

    ContainerInfo:{
        
            backgroundColor: '#8f8f8f',
            width:200,
            height:400,
           borderRadius: 10,
           padding: '10%',
           margin: '8%',
           marginTop:'2%',

            flex: 2,
        justifyContent:"center",
        alignItems: 'center',

        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },

    tituloTarjeta: {
        fontSize: 30,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 8,
    }


});

export default estilos;