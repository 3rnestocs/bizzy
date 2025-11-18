// Archivo: app/(app)/perfil.tsx
import Colors from '@/src/constants/Colors';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PerfilScreen() {
  const router = useRouter();
  // Datos de ejemplo (reemplazar luego con datos reales)
  const [activeTab, setActiveTab] = useState<'general' | 'posts' | 'reviews'>('general');
  const profile = {
    name: 'Mari Carmen',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    website: 'https://mi-sitio-web.com',
    description: 'Venezolana por el mundo',
  };

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header del perfil */}
        <View style={styles.header}>
          <Image source={{ uri: profile.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{profile.name}</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabsRow}>
          <TabItem
            label="Descripción General"
            active={activeTab === 'general'}
            onPress={() => setActiveTab('general')}
          />
          <TabItem label="Posts" active={activeTab === 'posts'} onPress={() => setActiveTab('posts')} />
          <TabItem
            label="Reviews"
            active={activeTab === 'reviews'}
            onPress={() => setActiveTab('reviews')}
          />
        </View>
        <View style={styles.tabUnderline} />

        {/* Contenido por tab */}
        {activeTab === 'general' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre Mi</Text>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Sitio web</Text>
              <Text style={styles.fieldValueLink}>{profile.website}</Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Descripción</Text>
              <Text style={styles.fieldValue}>{profile.description}</Text>
            </View>
          </View>
        )}

        {activeTab === 'posts' && <View style={styles.empty} />}
        {activeTab === 'reviews' && <View style={styles.empty} />}
      </ScrollView>
    </View>
  );
}

function TabItem({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.tabItem, active && styles.tabItemActive]}>
      <Text style={[styles.tabText, active ? styles.tabTextActive : styles.tabTextInactive]}>{label}</Text>
    </TouchableOpacity>
  );
}

// (Puedes reusar los estilos del archivo busqueda.tsx)
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.ui.background,
  },
  content: {
    paddingBottom: 24,
  },
  header: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 12,
    backgroundColor: Colors.ui.card,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'flex-end',
    gap: 16,
  },
  tabItem: {
    paddingVertical: 12,
  },
  tabItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.brand.accent,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  tabTextActive: {
    color: Colors.tabs.active,
  },
  tabTextInactive: {
    color: Colors.tabs.inactive,
  },
  tabUnderline: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.ui.border,
    marginTop: 2,
    marginBottom: 8,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text.primary,
    marginBottom: 12,
  },
  field: {
    marginBottom: 14,
  },
  fieldLabel: {
    fontSize: 12,
    color: Colors.text.secondary,
    marginBottom: 6,
    fontWeight: '600',
  },
  fieldValue: {
    fontSize: 14,
    color: Colors.text.primary,
  },
  fieldValueLink: {
    fontSize: 14,
    color: Colors.brand.accent,
    textDecorationLine: 'underline',
  },
  empty: {
    padding: 16,
  },
});