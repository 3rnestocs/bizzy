// Archivo: app/(auth)/logout.tsx
import { BZButton } from '@/src/components/common/BZButton';
import Colors from '@/src/constants/Colors';
import { useSession } from '@/src/context/SessionContext';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PerfilScreen() {
  const { signOut } = useSession();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <BZButton
        title="Cerrar Sesión"
        variant="secondary"
        onPress={() => signOut()}
        style={{ marginTop: 40 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ui.background,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.primary,
    textAlign: 'center',
  },
});