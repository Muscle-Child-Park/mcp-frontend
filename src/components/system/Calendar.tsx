import {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import DateButton from './DateButton';
import {add, format, getWeek} from 'date-fns';
import {ko} from 'date-fns/locale';
import {Next, Prev} from 'src/assets/images';
import {colors} from 'src/constants/colors';
import {TouchableOpacity} from 'react-native';
import {getWeekOfDay} from 'src/utils/weekOfMonth';

interface Props {
  onSelectDate: (fullDateInfo: string) => void;
  selected: string | null;
}

// const leftArrowIcon = require('src/assets/images/prev.png');
// const rightArrowIcon = require('src/assets/images/next.png');

const Calendar = ({onSelectDate, selected}: Props) => {
  const [dates, setDates] = useState<Date[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentMonth, setCurrentMonth] = useState<string>(
    `${format(new Date(), 'MMM', {locale: ko})} ${getWeekOfDay(
      new Date(),
    )}주차`,
  );

  // get the dates from today to 10 days from now, format them as strings and store them in state
  const getDates = () => {
    const _dates = [];
    for (let i = 0; i < 60; i++) {
      const date = add(new Date(), {days: i});
      _dates.push(date);
    }
    setDates(_dates);
  };

  useEffect(() => {
    getDates();
  }, []);

  const getCurrentMonth = () => {
    // 60개 기준 스크롤할때마다 위치가 더 증가한다. 따라서 0.96를 주어 늘어나는 속도를 느리게한다.
    const changedDate = add(dates[0], {
      days: Math.floor(scrollPosition / 45) * 0.96,
    });
    if (!dates[0]) return;
    const month = format(changedDate, 'MMM', {locale: ko});
    const weekOfDay = getWeekOfDay(changedDate);
    setCurrentMonth(`${month} ${weekOfDay}주차`);
  };

  useEffect(() => {
    getCurrentMonth();
  }, [scrollPosition]);

  return (
    <>
      <View style={styles.centered}>
        <TouchableOpacity onPress={() => {}}>
          <Prev style={{width: 24, height: 24}} fill={colors.dark1} />
        </TouchableOpacity>
        <Text style={styles.title}>{`${currentMonth}`}</Text>
        <TouchableOpacity onPress={() => {}}>
          <Next style={{width: 24, height: 24}} fill={colors.dark1} />
        </TouchableOpacity>
      </View>
      <View style={styles.dateSection}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={e => setScrollPosition(e.nativeEvent.contentOffset.x)}>
          {dates.map((date, index) => (
            <DateButton
              key={index}
              date={date}
              onSelectDate={onSelectDate}
              selected={selected}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  centered: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 23.87,
    paddingHorizontal: 20,
  },
  dateSection: {
    width: '100%',
    // height: 150,
    paddingTop: 20,
    paddingBottom: 0,
  },
});
