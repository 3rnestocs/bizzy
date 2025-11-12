// Archivo: app/(auth)/_layout.tsx
import { Stack } from 'expo-router';

export default function AuthLayout() {
  // Simplemente define un Stack para las pantallas de autenticación
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}