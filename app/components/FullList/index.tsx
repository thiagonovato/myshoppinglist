import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import ListsContext from '../../contexts/ListContext';
import { Loading } from '../Loading';
import { FlatList } from 'react-native';
import { FullListItem } from '../FullListItem';

const FullList = () => {
  const { listAll, lists, loadingList } = useContext(ListsContext);

  useEffect(() => {
    listAll();
  }, []);

  return (
    <Container>
      {loadingList ? (
        <Loading />
      ) : (
        <FlatList
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FullListItem data={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default FullList;
