import {colors} from '@/constants/colors';
import getDeviceWidth from '@/utils/getDeviceWidth';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SmallBox = () => {
  return (
    <View style={styles.boxWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.text, styles.header]}>Paragraph</Text>
        <Text style={[styles.text, styles.body]}>Paragraph Small</Text>
      </View>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
    </View>
  );
};

const deviceWidth = getDeviceWidth();
const styles = StyleSheet.create({
  boxWrapper: {
    backgroundColor: '#E6E6E6',
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
