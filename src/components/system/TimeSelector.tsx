import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TimeButton from './TimeButton';
import {afternoon, morning} from 'src/constants/time';
import {colors} from 'src/constants/colors';

type timeType = '오전' | '오후';

interface Props {
  title: timeType;
  onSelectTime: (time: string[]) => void;
  selected: string[] | null;
}

const TimeSelection = ({title, onSelectTime, selected}: Props) => {
  const timeList = title === '오전' ? morning : afternoon;
  const Time4x4List = Array.from(
    {length: Math.ceil(timeList.length / 4)},
    (_, i) => timeList.slice(i * 4, i * 4 + 4),
  );

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      {Time4x4List.map((time, index) => (
        <View style={styles.row} key={index}>
          {time.map(({time, isActive, id}) => (
            <TimeButton
              time={time}
              onSelectTime={onSelectTime}
              selected={selected}
              isActive={isActive}
              key={id}
            />
          ))}
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.6,
    letterSpacing: 0,
    // textAlign: 'left',
    marginBottom: 8,
    color: colors.gray100,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    gap: 5,
    paddingBottom: 4,
  },
});

export default TimeSelection;
