import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

  // ── LAYOUT GENERAL ──────────────────────────────────────────────────────────
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

  // ── INPUTS ──────────────────────────────────────────────────────────────────
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    width: '100%',
    color: '#333',
    marginBottom: 12,
  },

  // ── BOTONES ─────────────────────────────────────────────────────────────────
  botonOscuro: {
    backgroundColor: '#444',
    borderRadius: 6,
    padding: 14,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  botonClaro: {
    backgroundColor: '#E4E6EB',
    borderRadius: 6,
    padding: 12,
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  botonPeligro: {
    backgroundColor: '#cc0000',
    borderRadius: 6,
    padding: 8,
    alignItems: 'center',
    marginTop: 6,
  },

  // ── TEXTOS ──────────────────────────────────────────────────────────────────
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
  textoLink: {
    color: '#666',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 14,
  },
  tituloPantalla: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  tituloSeccion: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  // ── SEPARADOR ───────────────────────────────────────────────────────────────
  separador: {
    borderBottomWidth: 1,
    borderBottomColor: '#DADDE1',
    marginVertical: 20,
    width: '100%',
  },

  // ── INDEX / HERO ─────────────────────────────────────────────────────────────
  Container: {
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 30,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    shadowColor: '#a0a0a0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 1,
    overflow: 'hidden',
  },
  imgCard: {
    position: 'absolute',
    top: 0,
    left: '30%',
    right: 0,
    bottom: 0,
    width: '70%',
    height: '100%',
    borderRadius: 10,
  },
  gradientLayer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 5,
    width: '100%',
    paddingHorizontal: '10%',
    borderRadius: 20,
  },
  Tituloindex: {
    fontWeight: '800',
    fontSize: 40,
    marginTop: 10,
    color: "#f7f2f2",
    padding: 10,
    margin: 5,
  },
  textIndex: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    maxWidth: 500,
    padding: 20,
  },
  ContainerInfo: {
    backgroundColor: '#565656',
    width: '90%',
    maxWidth: 400,
    height: 300,
    borderRadius: 10,
    padding: 20,
    marginVertical: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowColor: '#000',
    elevation: 2,
  },
  tituloTarjeta: {
    fontSize: 30,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },

  // ── TIENDA ──────────────────────────────────────────────────────────────────
  tiendaFondo: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  cardImagen: {
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  cardNombre: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
    marginBottom: 4,
  },
  cardPrecio: {
    color: '#2e7d32',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 4,
  },
  categoriaBadge: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
    marginRight: 10,
  },
  categoriaActiva: {
    backgroundColor: '#333',
  },
  categoriaBadgeTexto: {
    color: '#333',
    fontWeight: 'bold',
  },
  categoriaActivaTexto: {
    color: '#fff',
  },
  cargandoTexto: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    color: '#888',
  },
  errorTexto: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 14,
    color: '#cc0000',
    paddingHorizontal: 20,
  },
});

export default estilos;
