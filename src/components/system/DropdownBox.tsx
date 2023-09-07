import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {Check} from 'src/assets/images';
import {colors} from 'src/constants/colors';

interface Props {
  title: string;
  isChecked?: boolean;
  selected: number;
  setSelected: (selected: number) => void;
  closeModal: () => void;
}

const DropdownBox = ({
  title,
  isChecked = false,
  selected,
  setSelected,
  closeModal,
}: Props) => {
  const handlePress = () => {
    setSelected(selected);
    closeModal();
  };
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
      {isChecked && (
        <Check style={{width: 12, height: 12}} fill={colors.gray75} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 56,
    borderBottomWidth: 0.33,
    borderBottomColor: colors.gray25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color: colors.gray75,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19.2,
  },
});

export default DropdownBox;
