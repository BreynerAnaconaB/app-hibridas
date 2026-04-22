import { useState } from 'react';
import { FlatList, ListRenderItem, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import estilos from '../css/estilosTienda';

interface Product {
    id: string;
    nombre: string;
    precio: string;
    categoria: string;
}

const products: Product[] = [
    { id: '1', nombre: 'Teclado mecanico', precio: '$129.900', categoria: 'Periféricos' },
    { id: '2', nombre: 'Mouse Gamer', precio: '$129.900', categoria: 'Periféricos' },
    { id: '3', nombre: 'Monitor 27"', precio: '$700.000', categoria: 'Pantallas' },
    { id: '4', nombre: 'GeForce RTX 4070', precio: '$2.000.000', categoria: 'Componentes' },
    { id: '5', nombre: 'Ryzen 7 5800X', precio: '$700.000', categoria: 'Componentes' },
    { id: '6', nombre: 'RAM 32GB', precio: '$2.000.000', categoria: 'Componentes' },
];

const categories = ['Todos', 'Periféricos', 'Componentes', 'Pantallas'];

export default function PantallaTienda() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
    const [cart, setCart] = useState(0);

    const filteredProducts = categoriaSeleccionada === 'Todos' 
        ? products 
        : products.filter(p => p.categoria === categoriaSeleccionada    );

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

            <FlatList
                data={filteredProducts}
                renderItem={renderProduct}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 100 }}
            />
        </SafeAreaView>
    );
}