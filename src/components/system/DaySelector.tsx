import {View} from 'react-native';
import {daysofweek} from 'src/constants/time';
import TimeButton from './TimeButton';

interface Props {
  selected: string[] | null;
  onSelectDay: (time: string[]) => void;
}

export default function DaySelector({selected, onSelectDay}: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 16,
      }}>
      {daysofweek.map(day => (
        <TimeButton
          time={day}
          onSelectTime={onSelectDay}
          selected={selected}
          isActive
          key={day}
          isSmall
        />
      ))}
    </View>
  );
}
