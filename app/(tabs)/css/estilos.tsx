import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    pantallaFondo: {
        flex: 1,
        backgroundColor: '#F2F3F5', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    tarjetaBlanca: {
        backgroundColor: '#FFFFFF',
        width: '92%',
        maxWidth: 400,
        padding: 24,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    inputElegante: {
        backgroundColor: 'pink',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 6,
        padding: 12,
        fontSize: 16,
        width: '100%', 
        color: '#333',
        marginBottom: 12,
    },
    botonGrisOscuro: {
        backgroundColor: '#444',
        borderRadius: 6,
        padding: 14,
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    botonGrisClaro: {
        backgroundColor: '#E4E6EB',
        borderRadius: 6,
        padding: 12,
        width: '100%',
        alignItems: 'center',
        marginTop: 15,
    },
    textoBlanco: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textoNegro: {
        color: '#1C1E21',
        fontSize: 16,
        fontWeight: 'bold',
    },
    separador: {
        borderBottomWidth: 1,
        borderBottomColor: '#DADDE1',
        marginVertical: 20,
        width: '100%',
    }
});

export default estilos;