import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import React, {useMemo} from 'react';
import {ScrollView, StyleProp, ViewStyle} from 'react-native';
import Typography from '../Typography';

type Props = {
  style?: StyleProp<ViewStyle>;
  tabs: {
    title: string;
    node?: JSX.Element;
    key: number;
  }[];
  activeTab: number;
  onSelect: (key: number) => void;
};
const Tabs = ({style, tabs, activeTab, onSelect}: Props) => {
  const theme = useTheme();
  const currentTab = useMemo(
    () => tabs.find(tab => tab.key === activeTab),
    [activeTab, tabs],
  );

  return (
    <>
      <Tabs.Root style={[theme.boxShadows.tabs, style || {}]}>
        {tabs?.map((tab, index) => {
          const isActive = tab.key === currentTab?.key;
          return (
            <Tabs.Tab
              active={isActive}
              key={index}
              onPress={() => onSelect(tab.key)}>
              <Typography color={isActive ? 'black' : 'silver'}>
                {tab.title}
              </Typography>
            </Tabs.Tab>
          );
        })}
      </Tabs.Root>
      <ScrollView>{currentTab?.node}</ScrollView>
    </>
  );
};
Tabs.Root = styled.View`
  background: #ffffff;
  border-radius: 10px;
  padding: 6px;
  flex-direction: row;
  height: 48px;
`;
Tabs.Tab = styled.TouchableOpacity<{active?: boolean}>`
  background: ${({active, theme}) =>
    active ? theme.colors.tinyWhite : 'transparent'};

  border-radius: 8px;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
export default Tabs;
