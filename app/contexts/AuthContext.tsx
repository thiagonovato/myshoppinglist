import React, { createContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';

interface AuthContextData {
  signed: boolean;
  loadingStatus: boolean;
  user: object | null;
  signIn(email: string, password: string): Promise<void>;
  loadingSignIn: boolean;
  signUp(email: string, password: string): Promise<void>;
  loadingSignUp: boolean;
  signOut(): void;
  recoveryPassword(email: string): Promise<void>;
  loadingRecoveryPassword: boolean;
}

type ContainerProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = (props: ContainerProps) => {
  const router = useRouter();
  const [loadingSignIn, setLoadingSignIn] = useState<boolean>(false);
  const [loadingSignUp, setLoadingSignUp] = useState<boolean>(false);
  const [user, setUser] = useState<object | null>(null);
  const [loadingStatus, setLoadingStatus] = useState<boolean>(true);
  const [loadingRecoveryPassword, setLoadingRecoveryPassword] =
    useState<boolean>(false);

  const messageError = new Map()
    .set('auth/weak-password', 'Weak password')
    .set('auth/email-already-in-use', 'Email already in use');

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((userInfo) => {
      setLoadingStatus(false);
      setUser(userInfo);
      if (userInfo) {
        router.replace('yourList');
      } else {
        router.replace('signin');
      }
    });
    return () => subscribe();
  }, []);

  async function signIn(email: string, password: string) {
    setLoadingSignIn(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        router.replace('yourList');
      })
      .catch((error) => {
        Alert.alert('Erro', 'User or password incorrect.');
      })
      .finally(() => {
        setLoadingSignIn(false);
      });
  }

  async function signUp(email: string, password: string) {
    setLoadingSignUp(true);
    createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        if (messageError.has(error.code)) {
          Alert.alert('Erro', messageError.get(error.code));
        } else {
          Alert.alert('Erro', 'Try again');
        }
      })
      .finally(() => {
        setLoadingSignUp(false);
      });
  }

  async function signOut() {
    auth.signOut();
    setUser(null);
  }

  async function recoveryPassword(email: string) {
    setLoadingRecoveryPassword(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        router.replace('signin');
        Alert.alert('', 'Email sent.');
      })
      .catch((error) => {
        if (messageError.has(error.code)) {
          Alert.alert('Erro', messageError.get(error.code));
        } else {
          Alert.alert('Erro', 'Check your data and try again');
        }
      })
      .finally(() => {
        setLoadingRecoveryPassword(false);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        loadingSignIn,
        signUp,
        loadingSignUp,
        signOut,
        loadingStatus,
        recoveryPassword,
        loadingRecoveryPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
