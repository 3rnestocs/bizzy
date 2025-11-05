// src/components/common/BZButton.tsx

import Colors from '@/src/constants/Colors'; // Importamos nuestros colores
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

type BZButtonProps = {
  /** El texto que se mostrará en el botón */
  title: string;
  
  /** La función a ejecutar cuando se presiona */
  onPress?: () => void;
  
  /** Define el estilo del botón */
  variant?: 'primary' | 'secondary' | 'ghost';
  
  /** Si es true, muestra un spinner y deshabilita el botón */
  loading?: boolean;
  
  /** Estilos personalizados para el contenedor */
  style?: ViewStyle;
};

export function BZButton({ 
  title, 
  onPress, 
  variant = 'primary', 
  loading = false, 
  style 
}: BZButtonProps) {

  // Elegir el estilo de fondo y texto basado en la variante
  const containerStyle: ViewStyle[] = [styles.baseContainer];
  const textStyle: TextStyle[] = [styles.baseText];

  switch (variant) {
    case 'primary':
      containerStyle.push(styles.primaryContainer);
      textStyle.push(styles.primaryText);
      break;
    case 'secondary':
      containerStyle.push(styles.secondaryContainer);
      textStyle.push(styles.secondaryText);
      break;
    // (Puedes añadir más variantes como 'ghost' o 'outline' aquí)
  }

  // Estilo cuando está cargando
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
        <ActivityIndicator color={Colors.text.light} />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12, // Bordes redondeados de tus diseños
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  baseText: {
    fontSize: 16,
    fontWeight: 'bold',
    // Aquí deberías añadir tu fuente personalizada (ej. 'Montserrat-Bold')
  },
  
  // --- Estilos de Variante ---
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
    color: Colors.text.light, // El naranja también usa texto claro
  },

  loading: {
    opacity: 0.8,
  }
});