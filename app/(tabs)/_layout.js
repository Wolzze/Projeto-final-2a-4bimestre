import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  useEffect (() => {
    Platform.OS === 'web' ? document.title = "DDM 2025/2" : null
  }, []);
  return (
    <Tabs screenOptions={{tabBarStyle: { backgroundColor: '#000000ff' }, tabBarActiveTintColor: 'white' }}>
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
          title: 'Tema Livre',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="book" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'About me',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
