// Archivo: app/_layout.tsx
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// --- 1. IMPORTAMOS EL CONTEXTO Y EL HOOK ---
import Colors from '@/src/constants/Colors';
import { SessionProvider, useSession } from '@/src/context/SessionContext';
import { ActivityIndicator, View } from 'react-native';

export {
  ErrorBoundary
} from 'expo-router';

// --- 2. ELIMINAMOS 'initialRouteName' ---
// export const unstable_settings = { ... }; // <-- ¡Eliminado!

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
    // (Aquí cargarás tus fuentes 'Montserrat', etc.)
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // --- 3. ENVOLVEMOS TODO CON EL PROVIDER ---
  return (
    <SessionProvider>
      <AppLayout />
    </SessionProvider>
  );
}

// --- 4. NUEVO COMPONENTE DE LAYOUT ---
function AppLayout() {
  const { isLoading, session } = useSession();

  // Muestra un spinner mientras carga la sesión
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.brand.primary }}>
        <ActivityIndicator size="large" color={Colors.text.light} />
      </View>
    );
  }

  // --- 5. LÓGICA DE STACK SIMPLIFICADA ---
  // El <Slot /> aquí renderizará (app) o (auth) basado
  // en la lógica de redirección de useProtectedRoute (en el context).
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" />
    </Stack>
  );
}