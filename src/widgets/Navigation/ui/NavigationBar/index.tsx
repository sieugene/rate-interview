import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  AuthorizeLogin,
  AuthorizeMain,
  AuthorizeRegister,
} from '../../../../screens/Authorize';
import {ROUTES} from '../../../../shared/lib/routes';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const NavigationBar = () => {
  const hide = false;
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.AUTH}>
          {() => (
            <Tab.Navigator barStyle={hide ? {display: 'none'} : {}}>
              <Tab.Screen
                name={ROUTES.AUTH_MAIN}
                component={AuthorizeMain}
                options={{
                  tabBarLabel: undefined,
                }}
              />
              <Tab.Screen
                name={ROUTES.AUTH_LOGIN}
                component={AuthorizeLogin}
                options={{
                  tabBarLabel: undefined,
                }}
              />
              <Tab.Screen
                name={ROUTES.AUTH_REGISTER}
                component={AuthorizeRegister}
                options={{
                  tabBarLabel: undefined,
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </>
  );
};

export default NavigationBar;
