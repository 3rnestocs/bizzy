// Archivo: src/types.tsx
export interface Profile {
  id: string;
  name: string;
  avatarUrl: string; 
}

export interface Comment {
  id: string;
  author: Profile;
  text: string;
}

export interface Post {
  id: string;
  author: Profile; 
  imageUrl: string; 
  caption: string;
  comments: Comment[];
  likes: number; 
  stars: number; 
  createdAt: string; 
}