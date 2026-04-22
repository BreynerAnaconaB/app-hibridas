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
        fontWeight: 900,
        fontSize: 50,
        borderRadius: 20,
        marginTop: '2%',
        color: "#f7f2f2",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        paddingLeft: '1%',
        margin: 5
    },

    textIndex: {
        fontSize: 24,
        fontFamily: 'sans-serif-medium',
        fontWeight: 500,
        color: '#ffffff',
        width: '100%',
        maxWidth: 800,
        padding: 20,
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
    height: 300,
    borderRadius: 20,
    margin: 20,
    overflow: 'hidden', // 👈 IMPORTANTE
    position: 'relative'
    },

    ContainerInfo: {
        width: '48%',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 16,
        margin: 16,
        flex: 1,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5
    },

    tituloTarjeta: {
        fontFamily:'sans-serif-condensed',
        fontSize: 30,
        fontWeight: '800',
        color: '#000000',
        marginBottom: 6,
        textAlign: 'center'
    },

    imgCard: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    },

    gradientLayer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    },

    gradientLayerIndex: {

        flex: 2,
        alignItems: 'center',
        padding: 5,
        width: '100%',
        maxHeight: '110%',
        paddingInline: '10%',
        borderRadius: 15
    },

    imgCardInfo: {
        width: '100%',
        height: 150,
        borderRadius: 20,
        marginBottom: 10
    },

    textTarjeta:{
        fontSize: 14,
        fontFamily: 'sans-serif-medium',
        color: '#333'
    }


});

export default estilos;