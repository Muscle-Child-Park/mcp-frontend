import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from 'src/constants/colors';
import {BasicProps} from 'src/navigation/MainNavigator';

interface Props {
  mode?: 'success' | 'required';
}

export default function TodayReservation({mode = 'required'}: Props) {
  const navigation = useNavigation<BasicProps>();
  const handlePress = () => {
    if (mode === 'success') return;
    navigation.navigate('JournalScreen', {screen: '운동 추가'});
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.menteeName}>누구누구 회원님</Text>
        <Text style={styles.time}>오전 10:00</Text>
      </View>
      <Pressable
        style={[
          styles.buttonContainer,
          mode === 'required' && {backgroundColor: colors.primary},
        ]}
        onPress={handlePress}>
        <Text style={styles.buttonText}>
          {mode === 'required' ? '작성 필요' : '작성 완료'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    opacity: 0.8,
    backgroundColor: colors.background,
    padding: 16,
  },
  textContainer: {
    gap: 3,
  },
  menteeName: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: colors.gray100,
  },
  time: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: colors.gray50,
  },
  buttonContainer: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: colors.gray100,
    borderRadius: 8,
    justifyContent: 'center',
    height: 32,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: 'white',
  },
});
