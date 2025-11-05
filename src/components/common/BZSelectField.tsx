// src/components/common/BZSelectField.tsx

import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface BZSelectFieldProps {
  label: string;
  value: string | null; // El valor seleccionado
  placeholder: string;
  onPress: () => void;
  style?: ViewStyle;
}

export function BZSelectField({ label, value, placeholder, onPress, style }: BZSelectFieldProps) {
  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.input} onPress={onPress}>
        <Text style={value ? styles.valueText : styles.placeholderText}>
          {value ?? placeholder}
        </Text>
        {/* Icono de flechas (simulando un 'chevron') */}
        <FontAwesome name="sort" size={16} color={Colors.text.secondary} />
      </TouchableOpacity>
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
    marginLeft: 12,
  },
  input: {
    backgroundColor: Colors.ui.input, // #E8EDF5
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  valueText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  placeholderText: {
    fontSize: 16,
    color: Colors.text.secondary,
  }
});