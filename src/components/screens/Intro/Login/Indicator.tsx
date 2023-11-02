import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'src/constants/colors';
import {SlideProps} from 'src/types/type';

interface Props {
  currentIndex: number;
  data: SlideProps[];
}

export default function Indicator({currentIndex, data}: Props) {
  return (
    <View
      style={{
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      {data.map((_, index) => (
        <View
          style={[
            styles.indicator,
            currentIndex === index && {backgroundColor: colors.primary},
          ]}
          key={index}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    width: 14,
    height: 14,
    backgroundColor: colors.indicator,
    marginHorizontal: 3,
    borderRadius: 100,
  },
});
