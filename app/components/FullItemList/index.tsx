import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import { Loading } from '../Loading';
import { FlatList } from 'react-native';
import ItemsContext from '../../contexts/ItemContext';
import { FullItemListItem } from '../FullItemListItem';

const FullItemList = () => {
  const { itemAll, loadingItems, items } = useContext(ItemsContext);

  useEffect(() => {
    itemAll();
  }, []);

  return (
    <Container>
      {loadingItems ? (
        <Loading />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FullItemListItem data={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default FullItemList;
