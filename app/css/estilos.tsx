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
        marginTop: '2%',
        color: "#f7f2f2",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        paddingLeft: '1%',
        margin: 5
    },

    textIndex: {
        flex: 9,
        fontSize: 24,
        marginLeft: -10,
        fontFamily: 'sans-serif-medium',
        fontWeight: 500,
        color: '#ffffff',
        maxWidth: 500,
        marginTop: 0,
        padding:40,


    },
    estilosProducto: {
        width: 200,
        height: 200

    },
    ContainerImg: {
        width: 400,
        height: 300,
        resizeMode: 'contain'
    },

    Container: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: -10,
        margin: 30,
        flex: 1,

        alignItems: 'flex-start',
        justifyContent:'flex-start',

        shadowColor: '#a0a0a0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 1,
    },

    ContainerInfo: {

       backgroundColor: '#565656',
    width: '90%',
    maxWidth: 400, 
    height: 300,
    borderRadius: 10,
    
    padding: 20, 
    
    
    marginVertical: 15, 
    
    
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    
    shadowOpacity: 0.1,
    shadowColor: '#000',
    elevation: 2,
    },

    tituloTarjeta: {
        fontSize: 30,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 8,
    },

    imgCard: {
        backgroundColor: "#fff",
        position: 'absolute',
        top: '1%',
        left: '30%',
        right: 0,
        bottom: 0,
        width: '70%',
        height: '98%',
        borderRadius:10
    },

    gradientLayer: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 5,
        width: '100%',
        maxHeight: '100%',
        paddingInline: '10%',
        borderRadius: 20
        

    }


});

export default estilos;