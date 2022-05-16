import React from 'react';
import {Button, View} from 'react-native';
import {useAppDispatch} from '../../@app/store/hooks';
import {logoutThunk} from '../../features/auth/ui/model/store';
import {Typography} from '../../shared/ui';

export const Home = () => {
  const dispatch = useAppDispatch();
  return (
    <View>
      <Typography>home</Typography>
      <Button
        title="logout"
        onPress={() => {
          dispatch(logoutThunk());
        }}
      />
    </View>
  );
};
