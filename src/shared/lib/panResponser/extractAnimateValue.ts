import {Animated} from 'react-native';

export const extractAnimateValue = (position: Animated.Value) => {
  return Number((position as any)._value);
};
