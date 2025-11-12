// Archivo: app/(auth)/registro-negocio.tsx
import { BZButton } from '@/src/components/common/BZButton';
import { BZFileUpload } from '@/src/components/common/BZFileUpload';
import { BZOptionsModal, ModalOption } from '@/src/components/common/BZOptionsModal';
import { BZSelectField } from '@/src/components/common/BZSelectField';
import { BZTextField } from '@/src/components/common/BZTextField';
import Colors from '@/src/constants/Colors';
import { useSession } from '@/src/context/SessionContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DEMO_INDUSTRIES: ModalOption[] = [
  { label: 'Restaurante', value: 'restaurant' },
  { label: 'Tecnología', value: 'tech' },
  { label: 'Ropa y Moda', value: 'fashion' },
  { label: 'Salud y Bienestar', value: 'health' },
  { label: 'Servicios Profesionales', value: 'services' },
  { label: 'Educación', value: 'education' },
  { label: 'Otro', value: 'other' },
];

export default function RegistroNegocioScreen() {
  const router = useRouter();
  const { signUp } = useSession();
  
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sitioWeb, setSitioWeb] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [industria, setIndustria] = useState<string | null>(null);
  const [locacion, setLocacion] = useState('');

  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateFields = () => {
    if (!nombre || !telefono || !industria || !locacion) {
      setError('Por favor, completa todos los campos obligatorios.');
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
      await signUp({ nombre, telefono, sitioWeb, descripcion, industria, locacion });
    } catch (e: any) {
      setIsLoading(false);
      setError('Error al registrar el negocio. Intenta de nuevo.');
    }
  };

  const handleIndustrySelect = (option: ModalOption) => {
    setIndustria(option.value);
    setIsPickerVisible(false);
  };

  const selectedIndustryLabel = DEMO_INDUSTRIES.find(o => o.value === industria)?.label || null;

  return (
    <View style={styles.outerContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color={Colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Registra tu negocio</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.formContainer}>
          <BZTextField label="*Nombre del negocio" value={nombre} onChangeText={setNombre} />
          <BZTextField label="*Teléfono" value={telefono} onChangeText={setTelefono} keyboardType="phone-pad" />
          <BZTextField label="Sitio Web" value={sitioWeb} onChangeText={setSitioWeb} autoCapitalize="none" keyboardType="url" />
          <BZTextField label="Descripción de tu negocio" value={descripcion} onChangeText={setDescripcion} multiline numberOfLines={4} />

          <BZSelectField
            label="*Industria"
            value={selectedIndustryLabel}
            placeholder="Industria"
            onPress={() => setIsPickerVisible(true)}
          />
          
          <BZTextField
            label="*Locación"
            value={locacion}
            onChangeText={setLocacion}
            placeholder="Ciudad, país."
          />
        </View>

        <BZFileUpload
          title="Subir Foto/Logo"
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
        </View>
      </ScrollView>

      <BZOptionsModal
        isVisible={isPickerVisible}
        onClose={() => setIsPickerVisible(false)}
        title="Selecciona una Industria"
        options={DEMO_INDUSTRIES}
        selectedValue={industria}
        onSelect={handleIndustrySelect}
      />
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