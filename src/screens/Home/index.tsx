import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAppDispatch} from '../../@app/store/hooks';
import {logoutThunk} from '../../features/auth/ui/model/store';

export const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Text>home</Text>
      <Button
        title="logout"
        onPress={() => {
          dispatch(logoutThunk());
        }}
      />
    </View>
  );
};
