import { useContext, useState } from 'react';

import AuthContext from '../../contexts/AuthContext';
import { Button } from '../../components/Button';

import backgroundImg from '../../assets/background.png';
import { Container, NewAccount, Slogan, Title } from './styles';
import { Input } from '../../components/Input';
import { Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter();
  const { loadingRecoveryPassword, recoveryPassword } = useContext(AuthContext);

  const [email, setEmail] = useState<string>('');

  async function onPress() {
    if (!email) return Alert.alert('Error', 'Email or password empty');
    recoveryPassword(email);
  }

  return (
    <Container source={backgroundImg}>
      <Title>My Shopping List</Title>
      <Slogan>Recovery Password</Slogan>
      <Input placeholder='Email' onChangeText={setEmail} />
      <Button
        title='Create new account'
        onPress={onPress}
        isLoading={loadingRecoveryPassword}
        style={{ marginVertical: 20 }}
      />
      <TouchableOpacity>
        <NewAccount onPress={() => router.back()}>Back</NewAccount>
      </TouchableOpacity>
    </Container>
  );
}
