// app/(tabs)/index.tsx

import { StyleSheet, Text, View } from 'react-native';
// 1. Importa tu nuevo componente
import { BZButton } from '@/src/components/common/BZButton';
import Colors from '@/src/constants/Colors';

export default function TabOneScreen() {
  
  const handlePress = () => {
    alert('¡Botón presionado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Probando BZButton</Text>
      <View style={styles.separator} />

      {/* 2. Usa el componente */}
      <BZButton 
        title="Guardar (Primario)" 
        variant="primary" 
        onPress={handlePress} 
      />
      
      <BZButton 
        title="Cancelar (Secundario)" 
        variant="secondary" 
        onPress={handlePress} 
      />

      <BZButton 
        title="Cargando..." 
        variant="primary" 
        loading={true} 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, // Añadido padding
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: Colors.ui.border,
  },
});