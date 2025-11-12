// Archivo: app/(auth)/registro.tsx
import { BZButton } from '@/src/components/common/BZButton';
import { BZFileUpload } from '@/src/components/common/BZFileUpload';
import { BZTextField } from '@/src/components/common/BZTextField';
import Colors from '@/src/constants/Colors';
import { useSession } from '@/src/context/SessionContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RegistroScreen() {
  const router = useRouter();
  const { signUp } = useSession();
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateFields = () => {
    if (!nombre || !apellido || !username || !email || !password || !confirmPassword) {
      setError('Todos los campos son obligatorios.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return false;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return false;
    }
    setError('');
    return true;
  };

  const handleRegister = async () => {
    if (!validateFields()) {
      return;
    }
    
    setIsLoading(true);
    try {
      await signUp({ nombre, apellido, username, email, password });
    } catch (e: any) {
      setIsLoading(false);
      setError('Error al crear la cuenta. Intenta de nuevo.');
    }
  };

  const goToBusinessRegister = () => {
    router.push('/(auth)/registro-negocio');
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color={Colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Únete a la comunidad</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formContainer}>
          <BZTextField
            label="*Nombre"
            value={nombre}
            onChangeText={setNombre}
          />
          <BZTextField
            label="*Apellido"
            value={apellido}
            onChangeText={setApellido}
          />
          <BZTextField
            label="*Nombre de Usuario"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <BZTextField
            label="*Correo Electrónico"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <BZTextField
            label="*Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <BZTextField
            label="*Confirmar contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <BZFileUpload
          title="Subir Foto de Perfil"
          subtitle="Añade una imagen que te identifique"
        />

        {error && <Text style={styles.errorText}>{error}</Text>}

        <View style={styles.buttonContainer}>
          <BZButton
            title="Registrarse"
            variant="primary"
            onPress={handleRegister}
            loading={isLoading}
          />
          <BZButton
            title="¿Tienes un negocio? ¡Regístralo!"
            variant="secondary"
            onPress={goToBusinessRegister}
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
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
});