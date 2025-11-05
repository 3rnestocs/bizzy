// app/login.tsx

import React, { useState } from 'react';
// 1. Importa Image y Alert
import { BZButton } from '@/src/components/common/BZButton';
import { BZTextField } from '@/src/components/common/BZTextField';
import Colors from '@/src/constants/Colors';
import { useRouter } from 'expo-router';
import { Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Inicio de Sesión', `Usuario: ${username}\nContraseña: ${password}`);
    // En el futuro:
    // router.replace('/(tabs)'); 
  };
  
  const goToRegister = () => {
    router.push('/registro');
  };
  
  const goToForgotPassword = () => {
    Alert.alert('WIP', 'Pantalla de recuperar contraseña no implementada.');
  };

  return (
    <ScrollView 
      style={styles.outerContainer}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled" // Cierra el teclado al tocar fuera
    >
      <Text style={styles.title}>Iniciar sesión</Text>
      
      {/* 2. Añadimos el Logo */}
      <Image 
        source={require('@/assets/images/logo.png')} // Asegúrate que el nombre coincida
        style={styles.logo}
      />
      
      <Text style={styles.subtitle}>Bienvenido(a)</Text>
      <Text style={styles.description}>Inicia sesión para continuar</Text>

      {/* 3. Contenedor de Formulario */}
      <View style={styles.formContainer}>
        <BZTextField
          label="Usuario"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <BZTextField
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <BZButton
          title="Inicia sesión"
          variant="primary"
          onPress={handleLogin}
          style={{ marginTop: 20 }}
        />
      </View>

      {/* 4. Contenedor de Links */}
      <View style={styles.linksContainer}>
        <BZButton
          title="¿Se te olvidó la contraseña?"
          variant="ghost"
          onPress={goToForgotPassword}
        />
        <BZButton
          title="¿No tienes cuenta? Regístrate."
          variant="ghost"
          onPress={goToRegister}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.ui.background,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50, // Espacio arriba y abajo
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginVertical: 30,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  description: {
    fontSize: 16,
    color: Colors.text.secondary,
    marginBottom: 20,
  },
  formContainer: {
    width: '100%',
  },
  linksContainer: {
    marginTop: 20,
    alignItems: 'center', // Centra los botones 'ghost'
  },
});