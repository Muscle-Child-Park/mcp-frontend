import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {RightArrow} from 'src/assets/images';
import {colors} from 'src/constants/colors';

interface Props {
  title: string;
  handlePress: () => void;
  hasBorderBottom?: boolean;
}

export default function ListButton({
  title,
  handlePress,
  hasBorderBottom,
}: Props) {
  return (
    <Pressable
      style={[
        styles.container,
        hasBorderBottom && {
          borderBottomWidth: 0.33,
          borderBottomColor: colors.gray25,
        },
      ]}
      onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
      <RightArrow style={styles.rightArrow} fill={colors.gray50} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: colors.gray75,
    paddingVertical: 16,
  },
  rightArrow: {width: 20, height: 20},
});
