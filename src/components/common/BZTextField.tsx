// src/components/common/BZTextField.tsx

import Colors from '@/src/constants/Colors';
import React from 'react';
import { Platform, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

interface BZTextFieldProps extends TextInputProps {
  label: string;
  style?: ViewStyle;
}

export function BZTextField({ label, style, ...textInputProps }: BZTextFieldProps) {
  return (
    // Este View es el contenedor general
    <View style={[styles.wrapper, style]}>
      
      {/* 3. El label ahora está fuera */}
      <Text style={styles.label}>{label}</Text>
      
      {/* El TextInput es la caja con sombra y fondo */}
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.text.secondary}
        placeholder={textInputProps.placeholder ?? label}
        {...textInputProps}
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
});