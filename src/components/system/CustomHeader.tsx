import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {RightArrow} from 'src/assets/images';
import {colors} from 'src/constants/colors';

interface Props {
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  headerSize: 'h2' | 'h3' | 'h4';
  headerText: string;
}

const CustomHeader = ({
  hasLeftIcon = false,
  hasRightIcon = false,
  headerSize,
  headerText,
}: Props) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.wrapper, {width: width - 71}]}>
      <View style={styles.left}>
        {hasLeftIcon && <View style={styles.icon} />}
        <Text
          style={[
            styles.text,
            headerSize === 'h2' && {fontSize: 22},
            headerSize === 'h3' && {fontSize: 20},
            headerSize === 'h4' && {fontSize: 18},
          ]}>
          {headerText}
        </Text>
      </View>
      {hasRightIcon && (
        <RightArrow style={{width: 24, height: 24}} fill="#404040" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
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
    fontWeight: '600',
    lineHeight: 22,
  },
});

export default CustomHeader;
