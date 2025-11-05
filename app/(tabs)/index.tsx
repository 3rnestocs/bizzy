// app/(tabs)/index.tsx

import { BZButton } from '@/src/components/common/BZButton';
import Colors from '@/src/constants/Colors';
import React, { useState } from 'react'; // 1. Importa useState
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// 2. Importa el nuevo componente
import { BZTextField } from '@/src/components/common/BZTextField';

export default function TabOneScreen() {
  // 3. Define estados para controlar los inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    alert(`Usuario: ${username}\nContraseña: ${password}`);
  };

  // 4. Cambiamos View por ScrollView para evitar que se corte si hay muchos componentes
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Probando Componentes</Text>
      <View style={styles.separator} />

      {/* 5. Usa los nuevos BZTextField */}
      <BZTextField
        label="Usuario"
        // placeholder="Usuario" // <- Ya no es necesario
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <BZTextField
        label="Contraseña"
        // placeholder="Contraseña" // <- Ya no es necesario
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <BZButton
        title="Iniciar Sesión"
        variant="primary"
        onPress={handlePress}
        style={{ marginTop: 20 }} // Añadimos un margen superior
      />

      <BZButton
        title="Registrarse"
        variant="secondary"
        onPress={handlePress}
        style={{ marginTop: 20 }} // Añadimos un margen superior
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1, // Quitamos flex: 1 para que el ScrollView funcione
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30, // Añadimos padding vertical
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: Colors.ui.border,
  },
});