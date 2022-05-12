/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import styled from '@emotion/native';

import React from 'react';
import {SafeAreaView, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {CustomThemeProvider, store} from './@app';
import {Counter} from './features/counter';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationBar} from './widgets/Navigation/ui';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Provider store={store}>
        <CustomThemeProvider>
          <NavigationBar />
          <SafeAreaView style={backgroundStyle}>
            <View>
              <StyledText>Test</StyledText>
              <Counter />
            </View>
          </SafeAreaView>
        </CustomThemeProvider>
      </Provider>
    </NavigationContainer>
  );
};

const StyledText = styled.Text`
  ${props => props.theme.typography.label};
`;

export default App;
