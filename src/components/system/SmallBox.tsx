import {colors} from 'src/constants/colors';
import getDeviceWidth from 'src/utils/getDeviceWidth';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  header: string;
  body: string;
}

const SmallBox = ({header, body}: Props) => {
  return (
    <View style={styles.boxWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.header]}>{header}</Text>
        <Text style={[styles.body]}>{body}</Text>
      </View>
      {/* <TouchableOpacity style={styles.button}></TouchableOpacity> */}
    </View>
  );
};

const deviceWidth = getDeviceWidth();
const styles = StyleSheet.create({
  boxWrapper: {
    backgroundColor: colors.background,
    borderRadius: 4,
    flexDirection: 'row',
    width: deviceWidth - 71,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  textWrapper: {
    flexDirection: 'column',
    gap: 8,
  },
  header: {
    color: colors.gray100,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
  },
  body: {
    color: colors.gray50,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
  },

  button: {
    backgroundColor: colors.gray2,
    width: 32,
    height: 32,
    borderRadius: 50,
  },
});
export default SmallBox;
