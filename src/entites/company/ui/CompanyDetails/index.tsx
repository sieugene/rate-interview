/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useFindCompanyById} from '../../../../features/companies/hooks/useFindCompanyById';
import {
  Button,
  PullBoxVerticall,
  Tabs,
  Typography,
} from '../../../../shared/ui';
import {Modal} from '../../../../shared/ui/Modal';

type Props = {
  companyId: string;
};
const CompanyDetails = ({companyId}: Props) => {
  const theme = useTheme();
  const tabs = ['Description', 'Rates'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const company = useFindCompanyById(companyId);

  const [visible, setVisible] = useState(false);
  const onOpen = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <View>
      <Button onPress={onOpen}>open</Button>
      <Modal visible={visible} onClose={onClose} animationType="slide">
        <PullBoxVerticall
          boxTrigger={{
            yFrom: 0,
            yTo: 35,
          }}
          onEnd={onClose}
          style={{
            marginTop: 100,
          }}>
          <CompanyDetails.Root>
            <CompanyDetails.Head>
              <CompanyDetails.ImageWrap style={theme.boxShadows.image}>
                <CompanyDetails.Image
                  source={{
                    uri: company?.image,
                  }}
                />
              </CompanyDetails.ImageWrap>
              <Typography
                variant="h4"
                fontWeight="bold"
                style={{marginTop: 10}}>
                {company?.name}
              </Typography>
              <Typography variant="h6" color="silver" style={{marginTop: 5}}>
                {company?.geo}
              </Typography>
            </CompanyDetails.Head>

            <CompanyDetails.Content>
              <CompanyDetails.Tabs
                tabs={tabs}
                activeTab={activeTab}
                onSelect={tab => {
                  setActiveTab(tab);
                }}
              />
              <ScrollView>
                <Typography style={{paddingTop: 10}}>
                  {company?.about}
                  {company?.about}
                  {company?.about}
                  {company?.about}
                  {company?.about}
                  {company?.about}
                  {company?.about}
                  {company?.about}
                  {company?.about}
                </Typography>
              </ScrollView>
            </CompanyDetails.Content>
          </CompanyDetails.Root>
        </PullBoxVerticall>
      </Modal>
    </View>
  );
};

CompanyDetails.Root = styled.View`
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: 30px;
`;
CompanyDetails.Head = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
CompanyDetails.ImageWrap = styled.View`
  background: white;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
CompanyDetails.Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  resize-mode: contain;
`;

CompanyDetails.Content = styled.View`
  background: ${({theme}) => theme.colors.tinyWhite};
  flex: 1;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`;
CompanyDetails.Tabs = styled(Tabs)``;

export default CompanyDetails;
