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
        fontSize: 12
    },
    itemPrecio: {
        color: 'green', 
        fontWeight: 'bold'
    },
    botonAgregar: {
        width: '100%', 
        padding: 5, 
        marginTop: 5
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
    }
})

export default estilos