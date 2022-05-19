/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Pressable, ViewStyle} from 'react-native';
import {Typography} from '../../../../shared/ui';

type Props = {
  trigger: boolean;
  style?: ViewStyle;
};
export const PulseBlinkBackground = ({trigger, style}: Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleAnimate = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    handleAnimate();
    return () => {
      handleAnimate();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return (
    <PulseBlinkBackground.Root style={[style || {}]}>
      <Pressable onPress={handleAnimate}>
        <PulseBlinkBackground.Overlay
          style={{
            position: 'absolute',
            height: 20,
            width: 20,
            transform: [
              {
                scaleX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 50],
                }),
              },
              {
                scaleY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 50],
                }),
              },
            ],
          }}
        />
        <Typography>content</Typography>
      </Pressable>
    </PulseBlinkBackground.Root>
  );
};

PulseBlinkBackground.Root = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: blue;
`;

PulseBlinkBackground.Overlay = styled(Animated.View)`
  border-radius: 20px;
  background-color: #ffffff59;
`;
