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
import {CustomThemeProvider} from './@app';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <CustomThemeProvider>
      <SafeAreaView style={backgroundStyle}>
        <View>
          <StyledText>Test</StyledText>
        </View>
      </SafeAreaView>
    </CustomThemeProvider>
  );
};

const StyledText = styled.Text`
  ${props => props.theme.typography.label};
`;

export default App;
