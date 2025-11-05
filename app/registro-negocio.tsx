// app/registro-negocio.tsx

import { BZButton } from '@/src/components/common/BZButton';
import { BZFileUpload } from '@/src/components/common/BZFileUpload';
import { BZSelectField } from '@/src/components/common/BZSelectField';
import { BZTextField } from '@/src/components/common/BZTextField';
import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// --- 1. IMPORTA EL NUEVO MODAL Y SU TIPO DE OPCIÓN ---
import { BZOptionsModal, ModalOption } from '@/src/components/common/BZOptionsModal';

// --- 2. AÑADE LAS INDUSTRIAS DEMO ---
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
  
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sitioWeb, setSitioWeb] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [industria, setIndustria] = useState<string | null>(null);
  const [locacion, setLocacion] = useState('');

  // --- 3. ESTADO PARA CONTROLAR LA VISIBILIDAD DEL MODAL ---
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const handleRegister = () => {
    Alert.alert('Registro de Negocio', 'WIP: El registro aún no está implementado.');
  };

  // --- 4. FUNCIÓN PARA MANEJAR LA SELECCIÓN ---
  const handleIndustrySelect = (option: ModalOption) => {
    setIndustria(option.value); // Guarda el 'value' (ej: 'tech')
    setIsPickerVisible(false); // Cierra el modal
  };

  // 5. Encuentra la etiqueta (label) de la industria seleccionada para mostrarla en el BZSelectField
  const selectedIndustryLabel = DEMO_INDUSTRIES.find(o => o.value === industria)?.label || null;

  return (
    <View style={styles.outerContainer}>
      
      <View style={styles.headerContainer}>
        {/* ... (Header sin cambios) ... */}
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
          {/* ... (Campos de TextField sin cambios) ... */}

          <BZSelectField
            label="Industria"
            value={selectedIndustryLabel} // <-- 6. Muestra la etiqueta seleccionada
            placeholder="Industria"
            onPress={() => setIsPickerVisible(true)} // <-- 7. Abre el modal
          />
          
          <BZTextField
            label="Locación"
            value={locacion}
            onChangeText={setLocacion}
            placeholder="Ciudad, país."
          />
        </View>

        <BZFileUpload
          title="Subir Foto/Logo"
          subtitle="Añade una imagen que te identifique"
        />

        <View style={styles.buttonContainer}>
          <BZButton
            title="Registrarse"
            variant="primary"
            onPress={handleRegister}
          />
        </View>
      </ScrollView>

      {/* --- 8. RENDERIZA EL MODAL (estará oculto hasta que isPickerVisible sea true) --- */}
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
  // ... (Estilos sin cambios) ...
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
});