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
  const { signIn, loadingSignIn, signUp, loadingSignUp, signOut } =
    useContext(AuthContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function onPress() {
    if (!email || !password)
      return Alert.alert('Error', 'Email or password empty');
    signUp(email, password);
  }

  return (
    <Container source={backgroundImg}>
      <Title>My Shopping List</Title>
      <Slogan>New Account</Slogan>
      <Input placeholder='Email' onChangeText={setEmail} />
      <Input
        placeholder='Password'
        style={{ marginTop: 20 }}
        onChangeText={setPassword}
        secureTextEntry={true}
        inputMode='email'
      />
      <Button
        title='Create new account'
        onPress={onPress}
        isLoading={loadingSignIn || loadingSignUp}
        style={{ marginVertical: 20 }}
      />
      <TouchableOpacity>
        <NewAccount onPress={() => router.back()}>Back</NewAccount>
      </TouchableOpacity>
    </Container>
  );
}
