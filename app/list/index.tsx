import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Header } from '../components/Header';
import { useGlobalSearchParams } from 'expo-router';
import ItemsContext from '../contexts/ItemContext';
import { Container } from './styles';
import { ItemForm } from '../components/ItemForm';
import FullItemList from '../components/FullItemList';

const List = () => {
  const data: any = useGlobalSearchParams();

  return (
    <Container>
      <Header title={data.name || 'List'} showBackButton showLogoutButton />
      <ItemForm data={data} />
      <FullItemList />
    </Container>
  );
};

export default List;
