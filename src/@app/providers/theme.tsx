import {css} from '@emotion/native';
import {ThemeProvider} from '@emotion/react';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

export type CustomizeOptions = typeof theme;
export type TypographyVariants = keyof typeof typography;
export type ButtonVariants = keyof typeof buttons;
export type Colors = keyof typeof colors;
export type FontWeights = keyof typeof fontWeight;

const colors = {
  white: '#FFFFFF',
  tinyWhite: '#f7f9fc',
  black: '#010104',
  primary: '#4838D1',
  silver: '#919294',
};

const baseButton = css`
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: auto;
  height: 56px;
  border-radius: 8px;
`;
const buttons = {
  flat: css`
    ${baseButton}
    background: ${colors.primary};
  `,
  outline: css`
    ${baseButton}
    border: 1px solid ${colors.primary};
  `,
  ghost: css`
    ${baseButton}
  `,
};

const fontWeight = {
  light: css`
    font-family: 'Poppins-Light';
    font-weight: 300;
  `,
  regular: css`
    font-family: 'Poppins-Regular';
    font-weight: 400;
  `,
  simeBold: css`
    font-family: 'Poppins-SemiBold';
    font-weight: 600;
  `,
  bold: css`
    font-family: 'Poppins-Bold';
    font-weight: 700;
  `,
};

const typography = {
  h1: css`
    font-style: normal;
    font-size: 48px;
    line-height: 72px;
  `,
  h2: css`
    font-style: normal;
    font-size: 32px;
    line-height: 48px;
  `,
  h3: css`
    font-style: normal;
    font-size: 24px;
    line-height: 36px;
  `,
  h4: css`
    font-style: normal;
    font-size: 20px;
    line-height: 30px;
  `,
  h5: css`
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
  `,
  h6: css`
    font-style: normal;
    font-size: 14px;
    line-height: 21px;
  `,
  tiny: css`
    font-style: normal;
    font-size: 12px;
    line-height: 18px;
  `,
  small: css`
    font-style: normal;
    font-size: 10px;
    line-height: 15px;
  `,
};

const boxShadows = StyleSheet.create({
  card: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  modal: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  tabs: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2.22,

    elevation: 3,
  },
});

const theme = {
  colors,
  typography,
  fontWeight,
  buttons,
  boxShadows,
};

const CustomThemeProvider: FC = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
