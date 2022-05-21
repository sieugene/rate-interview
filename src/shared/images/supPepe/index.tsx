import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';

type Props = Omit<ImageProps, 'source'>;
const SupPepe: FC<Props> = props => {
  return <Image {...props} source={require('./sup-pepe.gif')} />;
};

export default SupPepe;
