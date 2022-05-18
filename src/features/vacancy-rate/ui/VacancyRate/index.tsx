import styled from '@emotion/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Typography} from '../../../../shared/ui';
import Carousel from '../../../../shared/ui/Carousel';
import {Modal} from '../../../../shared/ui/Modal';

const VacancyRate = () => {
  const [visible, setVisible] = useState(false);
  const onOpen = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <View>
      <Modal visible={visible} onClose={onClose}>
        <VacancyRate.Root>
          <Typography>text!</Typography>
          <Carousel />
        </VacancyRate.Root>
      </Modal>
      <Button
        onPress={onOpen}
        style={{width: 78, height: 32}}
        typographyProps={{
          variant: 'small',
        }}>
        Rate
      </Button>
    </View>
  );
};
VacancyRate.Root = styled(Modal.Body)`
  border-radius: 0;
  padding: 10px;
`;
export default VacancyRate;
