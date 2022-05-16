/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {CompaniesListData} from '../../data/companies.data';
import {CompanyItem} from '../CompanyItem';

const CompaniesList = () => {
  const data = CompaniesListData;

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
