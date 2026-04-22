<<<<<<< HEAD
import { useState } from 'react';
import { FlatList, ListRenderItem, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import estilos from '../css/estilosTienda';
=======
import React, { useEffect, useState } from "react";
import {
  FlatList, SafeAreaView, ScrollView, Text, View,
} from "react-native";
import AppButton from "../components/AppButton";
import { useAuth } from "../../context/AuthContext";
import { getProductos, Producto } from "../../services/api";
import estilos from "../css/estilos";
>>>>>>> mis-cambios-seguros

const CATEGORIAS = ["Todos", "Periféricos", "Componentes", "Pantallas"];

export default function PantallaTienda() {
  const { auth } = useAuth();
  const [productos, setProductos] = useState<Producto[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!auth?.token) {
      setError("Necesitás iniciar sesión para ver los productos");
      setCargando(false);
      return;
    }
    getProductos(auth.token)
      .then(setProductos)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [auth]);

<<<<<<< HEAD
    const renderProduct: ListRenderItem<Product> = ({ item }) => (
        <View style={estilos.card}>
            <View style={estilos.card2}></View>
            <Text style={estilos.nombreItem}>{item.nombre}</Text>
            <Text style={estilos.itemPrecio}>{item.precio}</Text>
            <TouchableOpacity 
                onPress={() => setCart(cart + 1)}
                style={estilos.botonAgregar}
            >
                <Text>Agregar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={estilos.vistaCategorias}>

            <View style={estilos.vistaGeneral}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={estilos.containerCategorias}>
                    {categories.map(cat => (
                        <TouchableOpacity
                            key={cat}
                            onPress={() => setCategoriaSeleccionada(cat)}
                            style={estilos.categorias}
                        >
                            <Text style={estilos.cuadroCategoria}>{cat}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
=======
  const filtrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  const renderProducto = ({ item }: { item: Producto }) => (
    <View style={estilos.card}>
      <View style={estilos.cardImagen} />
      <Text style={estilos.cardNombre} numberOfLines={1}>
        {item.nombre_producto}
      </Text>
      <Text style={estilos.cardPrecio}>
        ${item.precio_producto.toLocaleString()}
      </Text>
      <AppButton
        label="Agregar"
        style={estilos.botonOscuro}
        textStyle={estilos.textoBlanco}
        onPress={() => {}}
      />
    </View>
  );

  if (cargando) return <Text style={estilos.cargandoTexto}>Cargando productos...</Text>;
  if (error) return <Text style={estilos.errorTexto}>{error}</Text>;
>>>>>>> mis-cambios-seguros

  return (
    <SafeAreaView style={estilos.tiendaFondo}>
      <View style={{ height: 60, marginVertical: 10 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15, alignItems: "center" }}
        >
          {CATEGORIAS.map((cat) => (
            <AppButton
              key={cat}
              label={cat}
              onPress={() => setCategoriaSeleccionada(cat)}
              style={[
                estilos.categoriaBadge,
                categoriaSeleccionada === cat && estilos.categoriaActiva,
              ]}
              textStyle={
                categoriaSeleccionada === cat
                  ? estilos.categoriaActivaTexto
                  : estilos.categoriaBadgeTexto
              }
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filtrados}
        renderItem={renderProducto}
        keyExtractor={(item) => String(item.id_producto)}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 100 }}
        ListEmptyComponent={
          <Text style={estilos.cargandoTexto}>No hay productos en esta categoría</Text>
        }
      />
    </SafeAreaView>
  );
}
