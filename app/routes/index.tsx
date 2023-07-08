import { Stack } from 'expo-router/stack';

import { useContext } from 'react';
import SignIn from '../screens/SignIn';
import AuthContext from '../contexts/AuthContext';
import { Text, View } from 'react-native';

const Teste = () => {
  return (
    <View>
      <Text>HAHAHA</Text>
    </View>
  );
};

export function Routes() {
  const { signed } = useContext(AuthContext);
  return <>{signed ? <Teste /> : <SignIn />}</>;
}
