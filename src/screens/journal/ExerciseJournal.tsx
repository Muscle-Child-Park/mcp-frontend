import {useNavigation} from '@react-navigation/native';
import React, {useMemo, useState} from 'react';
import SwitchButton from 'src/components/system/SwitchButton';
import CalendarView from 'src/components/system/CalendarView';
import {format} from 'date-fns';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import FeedList from 'src/components/system/FeedList';
import ReservationCard from 'src/components/system/ReservationCard';
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
} from 'react-native';
import {colors} from 'src/constants/colors';
import {Props} from '../../navigation/JournalNavigator';

export default function ExerciseJournal() {
  const [selectedTab, isSelectedTab] = useState<0 | 1>(0);
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
  const logs = ['2023-10-24', '2023-10-25', '2023-10-26'];
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
            cur === '2023-10-25'
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
  const navigation = useNavigation<Props>();
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={[styles.container]}>
        <SwitchButton selectedTab={selectedTab} isSelectedTab={isSelectedTab} />
        {selectedTab === 0 ? (
          <FeedList
            logs={filteredLogs}
            ListHeaderComponent={
              <CalendarView
                selectDate={selectedDate}
                onSelectDate={setSelectedDate}
                markedDates={markedDates}
              />
            }
          />
        ) : (
          <View style={{marginHorizontal: 20, gap: 8}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 14,
              }}>
              <View style={{gap: 9, alignItems: 'center'}}>
                <Text
                  style={{
                    color: colors.gray100,
                    fontWeight: '600',
                    fontSize: 18,
                    lineHeight: 21.6,
                  }}>
                  12
                </Text>
                <Text
                  style={{
                    color: colors.gray100,
                    fontWeight: '400',
                    fontSize: 14,
                    lineHeight: 16.8,
                  }}>
                  토요일
                </Text>
              </View>
              <ReservationCard
                text="하체, 유산소 운동"
                time="09:00 - 10:00"
                mode="pt"
                handlePress={() => navigation.navigate('수업 상세')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 14,
              }}>
              <View
                style={{
                  gap: 9,
                  alignItems: 'center',
                  width: 40,
                  // flex: 0,
                }}></View>
              <ReservationCard
                text="유산소"
                time="10:30 - 11:00"
                mode="personalExercise"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 14,
              }}>
              <View style={{gap: 9, alignItems: 'center'}}>
                <Text
                  style={{
                    color: colors.gray100,
                    fontWeight: '600',
                    fontSize: 18,
                    lineHeight: 21.6,
                  }}>
                  10
                </Text>
                <Text
                  style={{
                    color: colors.gray100,
                    fontWeight: '400',
                    fontSize: 14,
                    lineHeight: 16.8,
                  }}>
                  금요일
                </Text>
              </View>
              <ReservationCard text="코어" time="09:00 - 10:00" mode="pt" />
            </View>
          </View>
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
