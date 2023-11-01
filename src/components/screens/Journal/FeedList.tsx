import {View, StyleSheet} from 'react-native';
import {MarkingProps} from 'react-native-calendars/src/calendar/day/marking';
import ReservationCard from '../../system/ReservationCard';
import {LogType} from 'src/types/type';
interface Props {
  logs: LogType[];
  // ListHeaderComponent: React.JSX.Element;
  markedDates: Record<string, MarkingProps>;
}

export default function FeedList({logs, markedDates}: Props) {
  if (!logs.length) return; // for test
  const data = markedDates[logs[0].date].dots;
  if (data === undefined) return <View />;
  // console.log(data);
  return (
    <View style={styles.container}>
      {data?.map((item, idx) => (
        // <FeedListItem log={item.key!} key={idx} />
        <ReservationCard
          text={
            item.key === 'walking'
              ? '하체, 유산소 운동'
              : item.key === 'running'
              ? '런닝'
              : '싸이클'
          }
          time={
            item.key === 'walking'
              ? '09:00 - 10:00'
              : item.key === 'running'
              ? '10:00 - 11:00'
              : '14:00 - 16:00'
          }
          mode={
            item.key === 'walking'
              ? 'personalExercise'
              : item.key === 'running'
              ? 'pt'
              : 'pt'
          }
          key={idx}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    gap: 8,
  },
});
