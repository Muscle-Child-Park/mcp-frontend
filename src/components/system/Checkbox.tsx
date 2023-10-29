import React from 'react';
import {StyleSheet, Text, View, Pressable, ViewStyle} from 'react-native';
import {Check} from 'src/assets/images';

interface Props {
  isChecked: boolean;
  disabled?: boolean;
  onValueChangeHandler?: (checked: boolean) => void;
  text: string;
  style?: ViewStyle;
  size?: 'small' | 'medium';
  textColor?: string;
  checkBoxColor?: string;
}

const SIZE = {
  small: {box: 18, check: 17, text: 16},
  medium: {box: 24, check: 23, text: 16},
  // large: 32,
};

const Checkbox = ({
  isChecked,
  text,
  disabled,
  onValueChangeHandler,
  style,
  textColor,
  checkBoxColor,
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
            width: SIZE[size].box,
            height: SIZE[size].box,
          },
          isChecked && styles.checked,
          {borderColor: checkBoxColor},
          isChecked && {backgroundColor: checkBoxColor},
        ]}>
        <Check
          style={{width: SIZE[size].check, height: SIZE[size].check}}
          fill={isChecked ? 'white' : 'transparent'}
        />
      </Pressable>
      <Pressable style={styles.textContainer} onPress={triggerCheckbox}>
        <Text
          style={[
            styles.text,
            {fontSize: SIZE[size].text},
            {color: textColor ?? '#555555'},
          ]}>
          {text}
        </Text>
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
  textContainer: {
    margin: 0,
  },
  text: {
    fontWeight: '500',
    lineHeight: 19.2,
  },
});

export default Checkbox;
