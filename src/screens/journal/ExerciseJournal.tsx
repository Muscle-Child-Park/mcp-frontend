import React, {useMemo, useState} from 'react';
import {format} from 'date-fns';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import ListView from 'src/components/screens/Journal/ListView';
import CalendarView from 'src/components/screens/Journal/CalendarView';
import {CalendarHeaderType} from 'src/types/type';
import {colors} from 'src/constants/colors';

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
  const logs = [
    '2023-09-26',
    '2023-09-27',
    '2023-09-29',
    '2023-09-30',
    '2023-10-26',
    '2023-10-27',
    '2023-10-29',
    '2023-10-30',
    '2023-11-01',
    '2023-11-02',
    '2023-11-03',
    '2023-11-05',
    '2023-11-06',
    '2023-11-07',
    '2023-11-08',
    '2023-11-09',
    '2023-11-10',
  ].reverse();
  const pt = {key: 'personalTraining', color: colors.primary};
  const pe = {key: 'personalExercise', color: colors.red};

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, cur) => {
        const formattedDate = format(new Date(cur), 'yyyy-MM-dd');
        acc[formattedDate] = {
          marked: true,
          dots: cur === '2023-11-02' ? [pe] : [pt, pe],
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
      <View style={styles.container}>
        {selectedTab === 'calendar' ? (
          <CalendarView
            selectDate={selectedDate}
            onSelectDate={setSelectedDate}
            markedDates={markedDates}
            logs={filteredLogs}
            onTabPress={() => handleTabPress('list')}
          />
        ) : (
          <ListView
            onTabPress={() => handleTabPress('calendar')}
            listData={markedDates}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
