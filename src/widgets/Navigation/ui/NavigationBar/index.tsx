import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {withRedirectAuth} from '../../../../features/auth/hocs/withRedirectAuth';
import {withRedirectPrivate} from '../../../../features/auth/hocs/withRedirectPrivate';

import {AuthorizeLogin, AuthorizeRegister} from '../../../../features/auth/ui';
import {AuthorizeMain} from '../../../../screens/Authorize';
import {Home} from '../../../../screens/Home';
import {ROUTES} from '../../../../shared/lib/routes';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const NavigationBar = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.AUTH}>
          {() => (
            <Tab.Navigator barStyle={{display: 'none'}}>
              <Tab.Screen
                name={ROUTES.AUTH_MAIN}
                component={withRedirectAuth(AuthorizeMain)}
                options={{
                  tabBarLabel: undefined,
                }}
              />
              <Tab.Screen
                name={ROUTES.AUTH_LOGIN}
                component={withRedirectAuth(AuthorizeLogin)}
                options={{
                  tabBarLabel: undefined,
                }}
              />
              <Tab.Screen
                name={ROUTES.AUTH_REGISTER}
                component={withRedirectAuth(AuthorizeRegister)}
                options={{
                  tabBarLabel: undefined,
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name={ROUTES.HOME}>
          {() => (
            <Tab.Navigator initialRouteName={ROUTES.HOME_INFO}>
              <Tab.Screen
                name={ROUTES.HOME_INFO}
                component={withRedirectPrivate(Home)}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default NavigationBar;
