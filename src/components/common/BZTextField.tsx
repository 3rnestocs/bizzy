// Archivo: src/components/common/BZTextField.tsx
import Colors from '@/src/constants/Colors';
import React from 'react';
import { Platform, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

interface BZTextFieldProps extends TextInputProps {
  label: string;
  style?: ViewStyle;
}
export function BZTextField({ label, style, ...textInputProps }: BZTextFieldProps) {
  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.label}>{label}</Text>
      
      <TextInput
        // --- INICIO DEL CAMBIO ---
        style={[
          styles.input, 
          textInputProps.multiline && styles.multilineInput // Aplica estilo si es multilínea
        ]}
        placeholderTextColor={Colors.text.secondary}
        placeholder={textInputProps.placeholder ?? label}
        {...textInputProps} // Pasa multiline, numberOfLines, etc.
        // --- FIN DEL CAMBIO ---
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: Colors.text.primary,
    fontWeight: '500',
    marginBottom: 8,
    // --- 3. Margen a la izquierda para el label ---
    marginLeft: 12, 
  },
  input: {
    // --- 2. Color de fondo correcto ---
    backgroundColor: Colors.ui.input, 
    
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.text.primary,

    // --- 1. Sombra (multiplataforma) ---
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  // --- AÑADE ESTE NUEVO ESTILO ---
  multilineInput: {
    height: 120, // Altura fija para el campo de descripción
    textAlignVertical: 'top', // Para que el texto empiece arriba en Android
    paddingTop: 14, // Asegura el padding superior en multilínea
  },
});