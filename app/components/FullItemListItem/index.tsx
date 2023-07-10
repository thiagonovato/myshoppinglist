import React, { useContext } from 'react';

import { ButtonIcon } from '../ButtonIcon';
import { Container, Info, Title, Options } from './styles';
import { Alert } from 'react-native';
import ItemsContext from '../../contexts/ItemContext';

export type ListProps = {
  id: string;
  name: string;
  url?: string;
};

type Props = {
  data: any;
};

export function FullItemListItem({ data }: Props) {
  const { handleDelete, handleDoneToggle } = useContext(ItemsContext);

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

  return (
    <Container>
      <Info>
        <Title done={data.done}>{data.description}</Title>
      </Info>

      <Options>
        <ButtonIcon
          icon={data.done ? 'undo' : 'check'}
          onPress={() => handleDoneToggle(data.id, data.done)}
          style={{
            marginRight: 5,
          }}
        />
        <ButtonIcon icon='delete' color='alert' onPress={handleConfirmDelete} />
      </Options>
    </Container>
  );
}
