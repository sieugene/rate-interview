import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Typography from '../Typography';

type Props = {
  style?: StyleProp<ViewStyle>;
  tabs: string[];
  activeTab: string;
  onSelect: (tab: string) => void;
};
const Tabs = ({style, tabs, activeTab, onSelect}: Props) => {
  const theme = useTheme();

  return (
    <Tabs.Root style={[theme.boxShadows.tabs, style || {}]}>
      {tabs?.map((tab, index) => {
        const isActive = tab === activeTab;
        return (
          <Tabs.Tab active={isActive} key={index} onPress={() => onSelect(tab)}>
            <Typography color={isActive ? 'black' : 'silver'}>{tab}</Typography>
          </Tabs.Tab>
        );
      })}
    </Tabs.Root>
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
