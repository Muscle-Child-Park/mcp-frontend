import {colors} from 'src/constants/colors';
import getDeviceWidth from 'src/utils/getDeviceWidth';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  header: string;
  body: string;
}

const SmallBox = ({header, body}: Props) => {
  return (
    <View style={styles.boxWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.text, styles.header]}>{header}</Text>
        <Text style={[styles.text, styles.body]}>{body}</Text>
      </View>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
    </View>
  );
};

const deviceWidth = getDeviceWidth();
const styles = StyleSheet.create({
  boxWrapper: {
    backgroundColor: '#F1F1F1',
    borderRadius: 4,
    flexDirection: 'row',
    width: deviceWidth - 71,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  textWrapper: {
    flexDirection: 'column',
    gap: 8,
  },
  text: {
    color: colors.gray5,
  },
  header: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 22,
  },
  body: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
  },

  button: {
    backgroundColor: colors.gray2,
    width: 32,
    height: 32,
    borderRadius: 50,
  },
});
export default SmallBox;
