/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {useRef} from 'react';
import {Animated, Dimensions, FlatList, Pressable, View} from 'react-native';

const illustrations = [
  {
    id: 1,
    color: 'red',
  },
  {
    id: 2,
    color: 'black',
  },
  {
    id: 3,
    color: 'orange',
  },
];

const Carousel = () => {
  const flatList = useRef<FlatList>(null);
  const {width, height} = Dimensions.get('window');
  const scrollX = useRef(new Animated.Value(0)).current;
  const stepPosition = Animated.divide(scrollX, width);

  return (
    <View>
      <FlatList
        ref={flatList}
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <Animated.View
            style={{
              width,
              height,
              overflow: 'visible',
              backgroundColor: item.color,
            }}
          />
        )}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {x: scrollX}},
            },
          ],
          {useNativeDriver: false},
        )}
      />

      <Carousel.Steps>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });

          return (
            <Pressable
              key={`step-${index}`}
              onPress={() => {
                flatList.current?.scrollToIndex({
                  index,
                  animated: true,
                });
              }}>
              <Carousel.Step style={{opacity}} />
            </Pressable>
          );
        })}
      </Carousel.Steps>
    </View>
  );
};
Carousel.Steps = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
Carousel.Step = styled(Animated.View)`
  height: 10px;
  width: 10px;
  background: silver;
  border-radius: 5px;
  margin: 2.5px;
`;

export default Carousel;
