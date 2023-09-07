import {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
import Calendar from 'src/components/system/Calendar';
import CustomButton from 'src/components/system/CustomButton';
import HorizonLine from 'src/components/system/HorizonLine';
import TimeSelection from 'src/components/system/TimeSelector';

const MainReservation = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.box}>
        <View style={styles.boxContainer}>
          <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
          <HorizonLine isMarginVertical />
          <Text style={styles.semiTitle}>예약 가능한 시간</Text>
          <TimeSelection
            title="오전"
            onSelectTime={setSelectedTime}
            selected={selectedTime}
          />
          <View style={{height: 14}} />
          <TimeSelection
            title="오후"
            onSelectTime={setSelectedTime}
            selected={selectedTime}
          />
          <CustomButton
            layoutmode="fullWidth"
            title="다음으로"
            variant="big"
            bgColor="#333333"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  boxContainer: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  box: {
    flex: 1,
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#b6c1cd',
  },
  semiTitle: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21,
    color: 'black',
    marginBottom: 13,
    letterSpacing: 0,
    textAlign: 'left',
  },
});

export default MainReservation;
