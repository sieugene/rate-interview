import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useAppSelector} from '../../../../@app/store/hooks';
import {withRedirectAuth} from '../../../../features/auth/hocs/withRedirectAuth';
import {withRedirectPrivate} from '../../../../features/auth/hocs/withRedirectPrivate';
import {AuthorizeLogin, AuthorizeRegister} from '../../../../features/auth/ui';
import {AuthorizeMain} from '../../../../screens/Authorize';
import {CompaniesScreen} from '../../../../screens/Companies';
import {ProfileScreen} from '../../../../screens/Profile';
import {SearchScreen} from '../../../../screens/Search';
import {ROUTES} from '../../../../shared/lib/routes';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const NavigationBar = () => {
  const isLogin = useAppSelector(state => !!state.auth.user);
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLogin && (
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
        )}
        <Stack.Screen name={ROUTES.HOME}>
          {() => (
            <Tab.Navigator initialRouteName={ROUTES.COMPANIES}>
              <Tab.Screen
                name={ROUTES.COMPANIES}
                component={withRedirectPrivate(CompaniesScreen)}
              />
              <Tab.Screen
                name={ROUTES.SEARCH}
                component={withRedirectPrivate(SearchScreen)}
              />
              <Tab.Screen
                name={ROUTES.PROFILE}
                component={withRedirectPrivate(ProfileScreen)}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default NavigationBar;
