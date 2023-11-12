import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, findNodeHandle} from 'react-native';
import ReservationCard from 'src/components/system/ReservationCard';
import {colors} from 'src/constants/colors';
import {JournalStackProps} from 'src/navigation/JournalNavigator';
import CustomHeader from './CustomHeader';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';
import {useUserContext} from 'src/context/UserContext';

interface Props {
  onTabPress: () => void;
  listData: Record<string, MarkingProps>;
}
export default function ListView({onTabPress, listData}: Props) {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const navigation = useNavigation<JournalStackProps>();
  const {
    state: {type},
  } = useUserContext();
  const isMentee = type === 'mentee';
  const [currentTitle, setCurrentTitle] = useState(
    `${currentMonth}월 ${currentYear}`,
  );
  const scrollViewRef = useRef<ScrollView>(null);
  const innerHeaderRefs = useRef<View[]>([]);
  const dates = Object.keys(listData).map(date => {
    return {
      date,
      list: listData[date].dots?.map(dot => dot.key),
    };
  });
  const shouldShowNewMonth = (currentMonth: string, prevMonth: string) => {
    return currentMonth.split('-')[1] !== prevMonth.split('-')[1];
  };
  const handleScroll = (event: any) => {
    // Check each inner header's position
    const offsetY = event.nativeEvent.contentOffset.y;
    innerHeaderRefs.current.forEach((innerHeaderRef, index) => {
      if (!scrollViewRef.current) return;

      // innerHeaderRef.measure((x, y, width, height, pageX, pageY) => {
      //   console.log(pageY, offsetY, x, y, width, height);
      //   if (pageY <= offsetY && pageY + height > offsetY) {
      //     // The inner header is currently at the top of the ScrollView
      //     console.log(`Inner Header ${index + 1} is at the top.`);
      //     // Change the outer header's title here
      //   }
      // });

      innerHeaderRef.measureLayout(
        scrollViewRef.current.getInnerViewNode(),
        (x, y, width, height) => {
          // `y` is the position of the inner header relative to the ScrollView's inner view
          if (y <= offsetY && y + height >= offsetY) {
            // The inner header is currently at the top of the ScrollView
            console.log(`down`);
            // Change the outer header's title here
            const [year, month] = dates[index].date.split('-');
            setCurrentTitle(`${month}월 ${year}`);
          }

          // scroll up
          if (y > offsetY && y - height <= offsetY) {
            // The inner header is currently at the top of the ScrollView
            console.log(`up`);
            // Change the outer header's title here
            const [year, month] = dates[index - 1].date.split('-');
            setCurrentTitle(`${month}월 ${year}`);
          }
        },
      );
    });
  };

  const renderInnerMonthHeader = (date: string, index: number) => {
    const ref = (el: View | null) => {
      if (el !== null) {
        // console.log(innerHeaderRefs.current[index]);
        innerHeaderRefs.current[index] = el;
      }
    };
    return (
      <CustomHeader
        ref={ref}
        title={`${date.split('-')[1]}월 ${date.split('-')[0]}`}
        type="calendar"
        hiddenButton
        hiddenYear
      />
    );
  };

  /* date(일)에 속하는 운동 리스트들을 나열 (각 일의 첫번째 row의 왼쪽에 날짜를 표시) */
  const renderList = (date: {
    date: string;
    list: (string | undefined)[] | undefined;
  }) => {
    return date.list?.map((item, idx) => {
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
              mode="personalTraining"
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
  };

  // useEffect(() => {
  //   console.log(scrollViewRef.current?.getInnerViewNode());
  // }, [scrollViewRef.current]);

  return (
    <View style={styles.container}>
      <CustomHeader
        onPress={onTabPress}
        title={currentTitle}
        type="calendar"
        hiddenButton={!isMentee}
      />
      <ScrollView
        ref={scrollViewRef}
        style={styles.listWrapper}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={1} // 이벤트 발생 간격 (TODO: 빠르게 내리면 버그 발생...)
      >
        <View style={styles.list}>
          {dates?.map((date, i) => {
            // 다음 달로 넘어갈 때, 새로운 달의 헤더를 추가하여 렌더링
            if (i > 0 && shouldShowNewMonth(date.date, dates[i - 1].date)) {
              return (
                <View key={'monthRow' + i}>
                  {renderInnerMonthHeader(date.date, i)}
                  {renderList(date)}
                </View>
              );
            }
            return renderList(date);
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 15,
    flex: 1,
  },
  listWrapper: {
    flex: 1,
  },
  list: {
    flex: 1,
    padding: 1,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 14,
  },
});
