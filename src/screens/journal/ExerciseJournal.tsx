import React, {useMemo, useState} from 'react';
import {format} from 'date-fns';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import {SafeAreaView, StatusBar, StyleSheet, ScrollView} from 'react-native';
import ListView from 'src/components/screens/Journal/ListView';
import CalendarView from 'src/components/screens/Journal/CalendarView';
import {CalendarHeaderType} from 'src/types/type';

export default function ExerciseJournal() {
  const [selectedTab, isSelectedTab] = useState<CalendarHeaderType>('calendar');
  const [selectedDate, setSelectedDate] = useState<string>(
    format(new Date(), 'yyyy-MM-dd'),
  );
  // 로그가 작성된 날짜
  // const markedDates = {
  //   '2023-09-08': {
  //     selected: true,
  //   },
  //   '2023-09-09': {
  //     selected: true,
  //   },
  //   '2023-09-10': {
  //     selected: true,
  //   },
  // };
  // const logs = ['2023-10-29', '2023-10-30', '2023-10-31'];
  const logs = ['2023-11-01', '2023-11-02', '2023-11-03'];
  const running = {key: 'running', color: 'blue'};
  const cycling = {key: 'cycling', color: 'green'};
  const walking = {key: 'walking', color: 'orange'};

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, cur) => {
        const formattedDate = format(new Date(cur), 'yyyy-MM-dd');
        acc[formattedDate] = {
          marked: true,
          dots:
            cur === '2023-10-30'
              ? [running, walking]
              : [running, cycling, walking],
        };
        return acc;
      }, {} as Record<string, MarkingProps>),
    [logs],
  );
  const filteredLogs = logs
    .filter(log => format(new Date(log), 'yyyy-MM-dd') === selectedDate)
    .map((log, idx) => ({
      id: idx,
      date: log,
    }));
  const handleTabPress = (tab: CalendarHeaderType) => isSelectedTab(tab);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView style={styles.container}>
        {selectedTab === 'calendar' ? (
          <CalendarView
            selectDate={selectedDate}
            onSelectDate={setSelectedDate}
            markedDates={markedDates}
            logs={filteredLogs}
            onTabPress={() => handleTabPress('list')}
          />
        ) : (
          <ListView onTabPress={() => handleTabPress('calendar')} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
