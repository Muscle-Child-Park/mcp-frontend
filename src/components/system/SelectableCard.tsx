import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from 'src/constants/colors';

interface Props {
  title: string;
  description: string;
  isSelected: boolean;
  handleSelect: () => void;
}

export default function SelectableCard({
  title,
  description,
  isSelected,
  handleSelect,
}: Props) {
  return (
    <Pressable
      style={[
        styles.box,
        isSelected && {
          borderColor: colors.primary,
          backgroundColor: colors.blueLighten2,
        },
      ]}
      onPress={handleSelect}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    gap: 14,
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: 'black',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: colors.gray75,
    textAlign: 'center',
  },
});
