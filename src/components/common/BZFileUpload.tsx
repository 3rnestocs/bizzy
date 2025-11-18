// Archivo: src/components/common/BZFileUpload.tsx
import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BZButton } from './BZButton'; // Reutilizamos tu BZButton

type BZFileUploadProps = {
  title: string;
  subtitle: string;
  onUploadPress?: () => void;
  onRemovePress?: () => void;
  imageUri?: string | null;
};

export function BZFileUpload({ title, subtitle, onUploadPress, onRemovePress, imageUri }: BZFileUploadProps) {
  
  const handleUploadPress = () => {
    if (onUploadPress) return onUploadPress();
    Alert.alert('Subir Foto', 'Aquí se abriría el selector de imágenes.');
  };

  const handleRemovePress = () => {
    if (onRemovePress) return onRemovePress();
  };

  if (imageUri) {
    return (
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUri }} style={styles.preview} />
        <TouchableOpacity onPress={handleRemovePress} style={styles.removeBtn}>
          <FontAwesome name="trash" size={16} color={Colors.text.primary} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <BZButton
        title="Subir"
        variant="light"
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
    marginTop: 8,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  preview: {
    width: '100%',
    height: 190,
    borderRadius: 12,
    resizeMode: 'contain',
  },
  removeBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: Colors.ui.background,
    padding: 8,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  }
});