import styled from '@emotion/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, PullBoxVerticall, Typography} from '../../../../shared/ui';
import {Modal} from '../../../../shared/ui/Modal';

export const CompanyDetails = () => {
  const [visible, setVisible] = useState(false);
  const onOpen = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <View>
      <Button onPress={onOpen}>open</Button>
      <Modal visible={visible} onClose={onClose} animationType="slide">
        <PullBoxVerticall onEnd={onClose} style={{marginTop: 100}}>
          <CompanyDetails.Content>
            <Typography>Hello World!</Typography>
            <Button onPress={onClose}>Hide Modal</Button>
          </CompanyDetails.Content>
        </PullBoxVerticall>
      </Modal>
    </View>
  );
};

CompanyDetails.Content = styled.View`
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
`;
