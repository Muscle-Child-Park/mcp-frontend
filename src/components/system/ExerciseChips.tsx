import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from 'src/constants/colors';

export type ExcerciseChipsType = keyof typeof text;

interface Props {
  mode: ExcerciseChipsType;
  chipText?: string;
}

const text = {
  personalTraining: 'PT',
  today: '오늘',
  cancellationSuccess: '취소완료',
  classCompletion: '수업완료',
  reservationSuccess: '예약완료',
  personalExercise: '개인운동',
  registrationComplete: '등록완료',
  approvalComplete: '승인완료',
  waitingForApproval: '승인대기중',
  expired: '회원권 만료',
  ticketCounting: '1/nn',
  empty: '',
};

const ExerciseChips = ({mode, chipText}: Props) => {
  return (
    <View
      style={[
        styles.box,
        (mode === 'personalTraining' ||
          mode === 'reservationSuccess' ||
          mode === 'registrationComplete' ||
          mode === 'approvalComplete' ||
          mode === 'ticketCounting' ||
          mode === 'empty') && {
          backgroundColor: colors.primaryMoreLight,
        },
        mode === 'personalExercise' && {backgroundColor: colors.redLighten},
        mode === 'today' && {backgroundColor: colors.primary},
        mode === 'classCompletion' && {backgroundColor: colors.blueLighten3},
        (mode === 'cancellationSuccess' ||
          mode === 'waitingForApproval' ||
          mode === 'expired') && {
          backgroundColor: colors.grayLighten,
        },
      ]}>
      <Text
        style={[
          styles.text,
          (mode === 'personalTraining' ||
            mode === 'reservationSuccess' ||
            mode === 'registrationComplete' ||
            mode === 'approvalComplete' ||
            mode === 'ticketCounting' ||
            mode === 'empty') && {color: colors.primary},
          mode === 'personalExercise' && {color: colors.red},
          mode === 'today' && {color: 'white'},
          mode === 'classCompletion' && {color: colors.blueLighten},
          (mode === 'cancellationSuccess' ||
            mode === 'waitingForApproval' ||
            mode === 'expired') && {
            color: colors.gray50,
          },
        ]}>
        {text[mode] === '1/nn'
          ? `${chipText}회`
          : text[mode] === ''
          ? chipText
          : text[mode]}
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

export default ExerciseChips;
