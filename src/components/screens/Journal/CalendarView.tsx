import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import {colors} from 'src/constants/colors';
import {
  View,
  Text,
  TouchableOpacity,
  type TextStyle,
  type StyleProp,
  StyleSheet,
} from 'react-native';
import {LogType} from 'src/types/type';
import CustomHeader from './CustomHeader';
import FeedList from './FeedList';

LocaleConfig.locales['ko'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};

LocaleConfig.defaultLocale = 'ko';

interface Props {
  selectDate: string;
  onSelectDate: (date: string) => void;
  markedDates: Record<string, MarkingProps>;
  logs: LogType[];
  onTabPress: () => void;
}

export default function CalendarView({
  selectDate,
  onSelectDate,
  markedDates,
  logs,
  onTabPress,
}: Props) {
  const markedSelectedDate = {
    ...markedDates,
    [selectDate]: {
      selected: true,
      marked: markedDates[selectDate]?.marked,
    },
  };
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const [currentTitle, setCurrentTitle] = useState(
    `${currentMonth}월 ${currentYear}`,
  );
  // console.log(markedDates, markedSelectedDate, selectDate);
  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        enableSwipeMonths
        hideArrows
        onMonthChange={date => {
          setCurrentTitle(`${date.month}월 ${date.year}`);
        }}
        customHeaderTitle={
          <CustomHeader onPress={onTabPress} title={currentTitle} type="list" />
        }
        markingType="multi-dot"
        markedDates={markedSelectedDate}
        onDayPress={day => {
          onSelectDate(day.dateString);
        }}
        theme={{
          selectedDayBackgroundColor: colors.primary,
          arrowColor: colors.primary,
          dotColor: colors.primary,
          todayTextColor: colors.primary,
        }}
      />
      <View style={styles.separator} />
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>나의 운동</Text>
        <FeedList logs={logs} markedDates={markedDates} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: colors.primary,
  },
  calendar: {
    marginVertical: 13.5,
    margin: 4.5,
  },
  separator: {
    height: 8,
    backgroundColor: colors.background,
  },
  listContainer: {
    margin: 20,
  },
  listTitle: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
    color: colors.gray100,
  },
});
