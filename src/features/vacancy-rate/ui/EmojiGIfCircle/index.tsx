import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};
export const EmojiGIfCircle = ({children}: Props) => {
  const theme = useTheme();
  return (
    <EmojiGIfCircle.Root style={[theme.boxShadows.image]}>
      {children}
    </EmojiGIfCircle.Root>
  );
};
EmojiGIfCircle.Root = styled.View`
  border-radius: 75px;
  overflow: hidden;
`;
