import Banner from '@/components/funciones/Banner';
import Beneficios from '@/components/funciones/Beneficios';
import CategoriasIndex from '@/components/funciones/CategoriasIndex';
import ProductosDestacados from '@/components/funciones/ProductosDestacados';
import ServiciosDestacados from '@/components/funciones/ServiciosDestacados';
import { ScrollView, Text, View } from "react-native";
import estilos from "../css/estilos";

export default function PaginaPrincipal() {

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
      contentContainerStyle={{
        paddingBottom: 30
      }}>
            <Banner 
              title="TECNANO"
              text="Elevamos el estándar de tu infraestructura digital con soluciones de hardware de alto rendimiento"
            />

            <Text style={estilos.tituloCategorias}>Servicios destacados</Text>

            <ServiciosDestacados />

            <Text style={estilos.tituloCategorias}>Productos destacados</Text>

            <ProductosDestacados />

            <Text style={estilos.tituloCategorias}>¿Por qué elegir TecNano?</Text>

            <Beneficios />

            <Text style={estilos.tituloCategorias}>Explorar categorías</Text>

            <CategoriasIndex />

            </ScrollView>
    </View>
  );
}