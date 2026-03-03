import { Tabs, usePathname } from 'expo-router';
import { View } from 'react-native';
import { Footer, Header } from '../components/LayoutGlobal';

export default function TabLayout() {
  const rutaActual = usePathname(); 

  const esPantallaAuth = rutaActual === '/login' || rutaActual === '/register';

  return (
    <View style={{ flex: 1 }}>
      {!esPantallaAuth && <Header />}

      <Tabs screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' },}}>
        <Tabs.Screen name="index" options={{ title: 'Tareas' }} />
        <Tabs.Screen name="login" options={{ href: null }} /> 
        <Tabs.Screen name="register" options={{ href: null }} />
        <Tabs.Screen name="store" options={{ href: null }} />
      </Tabs>

      {!esPantallaAuth && <Footer />}
    </View>
  );
}
