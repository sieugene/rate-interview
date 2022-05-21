import {PulseBlinkBackground} from '../PulseBlinkBackground';
import React from 'react';
import {Button, Typography} from '../../../../shared/ui';
import {EmojiGIfCircle} from '../EmojiGIfCircle';
import styled from '@emotion/native';
import {StyleSheet} from 'react-native';

type Props = {
  trigger: boolean;
  children: React.ReactNode;
  activeColor: {
    active: string;
    prevColor: string;
  };
};
export const AnimatedRateItemForm = ({
  trigger,
  activeColor,
  children,
}: Props) => {
  return (
    <AnimatedRateItemForm.Root>
      <PulseBlinkBackground
        trigger={trigger}
        pulseColor={activeColor.active}
        style={{
          backgroundColor: activeColor.prevColor,
        }}>
        <AnimatedRateItemForm.Flex>
          <AnimatedRateItemForm.Label
            variant="h3"
            color="white"
            fontWeight="simeBold">
            Rate your experience
          </AnimatedRateItemForm.Label>
          <EmojiGIfCircle>{children}</EmojiGIfCircle>
          <Button
            style={{
              backgroundColor: 'black',
              width: '100%',
            }}
            typographyProps={{
              style: TypographyStyles.style,
              fontWeight: 'simeBold',
            }}>
            Send rating
          </Button>
        </AnimatedRateItemForm.Flex>
      </PulseBlinkBackground>
    </AnimatedRateItemForm.Root>
  );
};

const TypographyStyles = StyleSheet.create({
  style: {
    width: '100%',
    textAlign: 'center',
  },
});

AnimatedRateItemForm.Root = styled.View`
  flex: 1;
`;

AnimatedRateItemForm.Flex = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 70px 20px;
`;

AnimatedRateItemForm.Label = styled(Typography)`
  margin-bottom: 20px;
`;
