// Archivo: src/components/posts/BZPostCard.tsx
import Colors from '@/src/constants/Colors';
import { Post } from '@/src/types';
import React from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { BZPostActions } from './BZPostActions';
import { BZPostCaption } from './BZPostCaption';
import { BZPostCommentPreview } from './BZPostCommentPreview';
import { BZPostHeader } from './BZPostHeader';

interface BZPostCardProps {
  post: Post;
}

export function BZPostCard({ post }: BZPostCardProps) {
  return (
    <View style={styles.container}>
      <BZPostHeader author={post.author} createdAt={post.createdAt} />
      
      <Image source={{ uri: post.imageUrl }} style={styles.image} />
      
      <BZPostActions 
        commentCount={post.comments.length} 
        likes={post.likes} 
        stars={post.stars} 
      />
      
      <BZPostCaption authorName={post.author.name} caption={post.caption} />
      
      <BZPostCommentPreview 
        comments={post.comments} 
        totalCommentCount={post.comments.length} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.ui.card, 
    width: '100%',
    marginVertical: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  image: {
    width: '100%',
    aspectRatio: 1, 
    backgroundColor: Colors.ui.border,
  },
});