import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
  border-radius: 5px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_800}
`;

export const Quantity = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_800}; 
`;

export const Options = styled.View`
    height: 100%;
    flex-direction: row;
    align-items: center;
`;
