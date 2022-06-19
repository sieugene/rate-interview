import {FC, useEffect} from 'react';
import {View} from 'react-native';
import {VacancyType} from '../../../../features/vacancies/model/types';
import {Button, Typography} from '../../../../shared/ui';
import {useVacancyRates} from '../../hooks/useVacancyRates';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../../@app/store/hooks';
import {getRates, removeRate} from '../../model/store';

type Props = {
  vacancyId: VacancyType['id'];
};
const VacancyRates: FC<Props> = ({vacancyId}) => {
  const rates = useVacancyRates(vacancyId);
  const loading = useAppSelector(state => state.vacanciesRates.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRates());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onDelete = (rateId: string) => {
    dispatch(removeRate({rateId}));
  };
  if (loading) {
    return (
      <View>
        <Typography>loading...</Typography>
      </View>
    );
  }
  return (
    <View>
      {rates?.length > 0 ? (
        rates?.map(rate => {
          return (
            <View key={rate.id}>
              <Typography>Star:{rate.rate}</Typography>
              <Typography>{rate?.comment || '-'}</Typography>
              <Button
                onPress={() => {
                  onDelete(rate.id);
                }}>
                delete rate
              </Button>
            </View>
          );
        })
      ) : (
        <Typography>no rates</Typography>
      )}
    </View>
  );
};

export default VacancyRates;
