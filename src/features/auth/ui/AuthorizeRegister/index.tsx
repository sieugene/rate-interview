import styled from '@emotion/native';
import React from 'react';
import {Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RootState} from '../../../../@app';
import {useAppDispatch, useAppSelector} from '../../../../@app/store/hooks';
import {Container, Typography} from '../../../../shared/ui';
import {registerThunk, updateRegisterForm} from '../model/store';

const AuthorizeRegister = () => {
  const dispatch = useAppDispatch();
  const [email, password, repassword] = useAppSelector(state => [
    state.auth.registerForm.email,
    state.auth.registerForm.password,
    state.auth.registerForm.repassword,
  ]);
  const onChange = (
    value: string,
    type: keyof RootState['auth']['registerForm'],
  ) => {
    dispatch(updateRegisterForm({value, type}));
  };
  const onSubmit = () => {
    dispatch(registerThunk());
  };
  return (
    <AuthorizeRegister.Root>
      <Typography>Sign Up</Typography>
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={value => onChange(value, 'email')}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={value => onChange(value, 'password')}
      />
      <TextInput
        placeholder="Repeat password"
        value={repassword}
        onChangeText={value => onChange(value, 'repassword')}
      />
      <Button title="sign up" onPress={onSubmit} />
      <Typography>Do you have an account? Sign in</Typography>
    </AuthorizeRegister.Root>
  );
};

AuthorizeRegister.Root = styled(Container)`
  flex: 1;
`;
export default AuthorizeRegister;
