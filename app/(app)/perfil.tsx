// Archivo: app/(app)/perfil.tsx
import { BZTextField } from '@/src/components/common/BZTextField';
import { BZPostCard } from '@/src/components/posts/BZPostCard';
import Colors from '@/src/constants/Colors';
import { MOCK_POSTS } from '@/src/mocks';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PerfilScreen() {
  const router = useRouter();
  // Datos de ejemplo (reemplazar luego con datos reales)
  const [activeTab, setActiveTab] = useState<'general' | 'posts' | 'reviews'>('general');
  const profile = {
    name: 'Mari Carmen',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    website: 'https://mi-sitio-web.com',
    description: 'Venezolana por el mundo',
  };

  // Estado para reseña del usuario (solo mock)
  const [myRating, setMyRating] = useState<number>(0);
  const [myReview, setMyReview] = useState('');

  // Mock de distribución y reviews
  const ratingAvg = 4.4;
  const ratingCount = 234;
  const distribution = [
    { stars: 5, pct: 40 },
    { stars: 4, pct: 30 },
    { stars: 3, pct: 15 },
    { stars: 2, pct: 10 },
    { stars: 1, pct: 5 },
  ];
  const mockReviews = [
    {
      id: 'r1',
      name: 'Ernesto Contreras',
      avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
      time: 'Hace 2 meses',
      rating: 5,
      text: 'Los pastelitos son brutales.',
      likes: 12,
      comments: 2,
    },
    {
      id: 'r2',
      name: 'Yaslin Vreugdenhil',
      avatar: 'https://randomuser.me/api/portraits/women/25.jpg',
      time: 'Hace 3 meses',
      rating: 4,
      text: 'Amo el ambiente y la comida! Volveré pronto',
      likes: 8,
      comments: 1,
    },
  ];

  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header del perfil */}
        <View style={styles.header}>
          <Image source={{ uri: profile.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{profile.name}</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabsRow}>
          <TabItem
            label="Descripción General"
            active={activeTab === 'general'}
            onPress={() => setActiveTab('general')}
          />
          <TabItem label="Posts" active={activeTab === 'posts'} onPress={() => setActiveTab('posts')} />
          <TabItem
            label="Reviews"
            active={activeTab === 'reviews'}
            onPress={() => setActiveTab('reviews')}
          />
        </View>
        <View style={styles.tabUnderline} />

        {/* Contenido por tab */}
        {activeTab === 'general' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre Mi</Text>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Sitio web</Text>
              <Text style={styles.fieldValueLink}>{profile.website}</Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.fieldLabel}>Descripción</Text>
              <Text style={styles.fieldValue}>{profile.description}</Text>
            </View>
          </View>
        )}

        {activeTab === 'posts' && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Posts</Text>
            {MOCK_POSTS.slice(0, 2).map((post) => (
              <BZPostCard key={post.id} post={post} />
            ))}
          </View>
        )}
        {activeTab === 'reviews' && (
          <View style={{ paddingTop: 8 }}>
            {/* Caja para dejar reseña */}
            <View style={styles.reviewBox}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <Image source={{ uri: profile.avatar }} style={styles.reviewAvatar} />
                <Text style={styles.reviewPrompt}>Deja tu reseña y puntuación:</Text>
              </View>

              <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <TouchableOpacity key={s} onPress={() => setMyRating(s)}>
                    <FontAwesome
                      name={myRating >= s ? 'star' : 'star-o'}
                      size={20}
                      color={myRating >= s ? Colors.brand.accent : Colors.text.secondary}
                      style={{ marginRight: 6 }}
                    />
                  </TouchableOpacity>
                ))}
              </View>

              <BZTextField
                label="Escribe tu reseña"
                placeholder="Escribe tu reseña"
                labelCentered
                value={myReview}
                onChangeText={setMyReview}
                multiline
                numberOfLines={4}
                style={{ marginTop: 8 }}
              />
              <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.sendBtn}>
                  <FontAwesome name="arrow-right" color={Colors.text.primary} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Puntuación promedio y distribución */}
            <View style={styles.scoreCard}>
              <Text style={styles.sectionTitle}>Puntuación</Text>
              <View style={styles.scoreRow}>
                <View style={{ width: 100 }}>
                  <Text style={styles.scoreValue}>{ratingAvg.toFixed(1)}</Text>
                  <View style={{ flexDirection: 'row', marginVertical: 4 }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FontAwesome
                        key={i}
                        name={i <= Math.round(ratingAvg) ? 'star' : 'star-o'}
                        size={16}
                        color={Colors.brand.accent}
                        style={{ marginRight: 2 }}
                      />
                    ))}
                  </View>
                  <Text style={styles.opinions}>{ratingCount} opiniones</Text>
                </View>
                <View style={{ flex: 1 }}>
                  {distribution.map((d) => (
                    <View key={d.stars} style={styles.distRow}>
                      <Text style={styles.distLabel}>{d.stars}</Text>
                      <View style={styles.distBarBg}>
                        <View style={[styles.distBarFill, { width: `${d.pct}%` }]} />
                      </View>
                      <Text style={styles.distPct}>{d.pct}%</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>

            {/* Lista de reseñas mock */}
            <View style={styles.reviewsList}>
              {mockReviews.map((r) => (
                <View key={r.id} style={styles.reviewItem}>
                  <View style={styles.reviewHeader}>
                    <Image source={{ uri: r.avatar }} style={styles.reviewAvatar} />
                    <View style={{ flex: 1 }}>
                      <Text style={styles.reviewName}>{r.name}</Text>
                      <Text style={styles.reviewTime}>{r.time}</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', marginVertical: 4 }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FontAwesome
                        key={i}
                        name={i <= r.rating ? 'star' : 'star-o'}
                        size={16}
                        color={Colors.brand.accent}
                        style={{ marginRight: 2 }}
                      />
                    ))}
                  </View>
                  <Text style={styles.reviewText}>{r.text}</Text>
                  <View style={styles.reviewActions}>
                    <View style={styles.actionGroup}>
                      <FontAwesome name="thumbs-o-up" size={16} color={Colors.text.secondary} />
                      <Text style={styles.actionText}>{r.likes}</Text>
                    </View>
                    <View style={styles.actionGroup}>
                      <FontAwesome name="comment-o" size={16} color={Colors.text.secondary} />
                      <Text style={styles.actionText}>{r.comments}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

function TabItem({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.tabItem, active && styles.tabItemActive]}>
      <Text style={[styles.tabText, active ? styles.tabTextActive : styles.tabTextInactive]}>{label}</Text>
    </TouchableOpacity>
  );
}

// (Puedes reusar los estilos del archivo busqueda.tsx)
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.ui.background,
  },
  content: {
    paddingBottom: 24,
  },
  header: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 12,
    backgroundColor: Colors.ui.card,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'flex-end',
    gap: 16,
  },
  tabItem: {
    paddingVertical: 12,
  },
  tabItemActive: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.brand.accent,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  tabTextActive: {
    color: Colors.tabs.active,
  },
  tabTextInactive: {
    color: Colors.tabs.inactive,
  },
  tabUnderline: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.ui.border,
    marginTop: 2,
    marginBottom: 8,
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text.primary,
    marginBottom: 12,
  },
  field: {
    marginBottom: 14,
  },
  fieldLabel: {
    fontSize: 12,
    color: Colors.text.secondary,
    marginBottom: 6,
    fontWeight: '600',
  },
  fieldValue: {
    fontSize: 14,
    color: Colors.text.primary,
  },
  fieldValueLink: {
    fontSize: 14,
    color: Colors.brand.accent,
    textDecorationLine: 'underline',
  },
  empty: {
    padding: 16,
  },

  // --- Reviews ---
  reviewBox: {
    backgroundColor: Colors.ui.card,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.ui.border,
  },
  reviewAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  reviewPrompt: {
    fontSize: 14,
    color: Colors.text.primary,
    fontWeight: '600',
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  sendBtn: {
    backgroundColor: Colors.ui.input,
    padding: 10,
    borderRadius: 12,
    width: 44,
    alignItems: 'center',
  },

  scoreCard: {
    backgroundColor: Colors.ui.card,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.ui.border,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 4,
  },
  scoreValue: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.text.primary,
  },
  opinions: {
    fontSize: 12,
    color: Colors.text.secondary,
  },
  distRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  distLabel: {
    width: 18,
    textAlign: 'right',
    marginRight: 6,
    color: Colors.text.secondary,
  },
  distBarBg: {
    flex: 1,
    height: 8,
    borderRadius: 6,
    backgroundColor: '#E6EDF5',
    marginRight: 6,
  },
  distBarFill: {
    height: 8,
    borderRadius: 6,
    backgroundColor: Colors.brand.accent,
  },
  distPct: {
    width: 32,
    textAlign: 'left',
    color: Colors.text.secondary,
  },

  reviewsList: {
    backgroundColor: Colors.ui.card,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.ui.border,
  },
  reviewItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.ui.border,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewName: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.text.primary,
  },
  reviewTime: {
    fontSize: 12,
    color: Colors.text.secondary,
  },
  reviewText: {
    marginTop: 6,
    fontSize: 14,
    color: Colors.text.primary,
  },
  reviewActions: {
    marginTop: 8,
    flexDirection: 'row',
    gap: 16,
  },
  actionGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    fontSize: 12,
    color: Colors.text.secondary,
  },
});