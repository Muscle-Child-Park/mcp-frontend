import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import getDeviceWidth from 'src/utils/getDeviceWidth';
import {RightArrow} from 'src/assets/images';
import {colors} from 'src/constants/colors';

interface Props {
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  headerSize: 'h2' | 'h3' | 'h4';
  headerText: string;
}

const headerSizes = {
  h2: 22,
  h3: 20,
  h4: 18,
};

const CustomHeader = ({
  hasLeftIcon = false,
  hasRightIcon = false,
  headerSize,
  headerText,
}: Props) => {
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
      fontSize: headerSizes[headerSize],
      fontWeight: '600',
      lineHeight: 22,
    },
  });

  return (
    <View style={styles.wrapper}>
      <View style={styles.left}>
        {hasLeftIcon && <View style={styles.icon} />}
        <Text style={styles.text}>{headerText}</Text>
      </View>
      {hasRightIcon && (
        <RightArrow style={{width: 24, height: 24}} fill="#404040" />
      )}
    </View>
  );
};

export default CustomHeader;
