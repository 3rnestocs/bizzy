// Archivo: app/(app)/update-info.tsx
import { BZButton } from '@/src/components/common/BZButton';
import { BZFileUpload } from '@/src/components/common/BZFileUpload';
import { BZTextField } from '@/src/components/common/BZTextField';
import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UpdateInfoScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const onSave = () => {
    setSuccessMessage('Información actualizada exitosamente');
    setTimeout(() => setSuccessMessage(''), 2500);
  };

  const handleUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') return;
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.9,
      allowsEditing: true,
    });
    if (!result.canceled && result.assets?.length) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.screen}>
      {/* Header personalizado */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/(app)/ajustes')} style={styles.iconBtn}>
          <FontAwesome name="chevron-left" size={20} color={Colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Actualiza tu Información</Text>
        <View style={styles.iconPlaceholder} />
      </View>
      <View style={styles.divider} />

      {successMessage ? (
        <View style={styles.banner}><Text style={styles.bannerText}>{successMessage}</Text></View>
      ) : null}

      <ScrollView contentContainerStyle={styles.content}>
        <BZTextField label="Nombre de Usuario" placeholder="Nombre de usuario" value={username} onChangeText={setUsername} />
        <BZTextField label="Nombre de tu empresa" placeholder="Nombre de la empresa" value={company} onChangeText={setCompany} />
        <BZTextField label="Teléfono" placeholder="Teléfono" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
        <BZTextField label="Sitio Web" placeholder="Sitio Web" autoCapitalize="none" value={website} onChangeText={setWebsite} />
        <BZTextField label="Descripción" placeholder="Escribe una descripción" multiline numberOfLines={5} value={description} onChangeText={setDescription} />

        <BZFileUpload
          title="Cambiar Foto de Perfil"
          subtitle="Añade una imagen que te identifique"
          onUploadPress={handleUpload}
          imageUri={selectedImage}
          onRemovePress={() => setSelectedImage(null)}
        />

        <View style={styles.actionsRow}>
          <BZButton title="Cancelar" variant="secondary" onPress={() => router.replace('/(app)/ajustes')} style={{ width: '48%' }} />
          <BZButton title="Guardar" variant="primary" onPress={onSave} style={{ width: '48%' }} />
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: Colors.ui.card,
  },
  iconBtn: { padding: 8 },
  iconPlaceholder: { width: 36, height: 36 },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  divider: { height: StyleSheet.hairlineWidth, backgroundColor: Colors.ui.border },
  banner: {
    margin: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#d1f3da',
  },
  bannerText: {
    color: '#1f7a36',
    fontWeight: '600',
    textAlign: 'center',
  },
  content: { padding: 16, paddingBottom: 24 },
  actionsRow: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});