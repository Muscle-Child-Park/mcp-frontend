import React, {useCallback, useMemo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  Profiler,
  Calendar,
  CalendarList,
  ExpandableCalendar,
  CalendarProvider,
  DateData,
} from 'react-native-calendars';
import {colors} from 'src/constants/colors';

const INITIAL_DATE = '2023-08-26';
const leftArrowIcon = require('src/assets/images/prev.png');
const rightArrowIcon = require('src/assets/images/next.png');

const MainReservation = () => {
  const [selectedDate, setSelectedDate] = useState(INITIAL_DATE);
  const onDayPress = useCallback(
    (day: DateData) => {
      setSelectedDate(day.dateString);
    },
    [selectedDate],
  );
  const marked = useMemo(() => {
    return {
      [selectedDate]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: colors.primaryMoreLight,
        selectedTextColor: colors.primary,
        customContainerStyle: {},
      },
    };
  }, [selectedDate]);

  return (
    <CalendarProvider date={INITIAL_DATE}>
      <ExpandableCalendar
        theme={{
          calendarBackground: '#fff',
          arrowColor: colors.dark1,
          arrowStyle: {
            // borderWidth: 1,
            // borderColor: 'red',
            // alignSelf: 'center',
          },
        }}
        pastScrollRange={3}
        futureScrollRange={3}
        allowShadow={false}
        leftArrowImageSource={leftArrowIcon}
        rightArrowImageSource={rightArrowIcon}
        onDayPress={onDayPress}
        markedDates={marked}
        style={styles.calendar}
      />
    </CalendarProvider>
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 1,
    borderColor: '#b6c1cd',
  },
});

export default MainReservation;
