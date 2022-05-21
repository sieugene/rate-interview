import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';

type Props = Omit<ImageProps, 'source'>;
const AngryPepe: FC<Props> = props => {
  return <Image {...props} source={require('./angry-pepe.gif')} />;
};

export default AngryPepe;
