import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
},

titulo: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 20,
    color: '#000'
},

card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
},

nombreItem: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    color: '#000'
},

descripcion: {
    fontSize: 15,
    color: '#555',
    marginBottom: 15,
    lineHeight: 22
},

botonAgregar: {
    backgroundColor: '#ddd',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
},

textoBoton: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16
},

textoCategoria: {
    fontWeight: "700"
},

botonCategoria: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10
}
})

export default estilos