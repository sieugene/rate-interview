import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';

type Props = Omit<ImageProps, 'source'>;
const GlarePepe: FC<Props> = props => {
  return <Image {...props} source={require('./pepe_glare.gif')} />;
};

export default GlarePepe;
