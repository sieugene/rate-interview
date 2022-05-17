import {GestureResponderEvent} from 'react-native';

export type BoxTrigger = {
  yFrom: number;
  yTo: number;
};
export type PullBoxEvent = GestureResponderEvent & {
  touchHistory: {
    touchBank: {
      startPageY: number;
    }[];
  };
};
