import { Text } from 'react-native';
import React from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';

const sharedList = () => {
  return (
    <Container>
      <Header title='Shared List' showLogoutButton />
      <Text>sharedList</Text>
    </Container>
  );
};

export default sharedList;
