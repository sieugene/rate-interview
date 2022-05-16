import styled from '@emotion/native';
import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {
  Colors,
  FontWeights,
  TypographyVariants,
} from '../../../@app/providers/theme';

export type TypographyProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  variant?: TypographyVariants;
  color?: Colors;
  fontWeight?: FontWeights;
};
const Typography = ({
  children,
  variant = 'h6',
  color = 'black',
  fontWeight = 'regular',
  style,
  ...props
}: TypographyProps) => {
  return (
    <Typography.Text
      variant={variant}
      color={color}
      style={[style || {}]}
      fontWeight={fontWeight}
      {...props}>
      {children}
    </Typography.Text>
  );
};

Typography.Text = styled.Text<
  Pick<TypographyProps, 'fontWeight' | 'color' | 'variant'>
>`
  ${({theme, variant}) => variant && theme.typography[variant]}
  ${({theme, color}) => color && `color: ${theme.colors[color]}`}
  ${({theme, fontWeight}) => fontWeight && theme.fontWeight[fontWeight]}
`;

export default Typography;
