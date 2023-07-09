import React, { useContext, useState } from 'react';
import { Container } from './styles';
import { Input } from '../Input';
import { ButtonIcon } from '../ButtonIcon';
import theme from '../../theme';
import ListsContext from '../../contexts/ListContext';

const FormList = () => {
  const { addItem, loadingAddItem } = useContext(ListsContext);
  const [name, setName] = useState<string>('');

  async function handleProductAdd() {
    if (!name) return;

    await addItem(name);
    setName('');
  }

  return (
    <Container>
      <Input
        placeholder='New List'
        onChangeText={setName}
        value={name}
        style={{ marginRight: 8, backgroundColor: theme.COLORS.GRAY_100 }}
      />

      <ButtonIcon
        size='large'
        icon='add-circle'
        onPress={handleProductAdd}
        disabled={!name}
        isLoading={loadingAddItem}
      />
    </Container>
  );
};

export default FormList;
