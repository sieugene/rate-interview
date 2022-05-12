import React from 'react';

import {useSelector, useDispatch} from 'react-redux';

import {Button, Text, View} from 'react-native';

import {decrement, increment} from '../model/store';
import {RootState} from '../../../@app';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Button title="Increment" onPress={() => dispatch(increment())} />

      <Text>{count}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
};
export default Counter;
