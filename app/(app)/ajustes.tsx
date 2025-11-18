// Archivo: app/(app)/ajustes.tsx
import Colors from '@/src/constants/Colors';
import { useSession } from '@/src/context/SessionContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AjustesScreen() {
  const router = useRouter();
  const { signOut } = useSession();

  return (
    <View style={styles.screen}>
      {/* Header in-screen */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/(app)/perfil')} style={styles.iconBtn}>
          <FontAwesome name="chevron-left" size={20} color={Colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ajustes</Text>
        <View style={styles.iconPlaceholder} />
      </View>
      <View style={styles.divider} />

      {/* Options */}
      <ScrollView contentContainerStyle={styles.content}>
        <SettingRow label="Actualizar Información Personal" onPress={() => router.push('/(app)/update-info')} />
        <SettingRow label="Publicaciones Guardadas" onPress={() => {}} />
        <SettingRow label="Cambiar Contraseña" onPress={() => {}} />
        <SettingRow label="Cerrar Sesión" onPress={() => { signOut(); router.replace('/(auth)'); }} />
      </ScrollView>
    </View>
  );
}

function SettingRow({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <View style={styles.rowWrapper}>
      <TouchableOpacity onPress={onPress} style={styles.row}>
        <Text style={styles.rowText}>{label}</Text>
      </TouchableOpacity>
      <View style={styles.rowDivider} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.ui.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: Colors.ui.card,
  },
  iconBtn: {
    padding: 8,
  },
  iconPlaceholder: {
    width: 36,
    height: 36,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.ui.border,
  },
  content: {
    paddingTop: 8,
  },
  rowWrapper: {
    backgroundColor: Colors.ui.card,
  },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  rowText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  rowDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.ui.border,
  },
});
