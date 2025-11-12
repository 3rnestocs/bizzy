// Archivo: src/components/posts/BZPostHeader.tsx
import Colors from '@/src/constants/Colors';
import { Profile } from '@/src/types';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface BZPostHeaderProps {
  author: Profile;
  createdAt: string;
}

export function BZPostHeader({ author, createdAt }: BZPostHeaderProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: author.avatarUrl }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{author.name}</Text>
        <Text style={styles.createdAt}>{createdAt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.ui.border,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.primary,
  },
  createdAt: {
    fontSize: 12,
    color: Colors.text.secondary,
  },
});