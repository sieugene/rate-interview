/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {CustomThemeProvider, store} from './@app';
import {NavigationBar} from './widgets/Navigation/ui';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <CustomThemeProvider>
          <NavigationBar />
        </CustomThemeProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
