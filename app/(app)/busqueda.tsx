// Archivo: app/(app)/busqueda.tsx
import { StyleSheet, Text, View } from 'react-native';

export default function BusquedaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Búsqueda</Text>
      <Text style={styles.subtitle}>Aquí irá el BZSearchBar y los resultados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
});