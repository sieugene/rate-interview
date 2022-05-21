import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';

type Props = Omit<ImageProps, 'source'>;
const InspectPepe: FC<Props> = props => {
  return <Image {...props} source={require('./inspect-pepe.gif')} />;
};

export default InspectPepe;
