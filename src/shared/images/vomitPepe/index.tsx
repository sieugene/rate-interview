import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';

type Props = Omit<ImageProps, 'source'>;
const VomitPepe: FC<Props> = props => {
  return <Image {...props} source={require('./vomit-pepe.png')} />;
};

export default VomitPepe;
