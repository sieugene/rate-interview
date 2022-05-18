/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {useRef} from 'react';
import {
  Animated,
  GestureResponderHandlers,
  PanResponder,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {extractAnimateValue} from '../../lib/panResponser/extractAnimateValue';

type Props = {
  onEnd: () => void;
  closeOnY?: number;
  children: React.ReactNode;
  direction?: 'bottom' | 'bottom-and-top';
  style?: StyleProp<ViewStyle>;
  renderBoxTrigger: (panHandlers: GestureResponderHandlers) => JSX.Element;
};
const PullBoxVerticall = ({
  onEnd,
  closeOnY = 200,
  style,
  direction = 'bottom',
  renderBoxTrigger,
  children,
}: Props) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,

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
            const canNegative = direction !== 'bottom';
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
      {renderBoxTrigger(panResponder.panHandlers)}
      <Animated.View
        style={{
          flex: 1,
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}>
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
