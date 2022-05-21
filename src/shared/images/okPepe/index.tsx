import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';

type Props = Omit<ImageProps, 'source'>;
const OkPepe: FC<Props> = props => {
  return <Image {...props} source={require('./pepe-ok.gif')} />;
};

export default OkPepe;
