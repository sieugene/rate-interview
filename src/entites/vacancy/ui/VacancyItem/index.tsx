/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {useState} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {VacancyType} from '../../../../features/vacancies/model/types';
import {VacancyRate} from '../../../../features/vacancy-rate';
import {Card, TransformOnTouch, Typography} from '../../../../shared/ui';
import VacancyDetails from '../VacancyDetails';
import {VacancyTags} from '../VacancyTags';

type Props = {
  vacancy: VacancyType;
  styles?: StyleProp<ViewStyle>;
};
const VacancyItem = ({vacancy, styles}: Props) => {
  const [visible, setVisible] = useState(false);
  const onOpen = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <VacancyDetails
        vacancyId={vacancy.id}
        visible={visible}
        onClose={onClose}
      />
      <TransformOnTouch onPress={onOpen}>
        <VacancyItem.Root style={styles}>
          <VacancyItem.Head>
            <VacancyItem.Image
              source={{
                uri: vacancy.company.image,
              }}
            />
            <VacancyItem.Label>
              <Typography variant="h5" fontWeight="simeBold">
                {vacancy.title}
              </Typography>
              <Typography variant="h5">{vacancy.company.name}</Typography>
            </VacancyItem.Label>
          </VacancyItem.Head>

          <VacancyItem.Bottom>
            <VacancyTags vacancy={vacancy} />
            <VacancyRate />
          </VacancyItem.Bottom>
        </VacancyItem.Root>
      </TransformOnTouch>
    </>
  );
};

VacancyItem.Root = styled(Card)``;

VacancyItem.Head = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

VacancyItem.Label = styled.View`
  margin-left: 8px;
  align-items: flex-start;
`;

VacancyItem.Image = styled.Image`
  width: 50px;
  height: 50px;
  resize-mode: contain;
  border-radius: 4px;
`;

VacancyItem.Bottom = styled.View`
  margin-top: 10px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export default VacancyItem;
