import React from 'react';
import MainCard from './MainCard';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {colors} from 'src/constants/colors';
import ExcerciseChips, {ExcerciseChipsType} from './ExcerciseChips';
import {RightArrow} from 'src/assets/images';

interface Props {
  text: string;
  time: string;
  mode: ExcerciseChipsType;
  handlePress?: () => void;
  hasRightIcon?: boolean;
}

const ReservationCard = ({
  text,
  time,
  mode,
  handlePress,
  hasRightIcon = false,
}: Props) => {
  return (
    <Pressable style={styles.pressableContainer} onPress={handlePress}>
      <MainCard>
        <View style={styles.body}>
          <View style={styles.left}>
            <ExcerciseChips mode={mode} />
            <Text style={styles.title}>{text}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
          {mode === 'reservationSuccess' && (
            <Pressable style={styles.right} onPress={() => {}}>
              <Text style={styles.cancelText}>예약 취소</Text>
            </Pressable>
          )}
          {hasRightIcon && (
            <RightArrow style={{width: 24, height: 24}} fill={colors.dark1} />
          )}
        </View>
      </MainCard>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressableContainer: {
    flex: 1,
    maxHeight: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    alignItems: 'flex-start',
    gap: 4,
  },
  right: {},
  title: {
    color: colors.gray100,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19.2,
  },
  time: {
    color: colors.gray100,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
  },
  cancelText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
    color: colors.gray100,
  },
});

export default ReservationCard;
