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
        width: '90%', 
        maxWidth: 450, 
        padding: 25,
        backgroundColor: '#f0f0f0', 
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dddddd',
        elevation: 5, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
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
        width: '100%',
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
    text: {
        fontSize: 16,
        color: "#6f6f6f"
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