import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {colors} from 'src/constants/colors';

interface Props {
  isSelected?: boolean;
  onClick?: () => void;
  text: string;
}

const Tag = ({isSelected = false, text, onClick}: Props) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.box,
        isSelected && {
          borderWidth: 0,
          borderColor: 'transparent',
          backgroundColor: colors.gray100,
        },
      ]}>
      <Text
        style={[
          styles.text,
          isSelected && {color: 'white', fontWeight: '400'},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    minWidth: 49,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: colors.gray100,
  },
  text: {
    color: colors.gray100,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Tag;
