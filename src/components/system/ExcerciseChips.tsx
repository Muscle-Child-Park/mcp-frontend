import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'src/constants/colors';

export type ExcerciseChipsType =
  | 'pt'
  | 'today'
  | 'cancelSuccess'
  | 'classSuccess'
  | 'reservationSuccess'
  | 'personalExercise';

interface Props {
  mode: ExcerciseChipsType;
}

const text = {
  pt: 'PT',
  today: '오늘',
  cancelSuccess: '취소완료',
  classSuccess: '수업완료',
  reservationSuccess: '예약완료',
  personalExercise: '개인운동',
};

const ExcerciseChips = ({mode}: Props) => {
  return (
    <View
      style={[
        styles.box,
        mode === 'pt' && {backgroundColor: colors.primaryMoreLight2},
        mode === 'personalExercise' && {backgroundColor: '#FFF3FC'},
        mode === 'today' && {backgroundColor: colors.primary},
        mode === 'reservationSuccess' && {
          backgroundColor: colors.primaryMoreLight,
        },
        mode === 'classSuccess' && {backgroundColor: '#FAFBFF'},
        mode === 'cancelSuccess' && {backgroundColor: '#F3F3F3'},
      ]}>
      <Text
        style={[
          styles.text,
          mode === 'pt' && {color: colors.primary},
          mode === 'personalExercise' && {color: colors.secondary},
          mode === 'today' && {color: 'white'},
          mode === 'reservationSuccess' && {color: colors.primary},
          mode === 'classSuccess' && {color: colors.blueLighten},
          mode === 'cancelSuccess' && {color: colors.gray50},
        ]}>
        {text[mode]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  text: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14.4,
  },
});

export default ExcerciseChips;
