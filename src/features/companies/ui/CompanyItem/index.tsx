import styled from '@emotion/native';
import React from 'react';
import {Button, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {TransformOnTouch} from '../../../../shared/ui';
import {CompanyType} from '../../model/types';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  company: CompanyType;
  styles?: StyleProp<ViewStyle>;
};
export const CompanyItem = ({company, styles}: Props) => {
  return (
    <TransformOnTouch>
      <CompanyItem.Root style={[style.shadow, styles || {}]}>
        <CompanyItem.Name>{company.name}</CompanyItem.Name>
        <CompanyItem.About>About: {company.about}</CompanyItem.About>
        <CompanyItem.Geo>{company.geo}</CompanyItem.Geo>
        <CompanyItem.Rate>Rate: {company.rate}</CompanyItem.Rate>
        <Icon name="business" size={30} color="#4F8EF7" />
        <Button title="open" />
      </CompanyItem.Root>
    </TransformOnTouch>
  );
};

CompanyItem.Root = styled.View`
  background-color: white;
  border-radius: 8px;
  padding: 8px;
`;

CompanyItem.Name = styled.Text`
  font-weight: 700;
`;
CompanyItem.About = styled.Text``;
CompanyItem.Geo = styled.Text`
  font-weight: 600;
`;
CompanyItem.Rate = styled.Text``;

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
