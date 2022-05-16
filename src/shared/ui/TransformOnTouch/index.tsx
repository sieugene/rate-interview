import React, {FC, useRef} from 'react';
import {Animated, TouchableWithoutFeedback, ViewStyle} from 'react-native';

type Props = {
  style?: ViewStyle;
};
const TransformOnTouch: FC<Props> = ({style, children}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const onTouch = (type: 'out' | 'in') => {
    Animated.timing(scale, {
      toValue: type === 'in' ? 0.95 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <TouchableWithoutFeedback
      onPressIn={() => onTouch('in')}
      onPressOut={() => onTouch('out')}>
      <Animated.View
        style={[
          style || {},
          {
            transform: [{scale}, {perspective: 1000}],
          },
        ]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
export default TransformOnTouch;
