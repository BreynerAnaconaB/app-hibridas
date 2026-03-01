import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff' 
    },
    recuadroLogin: {
        width: '40%',
        padding: 25,
        backgroundColor: '#f0f0f0', 
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dddddd',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, 
    },
    Titulo: {
        fontSize: 24,
        color: 'gray',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    inputcontainer: {
        width: '100%',
        marginBottom: 15,
        alignItems: 'center',
    },
    label: {
        alignSelf: 'flex-start',
        marginLeft: '10%',
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#333'
    },
    textinput: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        padding: 12,
        backgroundColor: 'white', 
    },
    boton: {
        marginTop: 10,
        backgroundColor: 'gray',
        borderRadius: 10,
        padding: 12,
        width: '90%',
        alignItems: 'center'
    },
    withetext: {
        fontSize: 16,
        color: 'white', 
        fontWeight: 'bold'
    },
    linkText: {
       borderColor: 'gray',
       borderWidth: 1,
       color: 'gray',
       marginTop: 15,
       fontSize: 14,
       padding: 10,
       borderRadius: 10,
       width: '100%',
       textAlign: 'center'
    },
    itemContainer: {
        paddingVertical: 20,
        borderBottomColor: '#6f6f6f',
        borderBottomWidth: 1,
        width: '100%'
    },
    text: {
        fontSize: 16,
        color: "#6f6f6f"
    },
    textdone: {
        fontSize: 16,
        textDecorationLine: "line-through",
        color: '#a1a1a1'
    },
    eliminar: {
        backgroundColor: "red",
        padding: 8,
        borderRadius: 5,
        marginTop: 5,
        alignItems: 'center',
        width: 80
    },
    botonForgot: {
        marginTop: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 12,
        width: '90%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#6f6f6f',
    },
    textForgot: {
        fontSize: 14,
        color: 'black', 
    },
});

export default estilos;