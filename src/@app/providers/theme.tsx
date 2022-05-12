import {ThemeProvider} from '@emotion/react';
import React, {FC} from 'react';

export type CustomizeOptions = typeof theme;
export type TypographyVariants = keyof typeof typography;

const options = {
  colors: {
    white: '#FFFFFF',
  },
};

const typography = {
  label: `
  fontStyle: normal;
  fontWeight: normal;
  fontSize: 16px;
  lineHeight: 20px;
`,
};

const theme = {
  ...options,
  typography,
};

const CustomThemeProvider: FC = ({children}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
