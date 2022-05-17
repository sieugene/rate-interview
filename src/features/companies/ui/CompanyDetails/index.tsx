/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Button,
  PullBoxVerticall,
  Tabs,
  Typography,
} from '../../../../shared/ui';
import {Modal} from '../../../../shared/ui/Modal';
import {useFindCompanyById} from '../../hooks/useFindCompanyById';

type Props = {
  companyId: string;
};
export const CompanyDetails = ({companyId}: Props) => {
  const tabs = ['Description', 'About'];
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
          onEnd={onClose}
          style={{
            marginTop: 100,
          }}>
          <CompanyDetails.Root>
            <Typography>Company Details</Typography>
            <CompanyDetails.Image
              source={{
                uri: company?.image,
              }}
            />
            <CompanyDetails.Content>
              <CompanyDetails.Tabs
                tabs={tabs}
                activeTab={activeTab}
                onSelect={tab => {
                  setActiveTab(tab);
                }}
              />
              <Typography>{company?.about}</Typography>
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
`;
CompanyDetails.Image = styled.Image`
  width: 50px;
  height: 50px;
  resize-mode: contain;
`;
CompanyDetails.Content = styled.View`
  background: ${({theme}) => theme.colors.tinyWhite};

  flex: 1;
  margin: 10px;
  border-radius: 10px;
`;
CompanyDetails.Tabs = styled(Tabs)`
  margin: 10px;
`;
