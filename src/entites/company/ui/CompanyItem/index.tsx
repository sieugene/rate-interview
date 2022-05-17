/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Button,
  Card,
  TransformOnTouch,
  Typography,
} from '../../../../shared/ui';
import {CompanyType} from '../../../../features/companies/model/types';
import CompanyDetails from '../CompanyDetails';

type Props = {
  company: CompanyType;
  styles?: StyleProp<ViewStyle>;
};
const CompanyItem = ({company, styles}: Props) => {
  const theme = useTheme();
  return (
    <TransformOnTouch>
      <CompanyItem.Root style={styles}>
        <CompanyItem.Head>
          <CompanyItem.Label>
            <Typography variant="h4" fontWeight="simeBold">
              {company.name}
            </Typography>
            <Typography
              variant="h5"
              color="primary"
              style={{
                marginLeft: 10,
              }}>
              <Icon name="star" size={18} color={theme.colors.primary} />{' '}
              {company.rate}
            </Typography>
          </CompanyItem.Label>

          <CompanyItem.Image
            source={{
              uri: company.image,
            }}
          />
        </CompanyItem.Head>

        <CompanyItem.Info>
          <Typography variant="tiny" fontWeight="simeBold">
            {company.geo}
          </Typography>
          <CompanyItem.About variant="tiny">{company.about}</CompanyItem.About>
        </CompanyItem.Info>

        <CompanyItem.BtnsGroup>
          <Button
            style={{width: 78, height: 32}}
            typographyProps={{
              variant: 'small',
            }}>
            Rate
          </Button>
          <Button
            style={{width: 78, height: 32}}
            variant="ghost"
            typographyProps={{
              variant: 'small',
            }}>
            Learn more
          </Button>
          <CompanyDetails companyId={company.id} />
        </CompanyItem.BtnsGroup>
      </CompanyItem.Root>
    </TransformOnTouch>
  );
};

CompanyItem.Root = styled(Card)``;

CompanyItem.Head = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

CompanyItem.Label = styled.View`
  flex-direction: row;
  align-items: center;
`;

CompanyItem.Image = styled.Image`
  width: 50px;
  height: 50px;
  resize-mode: contain;
`;

CompanyItem.Info = styled.View`
  margin-bottom: 15px;
`;

CompanyItem.About = styled(Typography)`
  max-width: 350px;
`;

CompanyItem.BtnsGroup = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export default CompanyItem;
