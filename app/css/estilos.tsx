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
        justifyContent: 'center',
        padding: 20,
        paddingLeft: 20,
        margin: 30
    },

    textIndex: {
        flex: 9,
        fontSize: 24,
        marginLeft: 20,
        fontFamily: 'sans-serif-medium',
        fontWeight: 400,
        color: '#ffffff',
        maxWidth: 500,
        marginTop: 0,
        padding: 30,


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
        borderRadius: 1,
        padding: -12,
        margin: 10,
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#a0a0a0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 1,
    },

    ContainerInfo: {

        backgroundColor: '#565656',
        width: '90%',
        maxWidth: 300,
        height: 300,
        borderRadius: 10,
        padding: '10%',
        margin: 15,
        marginTop: '5%',

        flex: 2,
        justifyContent: "center",
        alignSelf: 'center',
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

    contenedorBoton: {
        alignSelf: 'flex-end',
        backgroundColor: '#757474',
        borderRadius: 90,
          

        paddingHorizontal: 40,
        paddingVertical: 20,

        marginRight: 20,
        marginTop: 4,
        marginBottom: 10,
    },
    botonIndex: {
        fontFamily: 'sans-serif-medium',
        fontWeight: '300',
        borderColor: 'red',
        backgroundColor: '#ffffffd8',
        color: '#0000',
        borderRadius: 10
    },

    textBotonIndex: {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 900,
        fontSize: 20,
        marginTop: '-2%',
        color: "#ffffff",
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 1,
        width: '110%',
        padding: '2%'
    },

    imgCard: {
        backgroundColor: "#fff",
        position: 'absolute',
        top: 30,
        left: '30%',
        right: 0,
        bottom: 0,
        width: '70%',
        height: '70%',
    },

    gradientLayer: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 5,
        width: '110%',
        maxHeight: '90%',
        paddingInline: '10%',
        borderRadius: 0

    }


});

export default estilos;