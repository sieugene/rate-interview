import styled from '@emotion/native';
import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
const Card = ({children, style}: Props) => {
  return <Card.Root style={[styles.shadow, style || {}]}>{children}</Card.Root>;
};
Card.Root = styled.View`
  background-color: white;
  padding: 8px;
  border-radius: 10px;
`;
// box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.06);
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default Card;
