// Archivo: src/components/posts/BZPostCaption.tsx
import Colors from '@/src/constants/Colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BZPostCaptionProps {
  authorName: string;
  caption: string;
}

export function BZPostCaption({ authorName, caption }: BZPostCaptionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.captionText}>
        <Text style={styles.authorName}>{authorName} </Text>
        {caption}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  captionText: {
    fontSize: 14,
    color: Colors.text.primary,
    lineHeight: 20,
  },
  authorName: {
    fontWeight: '600',
  },
});