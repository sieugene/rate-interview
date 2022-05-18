import styled from '@emotion/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Typography} from '../../../../shared/ui';
import Carousel from '../../../../shared/ui/Carousel';
import {Modal} from '../../../../shared/ui/Modal';
import {AnimationOverlay} from '../AnimationOverlay';

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
          <Carousel
            items={[
              <AnimationOverlay />,
              <View style={{backgroundColor: 'red', flex: 1}}>
                <Typography>content</Typography>
              </View>,
              <View style={{backgroundColor: 'orange', flex: 1}}>
                <Typography>content</Typography>
              </View>,
            ]}
          />
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
