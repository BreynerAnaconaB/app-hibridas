import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import estilos from '../app/css/estilos-LayoutGlobal';

export const Header = () => {
    const router = useRouter(); 
    const { width } = useWindowDimensions();
    const [isOpen, setIsOpen] = useState(false);

    const esEscritorio = width > 768;

    const navegarYCerrar = (ruta: any) => {
        setIsOpen(false);
        router.push(ruta);
    };

    return (
        <View style={estilos.header}>
            <View style={estilos.headerContainer}>
                <TouchableOpacity onPress={() => router.push('/')}>
                    <Text style={estilos.logoText}>
                        Tec<Text style={estilos.logoSpan}>Nano</Text>
                    </Text>
                </TouchableOpacity>

                {esEscritorio ? (
                    <View style={estilos.containerBotonesHorizontal}>
                        <TouchableOpacity style={estilos.btnNav} onPress={() => router.push ('/tienda')}>
                            <Text style={estilos.textBotonNav}>Nuestra tienda</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilos.btnNav} onPress={() => router.push('/servicios')}>
                            <Text style={estilos.textBotonNav}>Servicios</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilos.btnNav} onPress={() => router.push('/login')}>
                            <Text style={estilos.textBotonNav}>Iniciar Sesion</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilos.btnNav} onPress={() => router.push('/register')}>
                            <Text style={estilos.textBotonNav}>Registrate</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity 
                        style={estilos.menuToggle} 
                        onPress={() => setIsOpen(!isOpen)}
                    >
                        <View style={estilos.hamburguesaLine} />
                        <View style={estilos.hamburguesaLine} />
                        <View style={estilos.hamburguesaLine} />
                    </TouchableOpacity>
                )}
            </View>

            {!esEscritorio && isOpen && (
                <View style={estilos.navMenuVertical}>
                    <TouchableOpacity style={estilos.navLink} onPress={() => navegarYCerrar('/tienda')}>
                        <Text style={estilos.textBotonNav}>Visita nuestra tienda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.navLink} onPress={() => navegarYCerrar('/servicios')}>
                        <Text style={estilos.textBotonNav}>Servicios</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.navLink} onPress={() => navegarYCerrar('/login')}>
                        <Text style={estilos.textBotonNav}>Iniciar Sesion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.navLink} onPress={() => navegarYCerrar('/register')}>
                        <Text style={[estilos.textBotonNav]}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export const Footer = () => (
    <View style={estilos.footer}>
        <Text style={estilos.textSmall}>Desarrollado por Juliano, Breyner y Juan</Text>
    </View>
);