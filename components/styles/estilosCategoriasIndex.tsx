import { StyleSheet } from "react-native";

const estilos = StyleSheet.create ({
    vistaCategorias: {
        paddingHorizontal: 10,
        marginBottom: 20
    },
    vistaCategorias2: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    ContainerInfo: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 16,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5
    },    
    imgCardInfo: {
        width: '100%',
        height: 150,
        marginBottom: 10,
        alignSelf: 'center'
    },    
    tituloTarjeta: {
        fontFamily:'sans-serif-condensed',
        fontSize: 20,
        fontWeight: '800',
        color: '#000000',
        marginBottom: 6,
        textAlign: 'center'
    },    
})

export default estilos