// app/registro.tsx

import { BZButton } from '@/src/components/common/BZButton';
import { BZFileUpload } from '@/src/components/common/BZFileUpload';
import { BZTextField } from '@/src/components/common/BZTextField';
import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RegistroScreen() {
  const router = useRouter();
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    Alert.alert('Registro', 'WIP: El registro aún no está implementado.');
  };

  const goToBusinessRegister = () => {
    Alert.alert('Registro Negocio', 'WIP: Flujo de registro de negocio.');
  };

  return (
    <View style={styles.outerContainer}>
      
      {/* --- 1. ENCABEZADO FIJO --- */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color={Colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Únete a la comunidad</Text>
      </View>

      {/* --- 2. CONTENIDO CON SCROLL --- */}
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

        <View style={styles.buttonContainer}>
          <BZButton
            title="Registrarse"
            variant="primary"
            onPress={handleRegister}
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
    backgroundColor: Colors.ui.background, // #F7FAFC
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centra el título
    paddingTop: 60, // Ajusta para el Safe Area
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: Colors.ui.background,
  },
  backButton: {
    position: 'absolute',
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
  formContainer: {
    width: '100%',
    marginTop: 20, // Espacio desde el header
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
});