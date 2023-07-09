import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='yourList/index'
        options={{
          tabBarLabel: 'Your List',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='clipboard-list'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='sharedList/index'
        options={{
          tabBarLabel: 'Shared List',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='clipboard-list-outline'
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile/index'
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-settings-sharp' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
