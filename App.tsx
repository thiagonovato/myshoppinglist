import './firebaseConfig';

import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import theme from './app/theme';
import { Loading } from './app/components/Loading';
import { StatusBar } from 'react-native';
import { AuthProvider } from './app/contexts/AuthContext';
import { Routes } from './app/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
