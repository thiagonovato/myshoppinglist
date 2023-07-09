import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styles';
import theme from '../../theme';
import { Loading } from '../Loading';

type Props = TouchableOpacityProps & {
  color?: 'success' | 'alert';
  size?: 'small' | 'large';
  icon?: React.ComponentProps<typeof MaterialIcons>['name'];
  isLoading?: boolean;
};

export function ButtonIcon({
  color = 'success',
  size = 'small',
  icon,
  isLoading = false,
  ...rest
}: Props) {
  return (
    <Container
      activeOpacity={0.7}
      color={color}
      size={size}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <MaterialIcons
          name={icon}
          size={size === 'small' ? 18 : 24}
          color={theme.COLORS.WHITE}
        />
      )}
    </Container>
  );
}
