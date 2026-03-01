import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { Footer, Header } from '../components/LayoutGlobal';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>

      <Header />

      <View style={{ flex: 1 }}>
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" options={{ title: 'Tareas' }} />
        </Tabs>
      </View>
      
      <Footer />
    </View>
  );
}