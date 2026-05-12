import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    card: {
        backgroundColor: '#fff', 
        padding: 10, 
        margin: 5, 
        borderRadius: 10, 
        flex: 1
    },
    card2: {
        backgroundColor: '#f0f0f0', 
        width: '100%', 
        height: 80, 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 10
    },
    nombreItem: {
        fontWeight: 'bold', 
        textAlign: 'center', 
        fontSize: 17,
        marginBottom: 10,
        minHeight: 40
    },
    botonAgregar: {
        backgroundColor: '#e7e7e7',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
        alignSelf: 'center',
        width: '80%',
    },
    vistaCategorias: {
        flex: 1, 
        backgroundColor: '#f8f9fa'
    },
    categorias: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        backgroundColor: '#ddd', 
        borderRadius: 20, 
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerCategorias: {
        paddingHorizontal: 15, 
        alignItems: 'center'
    },
    vistaGeneral: {
        marginVertical: 10
    },
    cuadroCategoria: {
       color: '#fff', 
       fontWeight: 'bold',
       fontSize: 14
    },
    descripcion: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
    lineHeight: 22,
    textAlign: 'center'
    },
    textoBoton: {
        color: '#000',
        fontWeight: '700',
        fontSize: 16,
    }
})

export default estilos