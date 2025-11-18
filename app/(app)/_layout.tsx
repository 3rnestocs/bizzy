// Archivo: app/(app)/_layout.tsx
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import Colors from '@/src/constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tabs.active, 
        tabBarInactiveTintColor: Colors.tabs.inactive, 
        tabBarStyle: {
          backgroundColor: Colors.ui.background, 
        },
      }}>
      
      {/* Pestaña 1: Inicio (CON HEADER PERSONALIZADO) */}
      <Tabs.Screen
        name="index" // Corresponde a app/(app)/index.tsx
        options={{
          title: 'Bizzy',
          headerTitleStyle: {
            color: Colors.text.primary,
            fontWeight: 'bold',
            fontSize: 24,
          },
          headerTitleAlign: 'left',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.ui.background,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable onPress={() => alert('Abrir modal de "Crear"')}>
              <FontAwesome
                name="plus"
                size={22}
                color={Colors.text.primary}
                style={{ marginRight: 15, opacity: 0.8 }}
              />
            </Pressable>
          ),
        }}
      />
      
      {/* Pestaña 2: Búsqueda (SIN HEADER) */}
      <Tabs.Screen
        name="busqueda" // Corresponde a app/(app)/busqueda.tsx
        options={{
          headerShown: false,
          title: 'Búsqueda',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      
      {/* Pestaña 3: Crear (SIN HEADER) */}
      <Tabs.Screen
        name="crear" // Corresponde a app/(app)/crear.tsx
        options={{
          headerShown: false,
          title: 'Crear',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-square" color={color} />,
        }}
      />
      
      {/* Pestaña 4: Notificaciones (CON HEADER ESTÁNDAR) */}
      <Tabs.Screen
        name="notificaciones" // Corresponde a app/(app)/notificaciones.tsx
        options={{
          title: 'Notificaciones',
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      
      {/* Ruta oculta: Ajustes (no aparece en la tab bar) */}
      <Tabs.Screen
        name="ajustes" // Corresponde a app/(app)/ajustes.tsx
        options={{
          href: null,
          headerShown: false,
        }}
      />

      {/* Ruta oculta: Update Info (no aparece en la tab bar) */}
      <Tabs.Screen
        name="update-info" // Corresponde a app/(app)/update-info.tsx
        options={{
          href: null,
          headerShown: false,
        }}
      />
      
      {/* Pestaña 5: Perfil (HEADER PERSONALIZADO) */}
      <Tabs.Screen
        name="perfil" // Corresponde a app/(app)/perfil.tsx
        options={{
          title: 'Perfil',
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.ui.background,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: Colors.ui.border,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <FontAwesome
                name="chevron-left"
                size={22}
                color={Colors.text.primary}
                style={{ marginLeft: 15, opacity: 0.9 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => router.push('/(app)/ajustes')}>
              <FontAwesome
                name="cog"
                size={27}
                color={Colors.text.primary}
                style={{ marginRight: 15, opacity: 0.9 }}
              />
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}