import styled from '@emotion/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from '../../../../shared/ui';
import Carousel from '../../../../shared/ui/Carousel';
import {Modal} from '../../../../shared/ui/Modal';
import {PulseBlinkBackground} from '../PulseBlinkBackground';

const VacancyRate = () => {
  const [trigger, setTrigger] = useState(false);
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
          <View>
            <Carousel
              onPageChange={() => {
                setTrigger(!trigger);
              }}
              items={[
                <PulseBlinkBackground
                  trigger={trigger}
                  style={{backgroundColor: 'red'}}
                />,
                <PulseBlinkBackground
                  trigger={trigger}
                  style={{backgroundColor: 'orange'}}
                />,
                <PulseBlinkBackground
                  trigger={trigger}
                  style={{backgroundColor: 'blue'}}
                />,
              ]}
            />
          </View>
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
`;
export default VacancyRate;
