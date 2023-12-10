import {format} from 'date-fns';
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {RightArrow} from 'src/assets/images';
import DaySelector from 'src/components/system/DaySelector';
import TimeSelection from 'src/components/system/TimeSelector';
import {colors} from 'src/constants/colors';

export type DatSetMode = 'basic' | 'calendar';

interface Props {
  type: DatSetMode;
  selectedDay: string[] | null;
  onSelectDay: (time: string[]) => void;
  selectedDate: string[];
  onSelectedDate: (date: string[]) => void;
  selectedMorningTime: string[] | null;
  onSelectMorningTime: (time: string[]) => void;
  selectedAfternoonTime: string[] | null;
  onSelectAfternoonTime: (time: string[]) => void;
}

export default function DateSetting({
  type,
  selectedDay,
  onSelectDay,
  selectedDate,
  onSelectedDate,
  selectedMorningTime,
  onSelectMorningTime,
  selectedAfternoonTime,
  onSelectAfternoonTime,
}: Props) {
  const markedSelectedDate = selectedDate.reduce((acc, cur) => {
    acc[cur] = {selected: true};
    return acc;
  }, {} as Record<string, {selected: boolean}>);
  return type === 'basic' ? (
    <View style={styles.basicContainer}>
      <Text style={styles.basicTitle}>
        수업을 개설할 요일과 시간을 선택해주세요
      </Text>
      <DaySelector selected={selectedDay} onSelectDay={onSelectDay} />
      <TimeSelection
        title="오전"
        selected={selectedMorningTime}
        onSelectTime={onSelectMorningTime}
      />
      <View style={{height: 16}} />
      <TimeSelection
        title="오후"
        selected={selectedAfternoonTime}
        onSelectTime={onSelectAfternoonTime}
      />
    </View>
  ) : (
    <View style={styles.basicContainer}>
      <Calendar
        style={styles.calendar}
        enableSwipeMonths
        onDayPress={day => {
          if (selectedDate.includes(day.dateString)) {
            onSelectedDate(
              selectedDate.filter(date => date !== day.dateString),
            );
            return;
          }
          onSelectedDate(selectedDate.concat(day.dateString));
        }}
        renderArrow={direction => (
          <RightArrow
            style={{
              width: 24,
              height: 24,
              transform: [{rotate: direction === 'left' ? '180deg' : '360deg'}],
            }}
            fill={colors.dark1}
          />
        )}
        markedDates={markedSelectedDate}
        theme={{
          selectedDayBackgroundColor: colors.primary,
          arrowColor: colors.primary,
          dotColor: colors.primary,
          todayTextColor: colors.primary,
        }}
        // markedDates={{
        //   [selectedDate]: {
        //     selected: true,
        //     disableTouchEvent: true,
        //     selectedDotColor: 'orange',
        //   },
        // }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  basicContainer: {
    width: '100%',
    // gap: 16,
    // alignItems: 'center',
  },
  basicTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.gray100,
    paddingTop: 16,
    paddingBottom: 24,
  },
  calendar: {width: '100%'},
});
