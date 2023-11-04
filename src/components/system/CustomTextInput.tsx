import React, {useState} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {colors} from 'src/constants/colors';

interface Props extends TextInputProps {}

const intialTextInputStyle = {
  backgroundColor: colors.background,
  borderWidth: 0,
};

export default function CustomTextInput({...rest}: Props) {
  const [inputBackgroundColor, setInputBackgroundColor] =
    useState(intialTextInputStyle);
  const handleFocus = () => {
    rest.onFocus;
    setInputBackgroundColor({
      backgroundColor: 'white',
      borderWidth: 1,
    });
  };
  const handleBlur = () => {
    rest.onBlur;
    setInputBackgroundColor(intialTextInputStyle);
  };
  return (
    <TextInput
      // onChangeText={text => handleInputChange(text, 'name')}
      // value={exercise.name}
      // placeholder="운동명"
      {...rest}
      style={[styles.container, inputBackgroundColor]}
      placeholderTextColor={colors.gray50}
      keyboardType="default"
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    color: colors.gray100,
    borderRadius: 8,
    borderColor: colors.primary,

    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
  },
});
