// Archivo: src/context/SessionContext.tsx
import { useRouter, useSegments } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { createContext, useContext, useEffect, useState } from 'react';

const TOKEN_KEY = 'bizzy_session_token';

interface SessionContextType {
  signIn: (data: any) => Promise<void>;
  signUp: (data: any) => Promise<void>;
  signOut: () => void;
  session: string | null;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

function useStorageState(key: string): [boolean, string | null, (value: string | null) => void] {
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState<string | null>(null);

  useEffect(() => {
    async function loadStorage() {
      try {
        const value = await SecureStore.getItemAsync(key);
        setState(value);
      } catch (e) {
        console.error('Failed to load session from storage', e);
      } finally {
        setIsLoading(false);
      }
    }
    loadStorage();
  }, [key]);

  const setValue = (value: string | null) => {
    setState(value);
    if (value) {
      SecureStore.setItemAsync(key, value);
    } else {
      SecureStore.deleteItemAsync(key);
    }
  };

  return [isLoading, state, setValue];
}

function useProtectedRoute(session: string | null) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (!session && !inAuthGroup) {
      router.replace('/(auth)'); 
    } else if (session && inAuthGroup) {
      router.replace('/(app)');
    }
  }, [session, segments, router]);
}

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, session, setSession] = useStorageState(TOKEN_KEY);

  useProtectedRoute(session);

  const contextValue = {
    signIn: async (data: any) => {
      console.log('Signing in with', data);
      setSession('dummy_token_user_123');
    },
    signUp: async (data: any) => {
      console.log('Signing up with', data);
      setSession('dummy_token_user_123');
    },
    signOut: () => {
      setSession(null);
    },
    session,
    isLoading,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
}