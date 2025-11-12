// Archivo: app/(app)/perfil.tsx
import { StyleSheet, Text, View } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>
      <Text style={styles.subtitle}>Aquí se mostrará el perfil del usuario/negocio.</Text>
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