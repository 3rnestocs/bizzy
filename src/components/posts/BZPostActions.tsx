// Archivo: src/components/posts/BZPostActions.tsx
import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BZPostActionsProps {
  commentCount: number;
  likes: number;
  stars: number;
}

const ActionIcon = ({ icon, count }: { icon: string; count: number }) => (
  <View style={styles.actionItem}>
    <FontAwesome name={icon as any} size={22} color={Colors.text.secondary} />
    <Text style={styles.actionText}>{count}</Text>
  </View>
);

export function BZPostActions({ commentCount, likes, stars }: BZPostActionsProps) {
  return (
    <View style={styles.container}>
      <ActionIcon icon="comment-o" count={commentCount} />
      <ActionIcon icon="bookmark-o" count={likes} />
      <ActionIcon icon="star-o" count={stars} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 14,
    color: Colors.text.secondary,
    fontWeight: '500',
  },
});