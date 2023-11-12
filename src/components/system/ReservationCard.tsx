import MainCard from './MainCard';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {colors} from 'src/constants/colors';
import {RightArrow} from 'src/assets/images';
import ExerciseChips, {ExcerciseChipsType} from './ExerciseChips';

interface Props {
  text: string;
  time?: string;
  mode: ExcerciseChipsType;
  modeText?: string;
  handlePress?: () => void;
  handleCancel?: () => void;
  hasRightIcon?: boolean;
}

const ReservationCard = ({
  text,
  time,
  mode,
  modeText,
  handlePress,
  handleCancel,
  hasRightIcon = false,
}: Props) => {
  return (
    <Pressable style={styles.pressableContainer} onPress={handlePress}>
      <MainCard>
        <View style={styles.body}>
          <View style={styles.left}>
            <ExerciseChips mode={mode} chipText={modeText} />
            <Text style={styles.title}>{text}</Text>
            {time && <Text style={styles.time}>{time}</Text>}
          </View>
          {mode === 'reservationSuccess' && (
            <Pressable style={styles.right} onPress={handleCancel}>
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
    minHeight: 90,
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
