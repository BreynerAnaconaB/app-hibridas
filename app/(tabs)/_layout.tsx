import { Footer, Header } from '@/components/LayoutGlobal';
import { Tabs, usePathname } from 'expo-router';
import { View } from 'react-native';
import { AuthProvider } from '../../context/AuthContext';


export default function TabLayout() {
  const rutaActual = usePathname();
  const esPantallaAuth = rutaActual === '/login' || rutaActual === '/register';

  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        {!esPantallaAuth && <Header />}

        <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}>
          <Tabs.Screen name="index" options={{ title: "Inicio" }} />
          <Tabs.Screen name="tienda" options={{ title: "Tienda" }} />
          <Tabs.Screen name="servicios" options={{ title: "Servicios" }} />
          <Tabs.Screen name="login" options={{ href: null }} />
          <Tabs.Screen name="register" options={{ href: null }} />
        </Tabs>

        {!esPantallaAuth && <Footer />}
      </View>
    </AuthProvider>
  );
}
