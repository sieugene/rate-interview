import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {ROUTES} from '../../../../shared/lib/routes';
import {NavigateProps, RootStackParamList} from '../../model/type';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationBar = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.home}
        component={HomeScreen}
        options={{title: 'Overview'}}
      />
      <Stack.Screen name={ROUTES.another} component={AnotherScreen} />
    </Stack.Navigator>
  );
};

const HomeScreen: React.FC<NavigateProps<ROUTES.home>> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="to another screen"
        onPress={() => {
          navigation.navigate(ROUTES.another);
        }}
      />
    </View>
  );
};

function AnotherScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Another Screen</Text>
    </View>
  );
}

export default NavigationBar;
