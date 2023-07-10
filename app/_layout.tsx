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
import { ListsProvider } from './contexts/ListContext';
import { ItemsProvider } from './contexts/ItemContext';

const StackLayout = () => {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' />
      <AuthProvider>
        <ListsProvider>
          <ItemsProvider>
            <Stack
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name='(tabs)' />
              <Stack.Screen name='(auth)' />
            </Stack>
          </ItemsProvider>
        </ListsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default StackLayout;
