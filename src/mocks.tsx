// Archivo: src/mocks.tsx
import { Post, Profile } from './types';

const P_ENTRE_AMIGOS: Profile = {
  id: 'p1',
  name: 'Entre Amigos Café',
  avatarUrl: 'https://images.unsplash.com/photo-1572490122763-91bde65172a3?q=80&w=100&auto=format&fit=crop',
};

const P_TRAVELING_VENEZUELA: Profile = {
  id: 'p2',
  name: 'Traveling Venezuela',
  avatarUrl: 'https://images.unsplash.com/photo-1601630164215-ce11045a150b?q=80&w=100&auto=format&fit=crop',
};

const P_YASLIN: Profile = {
  id: 'u1',
  name: 'Yaslin Vreugdenhil',
  avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
};

export const MOCK_POSTS: Post[] = [
  {
    id: 'post1',
    author: P_ENTRE_AMIGOS,
    imageUrl: 'https://images.unsplash.com/photo-1511920183234-fd8963b3209d?q=80&w=600&auto=format&fit=crop',
    caption: '¡Nada como disfrutar de una taza de café caliente y amigos! ¿Qué esperas para venir?',
    likes: 2,
    stars: 4,
    createdAt: '1d',
    comments: [
      {
        id: 'c1',
        author: P_YASLIN,
        text: 'Amo el ambiente de este café. ¡Super recomendado!',
      },
    ],
  },
  {
    id: 'post2',
    author: P_TRAVELING_VENEZUELA,
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
    caption: '¿Los roques desde Barquisimeto? ¡Claro que sí! Vente este 15 de Octubre a disfrutar de 3 días y 2 noches de lo mejor de este lugar. Escríbenos al +58 555 5555.',
    likes: 5,
    stars: 10,
    createdAt: '2d',
    comments: [],
  },
];