import styled from '@emotion/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {
  AngryPepe,
  EvilPepe,
  InspectPepe,
  NoPepe,
} from '../../../../shared/images';
import {Button} from '../../../../shared/ui';
import Carousel from '../../../../shared/ui/Carousel';
import {Modal} from '../../../../shared/ui/Modal';
import {AnimatedRateItemForm} from '../AnimatedRateItemForm';

const colorsOfSlide = {
  0: '#b06843',
  1: 'blue',
  2: '#5a8d40',
  3: '#fd4d15',
} as {[key: number]: string};

const VacancyRate = () => {
  const [activeColor, setActiveColor] = useState({
    active: colorsOfSlide[0],
    prevColor: colorsOfSlide[0],
  });
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
              onPageChange={page => {
                setTrigger(!trigger);
                setActiveColor({
                  active: colorsOfSlide[page],
                  prevColor: activeColor.active,
                });
              }}
              items={[
                <AnimatedRateItemForm
                  activeColor={activeColor}
                  trigger={trigger}>
                  <AngryPepe style={{width: 150, height: 150}} />
                </AnimatedRateItemForm>,
                <AnimatedRateItemForm
                  activeColor={activeColor}
                  trigger={trigger}>
                  <NoPepe style={{width: 150, height: 150}} />
                </AnimatedRateItemForm>,
                <AnimatedRateItemForm
                  activeColor={activeColor}
                  trigger={trigger}>
                  <InspectPepe style={{width: 150, height: 150, margin: 5}} />
                </AnimatedRateItemForm>,
                <AnimatedRateItemForm
                  activeColor={activeColor}
                  trigger={trigger}>
                  <EvilPepe style={{width: 150, height: 150}} />
                </AnimatedRateItemForm>,
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
  padding: 0;
`;

export default VacancyRate;
