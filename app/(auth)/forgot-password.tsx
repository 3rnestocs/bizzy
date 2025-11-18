import { BZButton } from '@/src/components/common/BZButton';
import { BZTextField } from '@/src/components/common/BZTextField';
import Colors from '@/src/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [step, setStep] = useState<'email' | 'code' | 'reset' | 'done'>('email');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!infoMessage) return;
    const t = setTimeout(() => setInfoMessage(''), 2500);
    return () => clearTimeout(t);
  }, [infoMessage]);

  const onSubmitEmail = async () => {
    setError('');
    const emailTrim = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrim || !emailRegex.test(emailTrim)) {
      setError('Ingresa un correo válido');
      return;
    }
    setLoading(true);
    try {
      setInfoMessage('Se ha enviado un enlace a tu correo electrónico');
      setTimeout(() => setStep('code'), 2000);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitCode = async () => {
    setError('');
    const c = code.trim();
    if (c.length !== 8) {
      setError('El código debe tener 8 caracteres');
      return;
    }
    setStep('reset');
  };

  const onSubmitReset = async () => {
    setError('');
    if (!password || !confirm) {
      setError('Completa ambos campos');
      return;
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres');
      return;
    }
    if (password !== confirm) {
      setError('Las contraseñas no coinciden');
      return;
    }
    setLoading(true);
    try {
      setStep('done');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <FontAwesome name="chevron-left" size={18} color={Colors.text.primary} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Recupera tu Contraseña</Text>
        <Text style={styles.subtitle}>
          {step === 'email' && 'Introduce tu correo'}
          {step === 'code' && 'Introduce clave de recuperación'}
          {step === 'reset' && 'Introduce nueva contraseña'}
          {step === 'done' && '¡Has establecido tu nueva contraseña!'}
        </Text>

        {infoMessage ? <Text style={styles.info}>{infoMessage}</Text> : null}
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {step === 'email' && (
          <View style={styles.form}>
            <BZTextField label="Correo electrónico" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
            <BZButton title="Enviar" variant="secondary" loading={loading} onPress={onSubmitEmail} />
          </View>
        )}

        {step === 'code' && (
          <View style={styles.form}>
            <BZTextField label="Clave de recuperación" value={code} onChangeText={setCode} maxLength={8} autoCapitalize="none" />
            <BZButton title="Enviar" variant="secondary" onPress={onSubmitCode} />
          </View>
        )}

        {step === 'reset' && (
          <View style={styles.form}>
            <BZTextField label="Contraseña nueva" secureTextEntry value={password} onChangeText={setPassword} autoCapitalize="none" />
            <BZTextField label="Confirma tu nueva contraseña" secureTextEntry value={confirm} onChangeText={setConfirm} autoCapitalize="none" />
            <BZButton title="Enviar" variant="secondary" loading={loading} onPress={onSubmitReset} />
          </View>
        )}

        {step === 'done' && (
          <View style={styles.form}>
            <BZButton title="Iniciar sesión" variant="secondary" onPress={() => router.replace('/(auth)/login')} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.brand.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: Colors.ui.card,
    borderRadius: 16,
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  backBtn: {
    padding: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text.primary,
    marginTop: 4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.text.secondary,
    marginBottom: 10,
  },
  form: {
    marginTop: 4,
    gap: 8,
  },
  info: {
    color: '#1f7a36',
    backgroundColor: '#d1f3da',
    textAlign: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    marginVertical: 6,
    fontWeight: '600',
  },
  error: {
    color: '#8b0000',
    backgroundColor: '#ffd9d9',
    textAlign: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    marginVertical: 6,
    fontWeight: '600',
  },
});
