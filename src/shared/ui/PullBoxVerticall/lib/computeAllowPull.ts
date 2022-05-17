import {PullBoxEvent, BoxTrigger} from '../model/types';
import {Dimensions} from 'react-native';

export const computeAllowPull = (
  event: PullBoxEvent,
  boxTrigger?: BoxTrigger,
) => {
  const currenyPositionY = Number(
    (event as any)?.touchHistory?.touchBank?.[0]?.startPageY,
  );
  if (!boxTrigger || !currenyPositionY) return true;
  const deviceHeight = Dimensions.get('window').height;
  const start = calcHeightOfPercent(boxTrigger?.yFrom, deviceHeight);
  const end = calcHeightOfPercent(boxTrigger?.yTo, deviceHeight);
  console.log('current-', currenyPositionY, 'start -', start, 'end-', end);
  if (currenyPositionY >= start && end >= currenyPositionY) {
    console.log('return true');
    return true;
  } else {
    console.log('return false');
    return false;
  }
};
const calcHeightOfPercent = (percent: number, deviceHeight: number) => {
  return (deviceHeight / 100) * percent;
};
