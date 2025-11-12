// Archivo: app/(auth)/index.tsx
import { BZButton } from '@/src/components/common/BZButton';
import Colors from '@/src/constants/Colors';
import { useRouter } from 'expo-router'; // Importa el router
import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter(); // Inicializa el router

  return (
    <View style={styles.container}>
      {/* Aquí puedes añadir el logo de Bizzy si lo tienes 
        en la carpeta assets/images 
      */}
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bienvenido a</Text>
        <Text style={styles.brandName}>Bizzy</Text>
        <Text style={styles.subtitle}>
          Descubre lugares, crea una comunidad, date a conocer.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
       <BZButton
          title="Inicia Sesión"
          variant="secondary"
          onPress={() => router.push('/(auth)/login')} 
          style={styles.button}
        />
        <BZButton
          title="Regístrate"
          variant="accent"
          onPress={() => router.push('/(auth)/registro')} 
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brand.primary, // Fondo azul oscuro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: Colors.text.light,
    // (Añade tu fuente)
  },
  brandName: {
    fontSize: 64,
    fontWeight: 'bold',
    color: Colors.text.light,
    marginVertical: 10,
    // (Añade tu fuente)
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text.light,
    textAlign: 'center',
    // (Añade tu fuente)
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 40, // Espacio para la barra inferior de iOS
  },
  button: {
    width: '100%',
  }
});