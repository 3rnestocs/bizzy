// app/(tabs)/crear.tsx

import { StyleSheet, Text, View } from 'react-native';

export default function CrearScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Publicación</Text>
      <Text style={styles.subtitle}>Aquí irá el formulario para un nuevo post.</Text>
    </View>
  );
}

// (Puedes reusar los estilos del archivo busqueda.tsx)
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