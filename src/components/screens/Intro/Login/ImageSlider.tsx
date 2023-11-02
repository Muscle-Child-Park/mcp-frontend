import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {SlideProps} from 'src/types/type';

interface Props {
  data: SlideProps[];
  updateCurrentSlideIndex: (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => void;
}

const {width} = Dimensions.get('window');

const Slide = ({item}: {item: SlideProps}) => (
  <Image
    source={item.image}
    style={{height: 400, width: width - 40, resizeMode: 'contain'}}
  />
);

export default function ImageSlider({data, updateCurrentSlideIndex}: Props) {
  return (
    <FlatList
      pagingEnabled
      data={data}
      onMomentumScrollEnd={updateCurrentSlideIndex}
      contentContainerStyle={{
        height: 400,
        paddingHorizontal: 20,
        gap: 40,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Slide item={item} />}
      style={{
        marginTop: 96,
        flexGrow: 0,
      }}
    />
  );
}
