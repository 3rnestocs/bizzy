import { BZButton } from '@/src/components/common/BZButton';
import { BZTextField } from '@/src/components/common/BZTextField';
import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UpdatePasswordScreen() {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validate = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('Todos los campos son obligatorios.');
      return false;
    }
    if (newPassword.length < 6) {
      setError('La nueva contraseña debe tener al menos 6 caracteres.');
      return false;
    }
    if (newPassword !== confirmPassword) {
      setError('Las nuevas contraseñas no coinciden.');
      return false;
    }
    setError('');
    return true;
  };

  const handleUpdate = async () => {
    if (!validate()) return;
    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 800));
      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <View style={styles.screen}>        
        <View style={styles.card}>          
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
              <FontAwesome name="chevron-left" size={20} color={Colors.text.primary} />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Cambio de Contraseña</Text>
          <Text style={styles.subtitleCenter}>¡Has actualizado tu nueva contraseña correctamente!{"\n"}{"\n"}Vuelve a iniciar sesión para continuar</Text>
          <BZButton title="Iniciar sesión" variant="secondary" onPress={() => router.replace('/(auth)')} style={{ marginTop: 16 }} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <KeyboardAvoidingView behavior={Platform.select({ ios: 'padding', android: undefined })} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <View style={styles.card}>
            <View style={styles.headerRow}>
              <TouchableOpacity onPress={() => router.replace('/(app)/ajustes')} style={styles.backBtn}>
                <FontAwesome name="chevron-left" size={20} color={Colors.text.primary} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Cambio de Contraseña</Text>            

            <BZTextField
              label="Introduce tu contraseña actual"
              labelCentered
              value={currentPassword}
              onChangeText={setCurrentPassword}
              secureTextEntry
              autoCapitalize="none"
              style={{ marginTop: 8 }}
            />
            <BZTextField
              label="Introduce tu nueva contraseña"
              labelCentered
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              autoCapitalize="none"
              style={{ marginTop: 12 }}
            />
            <BZTextField
              label="Confirma tu nueva contraseña"
              labelCentered
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              autoCapitalize="none"
              style={{ marginTop: 12 }}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <BZButton
              title="Actualizar Contraseña"
              variant="secondary"
              onPress={handleUpdate}
              loading={loading}
              style={{ marginTop: 16 }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.brand.primary,
    justifyContent: 'center',
    padding: 16,
  },
  content: {
    padding: 16,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: Colors.ui.card,
    borderRadius: 18,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  backBtn: {
    padding: 6,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text.primary,
    marginTop: 6,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: Colors.text.secondary,
  },
  subtitleCenter: {
    marginTop: 8,
    fontSize: 14,
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});