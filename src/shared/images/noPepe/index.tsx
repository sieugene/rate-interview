import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';

type Props = Omit<ImageProps, 'source'>;
const NoPepe: FC<Props> = props => {
  return <Image {...props} source={require('./no-pepe.gif')} />;
};

export default NoPepe;
