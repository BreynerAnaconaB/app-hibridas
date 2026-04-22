import { StyleSheet } from "react-native";

const estilosLayout = StyleSheet.create({
  header: {
    height: 70, 
    backgroundColor: '#6f6f6f', 
    paddingHorizontal: 20, 
    justifyContent: 'center',
    zIndex: 1000,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoText: { 
    fontSize: 40, 
    fontWeight: 'bold',
    color: 'white' 
  },
  logoSpan: { 
    color: '#333' 
  },

  containerBotonesHorizontal: {
    flexDirection: 'row', 
    gap: 10,
    alignItems: 'center', 
  },
  btnNav: {
    backgroundColor: '#444', 
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  textBotonNav: {
    color: 'white', 
    fontSize: 14,
  },
  textLink: { 
    color: 'white',
    fontSize: 14,
    marginHorizontal: 5,
  },

  menuToggle: { 
    padding: 10,
  },
  hamburguesaLine: {
    width: 25,
    height: 3,
    backgroundColor: 'white', 
    marginVertical: 2,
    borderRadius: 2,
  },

  navMenuVertical: {
    position: 'absolute',
    top: 70, 
    left: 0,
    right: 0,
    backgroundColor: '#6f6f6f',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#444',
    elevation: 5,
  },
  navLink: { 
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#888', 
  },

  footer: {
    height: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSmall: { 
    color: 'white', 
    fontSize: 12 
  },
});

export default estilosLayout;