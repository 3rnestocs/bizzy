// src/components/common/BZFileUpload.tsx

import Colors from '@/src/constants/Colors';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { BZButton } from './BZButton'; // Reutilizamos tu BZButton

type BZFileUploadProps = {
  title: string;
  subtitle: string;
};

export function BZFileUpload({ title, subtitle }: BZFileUploadProps) {
  
  const handleUploadPress = () => {
    // En el futuro, aquí se abriría ImagePicker
    Alert.alert('Subir Foto', 'Aquí se abriría el selector de imágenes.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <BZButton
        title="Subir"
        variant="light" // Usamos la variante 'light' que creamos
        onPress={handleUploadPress}
        style={styles.uploadButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 2,
    borderColor: Colors.ui.border, // Usamos el gris claro de los inputs
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  uploadButton: {
    width: 'auto', // Para que no ocupe el 100%
    paddingHorizontal: 40,
  },
});