import React from 'react';
import {StyleSheet, Text, View, Pressable, ViewStyle} from 'react-native';
import {Check} from 'src/assets/images';

interface Props {
  isChecked: boolean;
  disabled?: boolean;
  onValueChangeHandler?: (checked: boolean) => void;
  text: string;
  style?: ViewStyle;
  size?: 'small' | 'medium' | 'large';
}

const SIZE = {
  small: 18,
  medium: 24,
  large: 32,
};

const Checkbox = ({
  isChecked,
  text,
  disabled,
  onValueChangeHandler,
  style,
  size = 'medium',
}: Props) => {
  const onPressedHandler = () => {
    if (onValueChangeHandler) {
      onValueChangeHandler(!isChecked);
    }
  };

  const triggerCheckbox = () => {
    if (disabled) return;
    onPressedHandler();
  };

  return (
    <View style={[styles.container, style]}>
      <Pressable
        // disabled={disabled}
        onPress={onPressedHandler}
        style={[
          styles.checkbox,
          {
            width: SIZE[size],
            height: SIZE[size],
          },
          isChecked && styles.checked,
        ]}>
        <Check width={13} height={13} fill={isChecked ? 'white' : '#555555'} />
      </Pressable>
      <Pressable style={styles.label} onPress={triggerCheckbox}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#555555',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#555555',
    borderColor: '#555555',
  },
  label: {
    marginLeft: 6,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  text: {
    color: 'black',
  },
});

export default Checkbox;
