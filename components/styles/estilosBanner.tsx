import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    Container: {
    height: 300,
    borderRadius: 20,
    margin: 20,
    overflow: 'hidden', 
    position: 'relative'
    },

    imgCard: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    },
    
    gradientLayer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
    },
  
    Tituloindex: {
        fontWeight: 900,
        fontSize: 50,
        borderRadius: 20,
        marginTop: '2%',
        color: "#f7f2f2",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        paddingLeft: '1%',
        margin: 5
    },    

    textIndex: {
        fontSize: 24,
        fontWeight: 500,
        color: '#ffffff',
        width: '100%',
        maxWidth: 800,
        padding: 20,
    },    
})

export default estilos