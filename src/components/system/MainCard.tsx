import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  paddingTop?: number;
  paddingBottom?: number;
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function MainCard({children, style}: Props) {
  return <View style={[styles.card, style]}>{children}</View>;
}

// const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: 'white',
    // width: deviceWidth - 40,
    // marginHorizontal: 20,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 12,
    elevation: 2,
  },
});
