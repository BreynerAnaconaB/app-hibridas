import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    ContainerInfo: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 16,
        overflow: 'hidden',
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
        fontSize: 19,
        fontWeight: '700',
        color: '#000',
        marginBottom: 8,
        textAlign: 'center'
    },

    textTarjeta:{
        fontSize: 15,
        lineHeight: 22,
        color: '#444',
        textAlign: 'center'
    },
})

export default estilos