import { Text } from 'react-native';
import React from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';

const yourList = () => {
  return (
    <Container>
      <Header title='Your List' showLogoutButton />
      <Text>yourList</Text>
    </Container>
  );
};

export default yourList;
