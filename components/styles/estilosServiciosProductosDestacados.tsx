import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    ContainerInfo: {
        minWidth: 260,
        maxWidth: 380,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5
    },

    imgCardInfo: {
        width: '100%',
        height: 180,
        borderRadius: 15,
        marginBottom: 12
    },

    tituloTarjeta: {
        fontFamily:'sans-serif-condensed',
        fontSize: 22,
        fontWeight: '800',
        color: '#000',
        marginBottom: 8,
        textAlign: 'center'
    },

    textTarjeta:{
        fontSize: 15,
        lineHeight: 22,
        fontFamily: 'sans-serif-medium',
        color: '#444'
    },
})

export default estilos