import { Tabs } from 'expo-router';

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tabs.Screen name='home' />
      <Tabs.Screen name='list' />
    </Tabs>
  );
};
