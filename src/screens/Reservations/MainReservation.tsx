import {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Calendar from 'src/components/system/Calendar';

const MainReservation = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  return (
    <View style={[styles.box, {flex: 1, backgroundColor: '#fff'}]}>
      <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    padding: 20,
    // borderWidth: 1,
    // borderColor: '#b6c1cd',
  },
});

export default MainReservation;
