import styled from '@emotion/native';
import React from 'react';
import {EmojiGIfCircle} from '../EmojiGIfCircle';
import {
  PulseBlinkBackground,
  PulseBlinkBackgroundProps,
} from '../PulseBlinkBackground';

type Props = {
  children: React.ReactNode;
  activeColor: {
    active: string;
    prevColor: string;
  };
} & Pick<PulseBlinkBackgroundProps, 'trigger'>;
export const AnimatedRateItem = ({trigger, activeColor, children}: Props) => {
  return (
    <AnimatedRateItem.Root>
      <PulseBlinkBackground
        trigger={trigger}
        pulseColor={activeColor.active}
        style={{
          backgroundColor: activeColor.prevColor,
        }}>
        <EmojiGIfCircle>{children}</EmojiGIfCircle>
      </PulseBlinkBackground>
    </AnimatedRateItem.Root>
  );
};

AnimatedRateItem.Root = styled.View`
  flex: 1;
`;
