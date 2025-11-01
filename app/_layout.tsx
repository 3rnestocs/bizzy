// app/_layout.tsx

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `(tabs)` keeps a back button present.
  // (Aunque en tu caso, (tabs) es la ruta inicial)
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // Aquí cargarás tus fuentes personalizadas (Montserrat, etc.)
    // Por ahora, solo cargamos la de los iconos de la TabBar
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Muestra el Splash Screen mientras cargan las fuentes
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    // Ya no necesitamos el ThemeProvider
    <Stack>
      {/* Esta es la pantalla principal que carga tu barra de pestañas */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Aquí definirías otras pantallas MODALES GLOBALES si las necesitaras */}
      {/* Ej: <Stack.Screen name="settingsModal" options={{ presentation: 'modal' }} /> */}
    </Stack>
  );
}