import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Google, Kakao} from 'src/assets/images';

interface Props {
  type: 'kakao' | 'google';
  handlePress: () => void;
  disabled?: boolean;
}

const typeObject = {
  kakao: {
    title: '카카오',
    color: '#3C1E1E',
    backgroundColor: '#FEE404',
  },
  google: {
    title: '구글',
    color: '#1F1F1F',
    backgroundColor: '#F2F2F2',
  },
};

export default function SocialButton({
  type,
  handlePress,
  disabled = false,
}: Props) {
  return (
    <Pressable
      style={[
        styles.button,
        {backgroundColor: typeObject[type].backgroundColor},
      ]}
      onPress={handlePress}
      disabled={disabled}>
      {type === 'google' ? <Google /> : <Kakao />}
      <Text
        style={[
          styles.text,
          {color: typeObject[type].color},
        ]}>{`${typeObject[type].title}로 로그인`}</Text>
      <View />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56,
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingHorizontal: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});
