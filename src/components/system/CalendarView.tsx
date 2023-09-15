import React from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import {colors} from 'src/constants/colors';
import {
  View,
  Text,
  TouchableOpacity,
  type TextStyle,
  type StyleProp,
} from 'react-native';
import {Check, Smile} from 'src/assets/images';

interface Props {
  selectDate: string;
  onSelectDate: (date: string) => void;
  markedDates: Record<string, MarkingProps>;
}

LocaleConfig.locales['fr'] = {
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
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = 'fr';

const CalendarView = ({selectDate, onSelectDate, markedDates}: Props) => {
  const markedSelectedDate = {
    ...markedDates,
    [selectDate]: {
      selected: true,
      marked: markedDates[selectDate]?.marked,
    },
  };

  return (
    <View>
      <Calendar
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
        dayComponent={({date, state, theme, onPress, marking}) => {
          const getContentStyle = () => {
            const style = {
              content: {
                backgroundColor: 'transparent',
                borderRadius: 0,
                marginTop: 4,
              },
              text: {
                textAlign: 'center',
                color: '#2d4150', // 현재 달과 아닌 달의 날짜 색 차이
                fontSize: 14, // 16
                fontWeight: '400',
              },
            };

            if (state === 'today') {
              style.text.color = '#fff';
              style.content.backgroundColor = colors.primary;
              style.content.borderRadius = 50;
            } else if (state === 'disabled') {
              style.text.color = '#d9e1e8';
            }
            return style;
          };

          const contentStyle = getContentStyle();
          // console.log(marking, theme);
          if (!date) return;
          return (
            <View>
              <TouchableOpacity
                style={contentStyle.content}
                onPress={() => {
                  // click > onDayPress 동작
                  if (!onPress) return;
                  onPress(date);
                }}>
                <View
                  style={{
                    width: 32,
                    height: 32,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {marking?.dots?.length && (
                    <Smile
                      style={{width: 15, height: 15}}
                      fill={colors.primary}
                    />
                  )}
                  <Text style={contentStyle.text as StyleProp<TextStyle>}>
                    {date.day}
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {marking?.dots?.map(({color, key}) => (
                  <View
                    key={key}
                    style={{
                      backgroundColor: color,
                      width: 4,
                      height: 4,
                      borderRadius: 10,
                      marginHorizontal: 1,
                    }}
                  />
                ))}
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          marginVertical: 20,
          height: 8,
          backgroundColor: colors.background,
        }}
      />
      <Text
        style={{
          marginHorizontal: 20,
          marginBottom: 12,
          fontSize: 18,
          fontWeight: '600',
          lineHeight: 21.6,
          color: colors.gray100,
        }}>
        나의 운동
      </Text>
    </View>
  );
};

export default CalendarView;
