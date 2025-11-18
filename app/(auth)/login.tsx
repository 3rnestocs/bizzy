// Archivo: app/(auth)/login.tsx
import { BZButton } from '@/src/components/common/BZButton';
import { BZTextField } from '@/src/components/common/BZTextField';
import Colors from '@/src/constants/Colors';
import { useSession } from '@/src/context/SessionContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const { signIn } = useSession();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      await signIn({ username, password });
    } catch (e: any) {
      setIsLoading(false);
      setError('Usuario o contraseña incorrectos.');
    }
  };
  
  const goToRegister = () => {
    router.push('/(auth)/registro');
  };

  const goToForgotPassword = () => {
    router.push('/(auth)/forgot-password');
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color={Colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Iniciar sesión</Text>
      </View>
      
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

          {error && <Text style={styles.errorText}>{error}</Text>}

          <BZButton
            title="Inicia sesión"
            variant="primary"
            onPress={handleLogin}
            loading={isLoading}
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
    backgroundColor: Colors.ui.background,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.ui.background,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 60,
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});