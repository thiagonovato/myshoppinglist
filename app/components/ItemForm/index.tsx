import React, { useContext, useState } from 'react';

import { Container } from './styles';
import { ButtonIcon } from '../ButtonIcon';
import { Input } from '../Input';
import ItemsContext from '../../contexts/ItemContext';
import theme from '../../theme';

export function ItemForm({ data }: any) {
  const { id } = data;
  const { addItem, loadingItems } = useContext(ItemsContext);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  async function handleProductAdd() {
    const obj = {
      id,
      description,
      quantity,
    };
    await addItem(obj);
    setDescription('');
    setQuantity(1);
  }

  return (
    <Container>
      <Input
        placeholder='Nome do produto'
        onChangeText={setDescription}
        value={description}
        style={{ backgroundColor: theme.COLORS.GRAY_100, minWidth: '50%' }}
      />

      <Input
        placeholder='1'
        keyboardType='numeric'
        style={{
          marginHorizontal: 8,
          backgroundColor: theme.COLORS.GRAY_100,
        }}
        onChangeText={(value) => setQuantity(Number(value))}
        value={quantity.toString()}
      />

      <ButtonIcon
        size='large'
        icon='add-shopping-cart'
        onPress={handleProductAdd}
        disabled={!description || !quantity}
        isLoading={loadingItems}
      />
    </Container>
  );
}
