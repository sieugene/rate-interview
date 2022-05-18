/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {VacancyItem} from '../../../../entites/vacancy';
import {useAllVacancies} from '../../../vacancies/hooks/useAllVacancies';

const VacanciesSearchList = () => {
  const data = useAllVacancies();

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={vacancy => (
          <VacancyItem
            vacancy={vacancy.item}
            styles={{
              margin: 10,
            }}
          />
        )}
        keyExtractor={item => item?.id}
      />
    </SafeAreaView>
  );
};

export default VacanciesSearchList;
