/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useFindVacancyById} from '../../../../features/vacancies/hooks/useFindVacancyById';
import {PullBoxVerticall, Tabs, Typography} from '../../../../shared/ui';
import {Modal} from '../../../../shared/ui/Modal';

type Props = {
  vacancyId: string;
  visible: boolean;
  onClose: () => void;
};
const VacancyDetails = ({vacancyId, visible, onClose}: Props) => {
  const theme = useTheme();
  const tabs = ['Description', 'Rates'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const vacancy = useFindVacancyById(vacancyId);

  return (
    <View>
      <Modal visible={visible} onClose={onClose}>
        <PullBoxVerticall
          renderBoxTrigger={panHandlers => (
            <VacancyDetails.TopTrigger {...panHandlers} />
          )}
          onEnd={onClose}
          style={{
            marginTop: 100,
          }}>
          <VacancyDetails.Root>
            <VacancyDetails.Head>
              <VacancyDetails.ImageWrap style={theme.boxShadows.image}>
                <VacancyDetails.Image
                  source={{
                    uri: vacancy?.company?.image,
                  }}
                />
              </VacancyDetails.ImageWrap>
              <Typography
                variant="h4"
                fontWeight="bold"
                style={{marginTop: 10}}>
                {vacancy?.company?.name}
              </Typography>
              <Typography variant="h6" color="silver" style={{marginTop: 5}}>
                {vacancy?.company?.geo}
              </Typography>
            </VacancyDetails.Head>

            <VacancyDetails.Content>
              <VacancyDetails.Tabs
                tabs={tabs}
                activeTab={activeTab}
                onSelect={tab => {
                  setActiveTab(tab);
                }}
              />
              <ScrollView>
                <Typography style={{paddingTop: 10}}>
                  {vacancy?.company?.about}
                </Typography>
              </ScrollView>
            </VacancyDetails.Content>
          </VacancyDetails.Root>
        </PullBoxVerticall>
      </Modal>
    </View>
  );
};

VacancyDetails.TopTrigger = styled.View`
  height: 200px;
  width: 100%;
  position: absolute;
  z-index: 999;
`;

VacancyDetails.Root = styled.View`
  background-color: white;
  border-radius: 20px 20px 0px 0px;
  flex: 1;
  width: 100%;
  height: 100%;
  padding-top: 30px;
`;
VacancyDetails.Head = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
VacancyDetails.ImageWrap = styled.View`
  background: white;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
VacancyDetails.Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  resize-mode: contain;
`;

VacancyDetails.Content = styled.View`
  background: ${({theme}) => theme.colors.tinyWhite};
  flex: 1;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`;
VacancyDetails.Tabs = styled(Tabs)``;

export default VacancyDetails;
