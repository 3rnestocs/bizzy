// src/components/common/BZButton.tsx

import Colors from '@/src/constants/Colors';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

type BZButtonProps = {
  title: string;
  onPress?: () => void;
  // --- 1. AÑADIMOS LAS NUEVAS VARIANTES ---
  variant?: 'primary' | 'secondary' | 'accent' | 'light' | 'ghost';
  loading?: boolean;
  style?: ViewStyle;
};

export function BZButton({ 
  title, 
  onPress, 
  variant = 'primary', 
  loading = false, 
  style 
}: BZButtonProps) {

  const containerStyle: ViewStyle[] = [styles.baseContainer];
  const textStyle: TextStyle[] = [styles.baseText];
  
  // --- 2. DEFINIMOS EL COLOR DEL SPINNER ---
  let spinnerColor = Colors.text.light; // Default para primario/secundario

  switch (variant) {
    case 'primary':
      containerStyle.push(styles.primaryContainer);
      textStyle.push(styles.primaryText);
      break;
    case 'secondary':
      containerStyle.push(styles.secondaryContainer);
      textStyle.push(styles.secondaryText);
      break;
    // --- 3. AÑADIMOS LOS NUEVOS CASOS ---
    case 'accent':
      containerStyle.push(styles.accentContainer);
      textStyle.push(styles.accentText);
      break;
    case 'light':
      containerStyle.push(styles.lightContainer);
      textStyle.push(styles.lightText);
      spinnerColor = Colors.brand.primary; // Spinner oscuro para botón claro
      break;
    case 'ghost':
      containerStyle.push(styles.ghostContainer);
      textStyle.push(styles.ghostText);
      spinnerColor = Colors.brand.accent; // Spinner azul para botón transparente
      break;
  }

  if (loading) {
    containerStyle.push(styles.loading);
  }

  return (
    <TouchableOpacity 
      style={[containerStyle, style]} 
      onPress={onPress} 
      disabled={loading}
    >
      {loading ? (
        // --- 4. USAMOS EL COLOR DEL SPINNER ---
        <ActivityIndicator color={spinnerColor} />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // --- Estilos Base ---
  baseContainer: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    width: '100%', // Hacemos que ocupe el ancho por defecto
  },
  baseText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // --- Variantes ---
  primaryContainer: {
    backgroundColor: Colors.brand.primary,
  },
  primaryText: {
    color: Colors.text.light,
  },
  
  secondaryContainer: {
    backgroundColor: Colors.brand.secondary,
  },
  secondaryText: {
    color: Colors.text.light,
  },
  
  accentContainer: {
    backgroundColor: Colors.brand.accent,
  },
  accentText: {
    color: Colors.text.light,
  },
  
  lightContainer: {
    backgroundColor: Colors.ui.input, // El color '#E8EDF5'
  },
  lightText: {
    color: Colors.text.primary, // Texto oscuro
  },
  
ghostContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 4, 
    marginVertical: 2, // Un poco menos de margen
    width: 'auto', // Hacemos que se ajuste al texto
  },
  ghostText: {
    color: Colors.brand.accent, // Color azul medio
    fontWeight: '500', 
    fontSize: 14, // Hacemos la fuente un poco más pequeña
  },

  loading: {
    opacity: 0.8,
  }
});