import styled from '@emotion/native';
import React from 'react';
import {VacancyType} from '../../../../features/vacancies/model/types';
import {Tabs, Typography} from '../../../../shared/ui';
import Icon from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

type Props = {
  vacancy: VacancyType;
};
export const VacancyTags = ({vacancy}: Props) => {
  return (
    <VacancyTags.Root>
      <VacancyTags.Tag active>
        <Typography variant="tiny" fontWeight="simeBold">
          {vacancy.geo}
        </Typography>
      </VacancyTags.Tag>
      <VacancyTags.Tag active>
        <Typography variant="small" fontWeight="simeBold" color="silver">
          Vacancy
        </Typography>
        <Stars count={vacancy.rateVacancy} />
      </VacancyTags.Tag>
      <VacancyTags.Tag active>
        <Typography variant="small" fontWeight="simeBold" color="silver">
          Company
        </Typography>
        <Stars count={vacancy.company.rate} />
      </VacancyTags.Tag>
    </VacancyTags.Root>
  );
};

VacancyTags.Root = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
`;
VacancyTags.Tag = styled(Tabs.Tab)`
  align-self: flex-start;
  padding: 4px;
  flex: none;
`;

const Stars = ({count}: {count: number}) => {
  return (
    <Stars.Root>
      {Array.from(Array(count)).map((_, index) => (
        <Icon name="star" color="#ffcc47" size={10} key={index} />
      ))}
    </Stars.Root>
  );
};

Stars.Root = styled.View`
  flex-direction: row;
  align-items: center;
`;
