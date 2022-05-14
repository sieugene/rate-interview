import React, {FC} from 'react';

import {Button, Text, View} from 'react-native';
import {ROUTES} from '../../../../shared/lib/routes';
import {NavigateProps} from '../../../../widgets';

const AuthorizeMain: FC<NavigateProps<ROUTES.AUTH_MAIN>> = ({navigation}) => {
  return (
    <View>
      <Text>
        View reviews about conducting interviews in the company and share your
        impressions about the company
      </Text>
      <Button
        title="sign in"
        onPress={() => {
          navigation.navigate(ROUTES.AUTH_LOGIN);
        }}
      />
      <Button
        title="sign up"
        onPress={() => {
          navigation.navigate(ROUTES.AUTH_REGISTER);
        }}
      />
    </View>
  );
};

export default AuthorizeMain;
