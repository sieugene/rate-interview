import styled from '@emotion/native';
import React from 'react';
import {Button, View} from 'react-native';
import {ComunityIllustration} from '../../../../shared/images';
import {ROUTES} from '../../../../shared/lib/routes';
import {Container} from '../../../../shared/ui';
import {NavigateProps} from '../../../../widgets';

const AuthorizeMain = ({navigation}: NavigateProps<ROUTES.AUTH_MAIN>) => {
  return (
    <AuthorizeMain.Root>
      <ComunityIllustration />
      <View>
        <AuthorizeMain.Label>
          Find out reviews about conducting interviews in companies.
        </AuthorizeMain.Label>
        <AuthorizeMain.Text>
          View reviews and ratings of companies, share your impressions about
          the company.
        </AuthorizeMain.Text>
      </View>
      <AuthorizeMain.BtnsGroup>
        <View>
          <Button
            title="sign in"
            onPress={() => {
              navigation.navigate(ROUTES.AUTH_LOGIN);
            }}
          />
        </View>
        <View>
          <Button
            title="sign up"
            onPress={() => {
              navigation.navigate(ROUTES.AUTH_REGISTER);
            }}
          />
        </View>
      </AuthorizeMain.BtnsGroup>
    </AuthorizeMain.Root>
  );
};
AuthorizeMain.Root = styled(Container)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
`;

AuthorizeMain.Label = styled.Text`
  font-weight: 700;
  font-size: 24px;
  color: black;
  text-align: left;
`;

AuthorizeMain.Text = styled.Text`
  font-size: 16px;
  text-align: left;
`;

AuthorizeMain.BtnsGroup = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-top: 40px;
`;

export default AuthorizeMain;
