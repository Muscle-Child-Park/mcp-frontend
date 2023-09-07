import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TimeButton from './TimeButton';
import {afternoon, morning} from 'src/constants/time';

type timeType = '오전' | '오후';

interface Props {
  title: timeType;
  onSelectTime: (time: string) => void;
  selected: string | null;
}

const TimeSelection = ({title, onSelectTime, selected}: Props) => {
  const timeList = title === '오전' ? morning : afternoon;
  const Time3x3List = Array.from(
    {length: Math.ceil(timeList.length / 3)},
    (_, i) => timeList.slice(i * 3, i * 3 + 3),
  );
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {Time3x3List.map((time, index) => (
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
      {/* <FlatList
        data={title === '오전' ? morning : afternoon}
        keyExtractor={item => String(item.id)}
        renderItem={({item: {time, isActive}}) => (
          <TimeButton
            time={time}
            onSelectTime={onSelectTime}
            selected={selected}
            isActive={isActive}
          />
        )}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: 'left',
    marginBottom: 7,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    gap: 7,
    marginBottom: 8,
  },
});

export default TimeSelection;
