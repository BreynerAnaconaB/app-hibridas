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
        fontSize: 15
    },
    itemPrecio: {
        color: 'green', 
        fontWeight: 'bold',
        alignItems: 'center'
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
        padding: 10, 
        backgroundColor: '#ddd', 
        borderRadius: 20, 
        marginRight: 10 
    },
    containerCategorias: {
        paddingHorizontal: 15, 
        alignItems: 'center'
    },
    vistaGeneral: {
        height: 60, 
        marginVertical: 10
    },
    cuadroCategoria: {
       color: '#fff', 
       fontWeight: 'bold'
    },
    textoBoton: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    }    
})

export default estilos