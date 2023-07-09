import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

type ContainerProps = {
  showLogoutButton: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 110px;
  background-color: ${({ theme }) => theme.COLORS.BRAND_MID};

  flex-direction: ${({ showLogoutButton }) => showLogoutButton ? 'row' : 'column'};
  align-items: center;
  justify-content: ${({ showLogoutButton }) => showLogoutButton ? 'space-around' : 'center'};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin-top: ${getStatusBarHeight() + 30}px;
`;
