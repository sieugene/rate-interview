import styled from '@emotion/native';
import React from 'react';
import {Button, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RootState} from '../../../../@app';
import {useAppDispatch, useAppSelector} from '../../../../@app/store/hooks';
import {Container} from '../../../../shared/ui';
import {loginThunk, updateLoginForm} from '../model/store';

const AuthorizeLogin = () => {
  const dispatch = useAppDispatch();
  const [email, password] = useAppSelector(state => [
    state.auth.loginForm.email,
    state.auth.loginForm.password,
  ]);
  const onChange = (
    value: string,
    type: keyof RootState['auth']['loginForm'],
  ) => {
    dispatch(updateLoginForm({value, type}));
  };
  const onSubmit = () => {
    dispatch(loginThunk());
  };
  return (
    <AuthorizeLogin.Root>
      <Text>Log in</Text>
      <TextInput
        placeholder="Email Address"
        onChangeText={value => onChange(value, 'email')}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        onChangeText={value => onChange(value, 'password')}
        value={password}
        secureTextEntry
      />
      <Button title="login" onPress={onSubmit} />
      <Text>Don’t have an account? Sign up</Text>
    </AuthorizeLogin.Root>
  );
};

AuthorizeLogin.Root = styled(Container)`
  flex: 1;
`;
export default AuthorizeLogin;
