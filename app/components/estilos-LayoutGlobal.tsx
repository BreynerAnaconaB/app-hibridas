import { StyleSheet } from "react-native";

const estilosLayout = StyleSheet.create({
  header: {
    height: 60, 
    backgroundColor: '#6f6f6f',
    paddingHorizontal: 20, 
    flexDirection: 'row',    
    justifyContent: 'space-between', 
    alignItems: 'center',  
  },
  containerBotones: {
    flexDirection: 'row', 
    gap: 10,
    alignItems: 'center', 
  },
  footer: {
    height: 40,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: '#6f6f6f', 
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: 'white',
    fontSize: 16,
    },
  textSmall: { 
    color: 'white', 
    fontSize: 12 
  },
  botonesHeader: {
    backgroundColor: '#444', 
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textBoton: {
    color: 'white', 
    fontSize: 14,
  },    
  
});

export default estilosLayout;