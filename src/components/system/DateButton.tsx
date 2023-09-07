import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {format} from 'date-fns';
import {colors} from 'src/constants/colors';
import {ko} from 'date-fns/locale';

interface Props {
  date: Date;
  onSelectDate: (fullDateInfo: string) => void;
  selected: string | null;
}

const DateButton = ({date, onSelectDate, selected}: Props) => {
  /**
   * use moment to compare the date to today
   * if today, show 'Today'
   * if not today, show day of the week e.g 'Mon', 'Tue', 'Wed'
   */
  const fullDate = format(date, 'yyy-MM-dd');
  const day =
    fullDate === format(new Date(), 'yyy-MM-dd')
      ? '오늘'
      : format(date, 'E', {locale: ko});
  // get the day number e.g 1, 2, 3, 4, 5, 6, 7
  const dayNumber = format(date, 'd');
  return (
    <TouchableOpacity
      onPress={() => onSelectDate(fullDate)}
      style={[
        styles.card,
        selected === fullDate && {
          backgroundColor: colors.primaryMoreLight,
          borderWidth: 1,
        },
      ]}>
      <Text style={[styles.medium, selected === fullDate && {}]}>{day}</Text>
      <View style={{height: 10}} />
      <Text
        style={[
          styles.big,
          selected === fullDate && {
            color: colors.primary,
          },
        ]}>
        {dayNumber}
      </Text>
    </TouchableOpacity>
  );
};

export default DateButton;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'transparent',
    borderRadius: 4,
    borderColor: colors.primary,
    paddingHorizontal: 0,
    paddingVertical: 8,
    // marginVertical: 10,
    alignItems: 'center',
    height: 63,
    width: 36,
    marginHorizontal: 6.2,
  },
  medium: {
    color: colors.gray100,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14.32,
  },
  big: {
    color: colors.gray100,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19.09,
  },
});
