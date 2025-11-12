// Archivo: src/components/posts/BZPostCommentPreview.tsx
import Colors from '@/src/constants/Colors';
import { Comment } from '@/src/types';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface BZPostCommentPreviewProps {
  comments: Comment[];
  totalCommentCount: number;
}

export function BZPostCommentPreview({ comments, totalCommentCount }: BZPostCommentPreviewProps) {
  const firstComment = comments[0];

  return (
    <View style={styles.container}>
      {totalCommentCount > 0 && (
        <Text style={styles.viewAllText}>
          Ver los {totalCommentCount} comentarios
        </Text>
      )}
      
      {firstComment && (
        <View style={styles.commentContainer}>
          <Image source={{ uri: firstComment.author.avatarUrl }} style={styles.commentAvatar} />
          <Text style={styles.commentText} numberOfLines={1}>
            <Text style={styles.commentAuthor}>{firstComment.author.name} </Text>
            {firstComment.text}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  viewAllText: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 8,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.ui.border,
    marginRight: 8,
  },
  commentText: {
    flex: 1,
    fontSize: 14,
    color: Colors.text.primary,
  },
  commentAuthor: {
    fontWeight: '600',
  },
});