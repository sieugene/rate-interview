import styled from '@emotion/native';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Button, Typography} from '../../../../shared/ui';
import Carousel from '../../../../shared/ui/Carousel';
import {Modal} from '../../../../shared/ui/Modal';
import {PulseBlinkBackground} from '../PulseBlinkBackground';

const colorsOfSlide = {
  0: 'red',
  1: 'orange',
  2: 'blue',
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
                <PulseBlinkBackground
                  trigger={trigger}
                  pulseColor={activeColor.active}
                  style={{
                    backgroundColor: activeColor.prevColor,
                  }}>
                  <VacancyRate.Choise>
                    <Text style={{fontSize: 66, color: 'black'}}>😀</Text>
                  </VacancyRate.Choise>
                </PulseBlinkBackground>,
                <PulseBlinkBackground
                  trigger={trigger}
                  pulseColor={activeColor.active}
                  style={{
                    backgroundColor: activeColor.prevColor,
                  }}>
                  <Typography>🤣</Typography>
                </PulseBlinkBackground>,
                <PulseBlinkBackground
                  trigger={trigger}
                  pulseColor={activeColor.active}
                  style={{
                    backgroundColor: activeColor.prevColor,
                  }}>
                  <Typography>🤣</Typography>
                </PulseBlinkBackground>,
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

VacancyRate.Choise = styled.View`
  border: 1px solid black;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
export default VacancyRate;
