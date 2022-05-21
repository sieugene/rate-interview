import styled from '@emotion/native';
import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Button, Typography} from '../../../../shared/ui';
import {RateFormProps} from '../../hooks/useRateForm';

type Props = {
  style?: StyleProp<ViewStyle>;
} & RateFormProps;
export const RateForm = ({style, rate}: Props) => {
  const form = rate;
  return (
    <RateForm.Root style={[style || {}]}>
      {/* <Modal visible={true} onClose={() => {}}>
        <View>
          <Typography>tyt?</Typography>
        </View>
      </Modal> */}
      <Typography variant="h3" color="white" fontWeight="simeBold">
        Rate your experience
      </Typography>
      <View>
        <Typography>Add comment</Typography>
        <Button
          style={{
            backgroundColor: 'black',
            width: '100%',
          }}
          typographyProps={{
            style: TypographyStyles.style,
            fontWeight: 'simeBold',
          }}>
          Send rating ({form.star})
        </Button>
      </View>
    </RateForm.Root>
  );
};

RateForm.Root = styled.View`
  flex: 1;
  justify-content: space-between;
  height: 100%;
`;

const TypographyStyles = StyleSheet.create({
  style: {
    width: '100%',
    textAlign: 'center',
  },
});
