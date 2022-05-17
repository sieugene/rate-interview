/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {useRef} from 'react';
import {Animated, PanResponder, StyleProp, ViewStyle} from 'react-native';
import {extractAnimateValue} from '../../lib/panResponser/extractAnimateValue';
import {computeAllowPull} from './lib/computeAllowPull';
import {BoxTrigger, PullBoxEvent} from './model/types';

type Props = {
  onEnd: () => void;
  closeOnY?: number;
  children: React.ReactNode;
  canNegative?: boolean;
  style?: StyleProp<ViewStyle>;
  boxTrigger?: BoxTrigger;
};
const PullBoxVerticall = ({
  onEnd,
  closeOnY = 200,
  style,
  canNegative = false,
  children,
  boxTrigger,
}: Props) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: event =>
        computeAllowPull(event as PullBoxEvent, boxTrigger),

      onPanResponderMove: Animated.event(
        [
          null,
          {
            dy: pan.y,
          },
        ],
        {
          useNativeDriver: false,
          listener: () => {
            const currentY = extractAnimateValue(pan.y);
            if (!canNegative && currentY < 0) {
              pan.y.setValue(0);
            }
          },
        },
      ),
      onPanResponderRelease: () => {
        const currentY = extractAnimateValue(pan.y);
        const maxTriggerY = extractAnimateValue(new Animated.Value(closeOnY));

        if (currentY >= maxTriggerY) {
          onEnd();
        }

        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  return (
    <PullBoxVerticall.Root style={[style || {}]}>
      <Animated.View
        style={{
          flex: 1,
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        {children}
      </Animated.View>
    </PullBoxVerticall.Root>
  );
};

PullBoxVerticall.Root = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export default PullBoxVerticall;