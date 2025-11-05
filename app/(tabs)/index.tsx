// app/(tabs)/index.tsx

import { BZButton } from '@/src/components/common/BZButton';
import Colors from '@/src/constants/Colors';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TabOneScreen() {
  
  const handlePress = (variant: string) => {
    alert(`Botón '${variant}' presionado!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galería de BZButton</Text>
      <View style={styles.separator} />

      <BZButton 
        title="Primario" 
        variant="primary" 
        onPress={() => handlePress('primary')} 
      />
      
      <BZButton 
        title="Secundario (Naranja)" 
        variant="secondary" 
        onPress={() => handlePress('secondary')} 
      />
      
      <BZButton 
        title="Acento (Azul Medio)" 
        variant="accent" 
        onPress={() => handlePress('accent')} 
      />
      
      <BZButton 
        title="Claro (Subir)" 
        variant="light" 
        onPress={() => handlePress('light')} 
      />
      
      <BZButton 
        title="Fantasma (Link)" 
        variant="ghost" 
        onPress={() => handlePress('ghost')} 
      />
      
      <BZButton 
        title="Cargando..." 
        variant="primary" 
        loading={true} 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.ui.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
    backgroundColor: Colors.ui.border,
  },
});