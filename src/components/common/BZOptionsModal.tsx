// src/components/common/BZOptionsModal.tsx

import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// ... (El tipo ModalOption sigue igual) ...
export type ModalOption = {
  label: string;
  value: string;
};

type BZOptionsModalProps = {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  options: ModalOption[];
  selectedValue: string | null;
  onSelect: (option: ModalOption) => void;
};

export function BZOptionsModal({
  isVisible,
  onClose,
  title,
  options,
  selectedValue,
  onSelect,
}: BZOptionsModalProps) {
  
  const renderItem = ({ item }: { item: ModalOption }) => {
    const isSelected = item.value === selectedValue;
    return (
      <TouchableOpacity
        style={styles.optionItem} // <-- Aplicamos padding aquí
        onPress={() => onSelect(item)}
      >
        <Text style={[styles.optionText, isSelected && styles.selectedOptionText]}>
          {item.label}
        </Text>
        {isSelected && (
          <FontAwesome
            name="check"
            size={16}
            color={Colors.brand.primary}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="fade" // 'Fade' se ve mejor para modales centrados
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        {/* --- 1. ESTE ES EL CONTENEDOR PRINCIPAL --- */}
        <View style={styles.modalBackdrop}>
          
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{title}</Text>
              
              <FlatList
                data={options}
                renderItem={renderItem}
                keyExtractor={(item) => item.value}
                style={styles.list}
              />
              
              <View style={styles.buttonContainer}>
                <BZButton 
                  title="Cerrar" 
                  variant="light" 
                  onPress={onClose}
                  style={styles.closeButton}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>

        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

import { BZButton } from './BZButton';

const { height } = Dimensions.get('window');
const modalHeight = height / 2; // 50% de la altura

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // --- 1. CENTRADO VERTICAL Y HORIZONTAL ---
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    paddingHorizontal: 16, // Margen de 16pts a los lados
  },
  modalContent: {
    backgroundColor: Colors.ui.background,
    borderRadius: 20,
    paddingVertical: 20, // Solo padding vertical en el contenedor
    height: modalHeight,
    width: '100%', // Ocupa el 100% del backdrop (que ya tiene padding)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text.primary,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20, // <-- 2. Padding para el título
  },
  list: {
    flex: 1,
  },
  optionItem: {
    paddingVertical: 16,
    // --- 2. PADDING HORIZONTAL PARA EL TEXTO ---
    paddingHorizontal: 20, 
    borderBottomWidth: 1,
    borderBottomColor: Colors.ui.input, // Línea divisoria
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  selectedOptionText: {
    fontWeight: 'bold',
    color: Colors.brand.primary,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingHorizontal: 20, // <-- 2. Padding para el botón
    marginTop: 10, // Espacio entre la lista y el botón
  },
  closeButton: {
    width: 'auto',
    paddingHorizontal: 40,
  },
});