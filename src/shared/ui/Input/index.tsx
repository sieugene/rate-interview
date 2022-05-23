import styled from '@emotion/native';
import React from 'react';
import {StyleProp, TextInputProps, ViewStyle} from 'react-native';
import {InputsVariants} from '../../../@app/providers/theme';

type Props = {
  style?: StyleProp<ViewStyle>;
  variant?: InputsVariants;
} & TextInputProps;
const Input = ({style, variant = 'base', ...props}: Props) => {
  return <Input.BaseInput style={[style || {}]} variant={variant} {...props} />;
};

Input.BaseInput = styled.TextInput<Pick<Props, 'variant'>>`
  ${({theme, variant}) => variant && theme.inputs[variant]}
  flex-direction: row;
`;

export default Input;
