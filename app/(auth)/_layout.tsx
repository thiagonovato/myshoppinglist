import { Stack } from 'expo-router';

export default () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='signin/index' />
      <Stack.Screen name='signup/index' />
      <Stack.Screen name='recoveryPassword/index' />
    </Stack>
  );
};
