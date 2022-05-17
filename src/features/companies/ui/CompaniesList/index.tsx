/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {CompanyItem} from '../../../../entites/company';

import {useAllCompanies} from '../../hooks/useAllCompanies';

const CompaniesList = () => {
  const data = useAllCompanies();

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={company => (
          <CompanyItem
            company={company.item}
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

export default CompaniesList;
