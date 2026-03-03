import React, { useState } from 'react';
import { FlatList, ListRenderItem, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import estilos from '../css/estilos';
const styles = estilos as any; 

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
        <View style={styles.card || { backgroundColor: '#fff', padding: 10, margin: 5, borderRadius: 10, flex: 1 }}>
            <View style={{ backgroundColor: '#f0f0f0', width: '100%', height: 80, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}></View>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 12 }} numberOfLines={1}>{item.nombre}</Text>
            <Text style={styles.priceText || { color: 'green', fontWeight: 'bold' }}>{item.precio}</Text>
            <TouchableOpacity 
                onPress={() => setCart(cart + 1)}
                style={[styles.boton, { width: '100%', padding: 5, marginTop: 5 }]}
            >
                <Text style={styles.withetext}>Agregar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f9fa' }}>

            <View style={{ height: 60, marginVertical: 10 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15, alignItems: 'center' }}>
                    {categories.map(cat => (
                        <TouchableOpacity
                            key={cat}
                            onPress={() => setCategoriaSeleccionada(cat)}
                            style={[
                                styles.categoryBadge || { padding: 10, backgroundColor: '#ddd', borderRadius: 20, marginRight: 10 },
                                categoriaSeleccionada === cat && (styles.categoryActive || { backgroundColor: '#333' })
                            ]}
                        >
                            <Text style={{ color: categoriaSeleccionada === cat ? '#fff' : '#333', fontWeight: 'bold' }}>{cat}</Text>
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