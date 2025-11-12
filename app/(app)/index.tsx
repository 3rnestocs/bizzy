// Archivo: app/(app)/index.tsx
import { BZPostCard } from '@/src/components/posts/BZPostCard';
import Colors from '@/src/constants/Colors';
import { MOCK_POSTS } from '@/src/mocks';
import { Post } from '@/src/types';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function TabOneScreen() {
  
  // Función para renderizar cada item en el FlatList
  const renderPost = ({ item }: { item: Post }) => (
    <BZPostCard post={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_POSTS}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        // Añade un poco de padding inferior
        ListFooterComponent={<View style={{ height: 20 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ui.background,
  },
});