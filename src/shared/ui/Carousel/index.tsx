/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {useRef} from 'react';
import {Animated, Dimensions, FlatList, Pressable} from 'react-native';

type Props = {
  items: React.ReactNode[];
};
const Carousel = ({items}: Props) => {
  const flatList = useRef<FlatList>(null);
  const {width, height} = Dimensions.get('window');
  const scrollX = useRef(new Animated.Value(0)).current;
  const stepPosition = Animated.divide(scrollX, width);

  return (
    <Carousel.Root>
      <FlatList
        ref={flatList}
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={items}
        keyExtractor={(_, index) => `${index}`}
        renderItem={info => {
          const {index, item} = info;
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              style={{
                width,
                height,
                overflow: 'visible',
                opacity,
              }}>
              {item}
            </Animated.View>
          );
        }}
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
        {items?.map((_, index) => {
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
    </Carousel.Root>
  );
};

Carousel.Root = styled.View`
  align-items: center;
  justify-content: center;
`;
Carousel.Steps = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
`;

Carousel.Step = styled(Animated.View)`
  height: 15px;
  width: 15px;
  border-radius: 7.5px;
  margin: 2.5px;
  background: #fff;
  /* border: 3px solid #fff; */
`;

export default Carousel;
