/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, ViewStyle} from 'react-native';

type Props = {
  trigger: boolean;
  style?: ViewStyle;
  pulseColor?: string;
  children?: React.ReactNode;
};
export const PulseBlinkBackground = ({
  trigger,
  pulseColor = '#ffffff4a',
  style,
  children,
}: Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleAnimate = () => {
    animatedValue.stopAnimation();
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 350,
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
      <PulseBlinkBackground.Overlay
        style={{
          backgroundColor: pulseColor,
          position: 'absolute',
          height: 20,
          width: 20,
          opacity: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
          transform: [
            {
              scaleX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 45],
              }),
            },
            {
              scaleY: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 45],
              }),
            },
          ],
        }}
      />
      {children}
    </PulseBlinkBackground.Root>
  );
};

PulseBlinkBackground.Root = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

PulseBlinkBackground.Overlay = styled(Animated.View)`
  border-radius: 20px;
`;
