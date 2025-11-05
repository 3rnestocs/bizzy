// app/(tabs)/_layout.tsx

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

// --- 1. IMPORTAR LOS COLORES ---
import Colors from '@/src/constants/Colors';

// Función helper para los iconos
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  // --- 2. ELIMINAMOS LAS CONSTANTES LOCALES ---
  // const BRAND_COLOR_ACTIVE = '#3268a7'; 
  // const BRAND_COLOR_INACTIVE = '#b5c2cf';

  return (
    <Tabs
      screenOptions={{
        // --- 3. USAMOS LOS COLORES DEL ARCHIVO ---
        tabBarActiveTintColor: Colors.tabs.active, // Este es tu azul '#3268a7'
        tabBarInactiveTintColor: Colors.tabs.inactive, // Este es tu gris '#b5c2cf'
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.ui.background, // Este es el '#FFFFFF'
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