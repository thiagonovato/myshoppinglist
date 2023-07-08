import { useContext, useState } from 'react';

import AuthContext from '../../contexts/AuthContext';
import { Button } from '../../components/Button';

import { Container, Slogan, Title } from './styles';
import backgroundImg from '../../assets/background.png';

export default function SignIn() {
  const { signIn, loadingSignIn, signUp, loadingSignUp, signOut } =
    useContext(AuthContext);

  async function onPress() {
    signUp('thiagonovato@gmail.com', '123456');
  }

  return (
    <Container source={backgroundImg}>
      <Title>My Shopping List</Title>
      <Slogan>Your best list</Slogan>
      <Button
        title='Enter with Google'
        onPress={onPress}
        isLoading={loadingSignIn || loadingSignUp}
      />
    </Container>
  );
}
