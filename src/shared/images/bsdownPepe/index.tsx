import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';

type Props = Omit<ImageProps, 'source'>;
const BsdownPepe: FC<Props> = props => {
  return <Image {...props} source={require('./bsdown-pepe.gif')} />;
};

export default BsdownPepe;
