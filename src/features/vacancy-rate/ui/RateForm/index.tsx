import styled from '@emotion/native';
import React, {useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Button, Input, Typography} from '../../../../shared/ui';
import {Modal} from '../../../../shared/ui/Modal';
import {RateFormProps} from '../../hooks/useRateForm';

type Props = {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
} & RateFormProps;
export const RateForm = ({style, rate, setRate, onSubmit}: Props) => {
  const [visible, setVisible] = useState(false);
  const form = rate;

  return (
    <RateForm.Root style={[style || {}]}>
      <Modal
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}>
        <RateForm.CommentForm>
          <Typography fontWeight="simeBold" style={{marginBottom: 10}}>
            Type a comment
          </Typography>
          <Input
            style={{minWidth: 100, maxHeight: 200}}
            value={form.description}
            placeholder="Write you review here"
            multiline
            onChangeText={value => {
              setRate(prev => ({...prev, description: value}));
            }}
          />
        </RateForm.CommentForm>
      </Modal>
      <Typography variant="h3" color="white" fontWeight="simeBold">
        Rate your experience
      </Typography>
      <View>
        <RateForm.AddComment onPress={() => setVisible(true)}>
          <Icon
            name="comment"
            size={24}
            color="white"
            style={{marginRight: 8}}
          />
          <Typography color="white">Add comment</Typography>
        </RateForm.AddComment>

        <Button
          style={{
            backgroundColor: 'black',
            width: '100%',
          }}
          onPress={onSubmit}
          typographyProps={{
            style: TypographyStyles.style,
            fontWeight: 'simeBold',
          }}>
          Send rating ({form.star + 1})
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

RateForm.AddComment = styled.Pressable`
  flex-direction: row;
  margin-bottom: 10px;
  align-self: flex-start;
`;

RateForm.CommentForm = styled(Modal.Body)`
  width: 300px;
  height: 250px;
  flex: none;
  border-radius: 20px;
  padding: 10px;
  align-items: center;
`;

const TypographyStyles = StyleSheet.create({
  style: {
    width: '100%',
    textAlign: 'center',
  },
});
