import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import getDeviceWidth from '../../utils/getDeviceWidth';

const CustomHeader = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.left}>
        <View style={styles.icon} />
        <Text style={styles.text}>Heading 3</Text>
      </View>
      <View style={styles.right} />
    </View>
  );
};

const deviceWidth = getDeviceWidth();

const styles = StyleSheet.create({
  wrapper: {
    width: deviceWidth - 71,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  left: {
    flexDirection: 'row',
    gap: 8,
  },
  icon: {
    width: 20,
    height: 20,
    backgroundColor: colors.gray1,
  },
  text: {
    color: colors.gray5,
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 22,
  },
  right: {
    // backgroundColor: colors.gray1,
    width: 20,
    height: 20,
    borderRadius: 50,
  },
});

export default CustomHeader;
