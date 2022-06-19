/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import React, {useState} from 'react';
import {View} from 'react-native';
import {useFindVacancyById} from '../../../../features/vacancies/hooks/useFindVacancyById';
import {VacancyType} from '../../../../features/vacancies/model/types';
import {PullBoxVerticall, Tabs, Typography} from '../../../../shared/ui';
import {Modal} from '../../../../shared/ui/Modal';
import {VacancyRates} from '../../../vacancies-rates/ui';

type Props = {
  vacancyId: VacancyType['id'];
  visible: boolean;
  onClose: () => void;
};
const VacancyDetails = ({vacancyId, visible, onClose}: Props) => {
  const theme = useTheme();

  const vacancy = useFindVacancyById(vacancyId);
  const tabs = [
    {
      key: 0,
      title: 'Description',
      node: (
        <Typography style={{paddingTop: 10}}>
          {vacancy?.company?.about}
        </Typography>
      ),
    },
    {
      key: 1,
      title: 'Rates',
      node: <VacancyRates vacancyId={vacancyId} />,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].key);

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

VacancyDetails.Root = styled(Modal.Body)``;
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
