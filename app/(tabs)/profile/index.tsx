import { Text } from 'react-native';
import React from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';

const settings = () => {
  return (
    <Container>
      <Header title='Settings' showLogoutButton />
      <Text>settings</Text>
    </Container>
  );
};

export default settings;
