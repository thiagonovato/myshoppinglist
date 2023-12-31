import React, { useContext } from 'react';

import { ButtonIcon } from '../ButtonIcon';
import { Container, Info, Title, Options } from './styles';
import { Alert, TouchableOpacity } from 'react-native';
import ListContext from '../../contexts/ListContext';
import { useRouter } from 'expo-router';

export type ListProps = {
  id: string;
  name: string;
  url?: string;
};

type Props = {
  data: ListProps;
};

export function FullListItem({ data }: Props) {
  const router = useRouter();

  const { handleDelete, setSelectedList } = useContext(ListContext);

  function handleConfirmDelete() {
    Alert.alert('Attention', `Confirm exclusion of ${data.name}?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'OK',
        onPress: () => {
          handleDelete(data.id);
        },
      },
    ]);
  }

  function handleScreen(data: {}) {
    setSelectedList(data);
    router.push({ pathname: 'list', params: data });
  }

  return (
    <Container>
      <Info>
        <TouchableOpacity onPress={() => handleScreen(data)}>
          <Title>{data.name}</Title>
        </TouchableOpacity>
      </Info>

      <Options>
        <ButtonIcon icon='delete' color='alert' onPress={handleConfirmDelete} />
      </Options>
    </Container>
  );
}
