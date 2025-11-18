// Archivo: app/(app)/crear.tsx
import { BZButton } from '@/src/components/common/BZButton';
import { BZTextField } from '@/src/components/common/BZTextField';
import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CrearScreen() {
  const router = useRouter();
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [picking, setPicking] = useState(false);
  const [posting, setPosting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const canPost = !!imageUri || description.trim().length > 0;

  const pickImage = async () => {
    try {
      setPicking(true);
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        setPicking(false);
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.9,
        allowsEditing: true,
      });
      if (!result.canceled && result.assets?.length) {
        setImageUri(result.assets[0].uri);
      }
    } finally {
      setPicking(false);
    }
  };

  const removeImage = () => {
    setImageUri(null);
  };

  const handleClose = () => {
    // Limpia el formulario y vuelve atrás
    setDescription('');
    setImageUri(null);
    router.back();
  };

  const handlePost = async () => {
    if (!canPost) return;
    try {
      setPosting(true);
      // Aquí iría tu lógica real para publicar
      console.log('Postear', { description, imageUri });

      // Mensaje de éxito en pantalla
      setSuccessMessage('Has realizado el post exitosamente');

      // Reset de formulario
      setDescription('');
      setImageUri(null);

      // Redirigir al Home (tab Inicio)
      router.replace('/(app)');

      // Oculta el mensaje después de 2.5s (por si permaneces en esta vista en alguna plataforma)
      setTimeout(() => setSuccessMessage(''), 2500);
    } finally {
      setPosting(false);
    }
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nueva Publicación</Text>
        <TouchableOpacity onPress={handleClose} style={styles.headerClose}>
          <FontAwesome name="close" size={22} color={Colors.text.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />

      {/* Mensaje de éxito */}
      {successMessage ? (
        <View style={styles.successBanner}>
          <Text style={styles.successText}>{successMessage}</Text>
        </View>
      ) : null}

      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        {/* Imagen (solo si existe) */}
        {imageUri ? (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <TouchableOpacity onPress={removeImage} style={styles.removeBtn}>
              <FontAwesome name="trash" size={16} color={Colors.text.primary} />
            </TouchableOpacity>
          </View>
        ) : null}

        {/* Descripción */}
        <BZTextField
          label="Descripción"
          placeholder="Escribe una reseña..."
          multiline
          numberOfLines={6}
          value={description}
          onChangeText={setDescription}
          style={{ marginTop: 16 }}
        />

        {/* Botonera */}
        <View style={styles.actions}>
          <BZButton
            title={imageUri ? 'Cambiar foto' : 'Añadir foto'}
            variant="light"
            onPress={pickImage}
            loading={picking}
            style={styles.leftButton}
          />
          <BZButton
            title="Postear"
            variant="primary"
            onPress={canPost ? handlePost : undefined}
            loading={posting}
            style={[styles.rightButton, !canPost && styles.disabledButton]}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.ui.background,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  headerClose: {
    position: 'absolute',
    right: 16,
    top: 20,
    padding: 8,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#E6E6E6',
  },
  successBanner: {
    marginHorizontal: 16,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#d1f3da', // verde claro
  },
  successText: {
    color: '#1f7a36',
    fontWeight: '600',
    textAlign: 'center',
  },
  content: {
    padding: 16,
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  image: {
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
    // sombra sutil
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  actions: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftButton: {
    width: 140,
  },
  rightButton: {
    width: 120,
  },
  disabledButton: {
    opacity: 0.5,
  },
});