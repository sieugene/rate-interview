import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';

type Props = Omit<ImageProps, 'source'>;
const EvilPepe: FC<Props> = props => {
  return <Image {...props} source={require('./evil-pepe.gif')} />;
};

export default EvilPepe;
