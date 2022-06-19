import styled from '@emotion/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useAppDispatch} from '../../../../@app/store/hooks';
import {addRate} from '../../../../entites/vacancies-rates/model/store';
import {
  VomitPepe,
  SupPepe,
  OkPepe,
  GlarePepe,
  BsdownPepe,
} from '../../../../shared/images';
import {Button} from '../../../../shared/ui';
import Carousel from '../../../../shared/ui/Carousel';
import {Modal} from '../../../../shared/ui/Modal';
import {VacancyType} from '../../../vacancies/model/types';
import {useRateForm} from '../../hooks/useRateForm';
import {AnimatedRateItem} from '../AnimatedRateItem';
import {RateForm} from '../RateForm';

const colorsOfSlide = {
  0: '#b06843',
  1: 'blue',
  2: '#5a8d40',
  3: '#fd4d15',
  4: '#701134',
} as {[key: number]: string};

type Props = {
  vacancyId: VacancyType['id'];
};
const VacancyRate = ({vacancyId}: Props) => {
  const dispatch = useAppDispatch();
  const form = useRateForm();
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

  const onSubmit = () => {
    dispatch(
      addRate({
        rate: {
          comment: form.rate.description,
          rate: form.rate.star,
          vacancyId,
        },
      }),
    );
    onClose();
    form.setRate({
      description: '',
      star: 0,
    });
  };

  const pepesIcons = [VomitPepe, BsdownPepe, GlarePepe, SupPepe, OkPepe]?.map(
    (Pepe, index) => {
      return (
        <AnimatedRateItem
          activeColor={activeColor}
          trigger={trigger}
          key={index}>
          <Pepe style={{width: 150, height: 150}} />
        </AnimatedRateItem>
      );
    },
  );

  return (
    <View>
      <Modal visible={visible} onClose={onClose}>
        <VacancyRate.Root>
          <Carousel
            startPage={form.rate.star}
            stepsStyle={{bottom: 150}}
            onPageChange={page => {
              form.setRate(prev => ({...prev, star: page}));
              setActiveColor({
                active: colorsOfSlide[page],
                prevColor: activeColor.active,
              });
              setTrigger(!trigger);
            }}
            items={pepesIcons}
          />
          <VacancyRate.Form {...form} onSubmit={onSubmit} />
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

VacancyRate.Form = styled(RateForm)`
  position: absolute;
  top: 0;
  padding: 30px;
  align-items: center;
`;

export default VacancyRate;
