import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ReservationCard from 'src/components/system/ReservationCard';
import {colors} from 'src/constants/colors';
import {JournalStackProps} from 'src/navigation/JournalNavigator';
import CustomHeader from './CustomHeader';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';

// TODO: 무한스크롤로 구현해야할 듯? > calendar이용할 수 있는지 조사
interface Props {
  onTabPress: () => void;
  listData: Record<string, MarkingProps>;
}
export default function ListView({onTabPress, listData}: Props) {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const navigation = useNavigation<JournalStackProps>();
  const [currentTitle, setCurrentTitle] = useState(
    `${currentMonth}월 ${currentYear}`,
  );
  const dates = Object.keys(listData).map(date => {
    return {
      date,
      list: listData[date].dots?.map(dot => dot.key),
    };
  });
  return (
    <View style={styles.container}>
      <CustomHeader onPress={onTabPress} title={currentTitle} type="calendar" />
      <View style={styles.list}>
        {dates?.map(date => {
          return date.list?.map((list, idx) => {
            if (idx === 0) {
              return (
                <View style={styles.row} key={idx}>
                  <View style={{gap: 9, alignItems: 'center'}}>
                    <Text
                      style={{
                        color: colors.gray100,
                        fontWeight: '600',
                        fontSize: 18,
                        lineHeight: 21.6,
                      }}>
                      {date.date.split('-')[2]}
                    </Text>
                    <Text
                      style={{
                        color: colors.gray100,
                        fontWeight: '400',
                        fontSize: 14,
                        lineHeight: 16.8,
                      }}>
                      {format(new Date(date.date), 'EEEE', {locale: ko})}
                    </Text>
                  </View>
                  <ReservationCard
                    hasRightIcon
                    text="하체, 유산소 운동"
                    time="09:00 - 10:00"
                    mode="pt"
                    handlePress={() => navigation.navigate('수업 상세')}
                  />
                </View>
              );
            } else {
              return (
                <View style={styles.row} key={idx}>
                  <View
                    style={{
                      gap: 9,
                      alignItems: 'center',
                      width: 40,
                      // flex: 0,
                    }}></View>
                  <ReservationCard
                    hasRightIcon
                    text="유산소"
                    time="10:30 - 11:00"
                    mode="personalExercise"
                  />
                </View>
              );
            }
          });
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 15,
  },
  list: {
    // flex: 1,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 14,
  },
});
