import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
const Card = ({children, style}: Props) => {
  const theme = useTheme();
  return (
    <Card.Root style={[theme.boxShadows.card, style || {}]}>
      {children}
    </Card.Root>
  );
};
Card.Root = styled.View`
  background-color: white;
  padding: 16px;
  border-radius: 10px;
`;

export default Card;
