// app/(tabs)/_layout.tsx

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

// Función helper para los iconos
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  // Define aquí los colores de tu marca (sacados de tu PDF)
  const BRAND_COLOR_ACTIVE = '#3268a7'; // Tu azul
  const BRAND_COLOR_INACTIVE = '#b5c2cf'; // Tu gris

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: BRAND_COLOR_ACTIVE,
        tabBarInactiveTintColor: BRAND_COLOR_INACTIVE,
        headerShown: false, // Ocultamos los headers por ahora
        tabBarStyle: {
          backgroundColor: '#FFFFFF', // Fondo blanco para la tab bar
        },
      }}>
      
      {/* Pestaña 1: Inicio */}
      <Tabs.Screen
        name="index" // Corresponde a index.tsx
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      
      {/* Pestaña 2: Búsqueda */}
      <Tabs.Screen
        name="busqueda" // Corresponde a busqueda.tsx
        options={{
          title: 'Búsqueda',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      
      {/* Pestaña 3: Crear */}
      <Tabs.Screen
        name="crear" // Corresponde a crear.tsx
        options={{
          title: 'Crear',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-square" color={color} />,
        }}
      />
      
      {/* Pestaña 4: Notificaciones */}
      <Tabs.Screen
        name="notificaciones" // Corresponde a notificaciones.tsx
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      
      {/* Pestaña 5: Perfil */}
      <Tabs.Screen
        name="perfil" // Corresponde a perfil.tsx
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}