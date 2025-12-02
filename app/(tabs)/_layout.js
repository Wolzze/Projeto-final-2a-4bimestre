import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useEffect } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { Platform } from 'react-native';

export default function TabLayout() {
  useEffect (() => {
    Platform.OS === 'web' ? document.title = "DDM 2025/2" : null
  }, []);
  return (
    <Tabs screenOptions={{tabBarStyle: { backgroundColor: '#141414' }, tabBarActiveTintColor: 'white' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="temalivre"
        options={{
          title: 'Jogo',
          tabBarIcon: ({ color }) => <Entypo name="game-controller" size={28} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="temaobrigatorio"
        options={{
          title: 'Futuro Tecnológico',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'Sobre Mim',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
