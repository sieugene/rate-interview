/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React, {memo, useEffect, useMemo, useRef} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Pressable,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  items: React.ReactNode[];
  onPageChange?: (page: number) => void;
  itemStyle?: ViewStyle;
  stepsStyle?: ViewStyle;
  startPage?: number;
};
const Carousel = ({
  items,
  onPageChange,
  itemStyle,
  stepsStyle,
  startPage,
}: Props) => {
  const memoizedItems = useMemo(() => items, [items]);
  const currentPage = useRef(startPage);
  const flatList = useRef<FlatList<Props['items'][0]> | null>(null);
  const {width, height} = Dimensions.get('window');
  const scrollX = useRef(new Animated.Value(0)).current;
  const stepPosition = Animated.divide(scrollX, width);

  const setPage = (page: number) => {
    if (page === currentPage.current) return;
    currentPage.current = page;
    onPageChange?.(page);
  };

  const opacityAnimation = (index: number) =>
    stepPosition.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0.4, 1, 0.4],
      extrapolate: 'clamp',
    });

  const scrollTo = (index: number) => {
    flatList.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  useEffect(() => {
    if (startPage) {
      scrollTo(startPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Carousel.Root>
      <FlatList
        initialNumToRender={currentPage.current}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        ref={flatList}
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={memoizedItems}
        keyExtractor={(_, index) => `${index}`}
        renderItem={info => {
          const {item} = info;

          return (
            <View
              style={[
                {
                  width,
                  height,
                  overflow: 'visible',
                },
                itemStyle || {},
              ]}>
              {item}
            </View>
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
        onMomentumScrollEnd={e => {
          const pageNumber = Math.min(
            Math.max(
              Math.floor(e.nativeEvent.contentOffset.x / width + 0.5) + 1,
              0,
            ),
            memoizedItems.length,
          );
          setPage(pageNumber - 1);
        }}
      />

      <Carousel.Steps style={[stepsStyle || {}]}>
        {memoizedItems?.map((_, index) => {
          return (
            <Pressable
              key={`step-${index}`}
              onPress={() => {
                scrollTo(index);

                setPage(index);
              }}>
              <Carousel.Step style={{opacity: opacityAnimation(index)}} />
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
`;

export default memo(Carousel);
