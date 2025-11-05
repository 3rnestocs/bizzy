// app/login.tsx

import { BZButton } from '@/src/components/common/BZButton';
import { BZTextField } from '@/src/components/common/BZTextField';
import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome'; // Importa FontAwesome
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Inicio de Sesión', `Usuario: ${username}\nContraseña: ${password}`);
    // router.replace('/(tabs)'); 
  };
  
  const goToRegister = () => {
    router.push('/registro');
  };
  
  const goToForgotPassword = () => {
    Alert.alert('WIP', 'Pantalla de recuperar contraseña no implementada.');
  };

  return (
    <View style={styles.outerContainer}>
      
      {/* --- 1. ENCABEZADO FIJO --- */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color={Colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Iniciar sesión</Text>
      </View>
      
      {/* --- 2. CONTENIDO CON SCROLL --- */}
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Image 
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
        
        <Text style={styles.subtitle}>Bienvenido(a)</Text>
        <Text style={styles.description}>Inicia sesión para continuar</Text>

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
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: Colors.ui.background, // #F7FAFC
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centra el título
    paddingTop: 60, // Ajusta para el Safe Area
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.ui.background, // Mismo fondo
  },
  backButton: {
    position: 'absolute', // Permite que el título se centre
    left: 20,
    top: 60, // Alineado con el paddingTop
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
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
    alignItems: 'center',
  },
});