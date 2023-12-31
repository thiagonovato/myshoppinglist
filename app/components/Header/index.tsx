import React, { useContext } from 'react';
// import { ButtonIcon } from "../ButtonIcon";

import { Container, Title } from './styles';
import AuthContext from '../../contexts/AuthContext';
// import { ButtonBack } from "../ButtonBack";
import { useNavigation } from '@react-navigation/native';
import { ButtonBack } from '../ButtonBack';
import { ButtonIcon } from '../ButtonIcon';
import { View } from 'react-native';
// import ListsContext from "../../contexts/ListContext";

type Props = {
  title: string;
  showLogoutButton?: boolean;
  showBackButton?: boolean;
};

export function Header({
  title,
  showLogoutButton = false,
  showBackButton = false,
}: Props) {
  const navigation = useNavigation();
  const { signOut } = useContext(AuthContext);
  // const { selectedList } = useContext(ListsContext);

  function handleLogout() {
    signOut();
  }

  return (
    <Container showLogoutButton={showLogoutButton}>
      {showBackButton ? (
        <ButtonBack
          onPress={() => navigation.goBack()}
          icon='back'
          style={{ marginTop: 50 }}
        />
      ) : (
        <View></View>
      )}

      <Title>{title}</Title>

      {showLogoutButton && (
        <ButtonIcon
          icon='logout'
          color='alert'
          style={{ marginTop: 50 }}
          onPress={handleLogout}
        />
      )}
    </Container>
  );
}
