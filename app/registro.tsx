// app/registro.tsx

import Colors from '@/src/constants/Colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RegistroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Únete a la comunidad</Text>
      <Text style={styles.subtitle}>
        Aquí irá el formulario de registro.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.ui.background,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
  }
});