/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, Pressable} from 'react-native';
import {Typography} from '../../../shared/ui';

// предоставить рендер пропы или колбэки на изменение элемента для старта анимации
export const AnimationOverlay = () => {
  const [animated, setAnimated] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleAnimate = () => {
    Animated.timing(animatedValue, {
      toValue: animated ? 0 : 1,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();

    if (animated) {
      setAnimated(false);
      return;
    }
    setAnimated(true);
  };
  useEffect(() => {
    handleAnimate();
    return () => {
      handleAnimate();
    };
  }, []);
  return (
    <AnimationOverlay.Root>
      <Pressable onPress={handleAnimate}>
        <AnimationOverlay.Overlay
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
    </AnimationOverlay.Root>
  );
};

AnimationOverlay.Root = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

AnimationOverlay.Overlay = styled(Animated.View)`
  background: red;
  border-radius: 20px;
`;
