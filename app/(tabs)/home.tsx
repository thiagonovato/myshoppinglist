import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { Button } from '../components/Button';
import AuthContext from '../contexts/AuthContext';

const home = () => {
  const { signOut } = useContext(AuthContext);

  async function onPress() {
    signOut();
  }

  return (
    <View>
      <Text>home</Text>
      <Button title='Logout' onPress={onPress} />
    </View>
  );
};

export default home;
