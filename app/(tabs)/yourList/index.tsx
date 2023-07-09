import { Text } from 'react-native';
import React from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';
import FormList from '../../components/FormList';
import FullList from '../../components/FullList';

const yourList = () => {
  return (
    <Container>
      <Header title='Your List' showLogoutButton />
      <FormList />
      <FullList />
    </Container>
  );
};

export default yourList;
