import { Stack } from 'expo-router';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { Loading } from './components/Loading';
import { AuthProvider } from './contexts/AuthContext';
import { StatusBar } from 'expo-status-bar';

const StackLayout = () => {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      <AuthProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='(tabs)' />
          <Stack.Screen name='(auth)' />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default StackLayout;
