import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
import Calendar from 'src/components/system/Calendar';
import CustomButton from 'src/components/system/CustomButton';
import HorizonLine from 'src/components/system/HorizonLine';
import TimeSelection from 'src/components/system/TimeSelector';
import NextReservationStep from './NextReservationStep';
import {colors} from 'src/constants/colors';

type ReservationStackParamList = {
  MainScreen: undefined;
  NextScreen: undefined;
  SuccessScreen: undefined;
};
const Stack = createNativeStackNavigator<ReservationStackParamList>();
type Props = NativeStackScreenProps<ReservationStackParamList, 'MainScreen'>;
// export type NextProps = NativeStackScreenProps<
//   ReservationStackParamList,
//   'NextScreen'
// >;
// export type SuccessProps = NativeStackScreenProps<
//   ReservationStackParamList,
//   'SuccessScreen'
// >;

const MainReservation = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainScreen" component={Reservation} />
      <Stack.Screen name="NextScreen" component={NextReservationStep} />
    </Stack.Navigator>
  );
};

const Reservation = ({navigation}: Props) => {
  // Context로 만들기
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  console.log(!selectedDate || !selectedTime, selectedDate, selectedTime);
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
          <View style={{height: 8}} />
          <TimeSelection
            title="오후"
            onSelectTime={setSelectedTime}
            selected={selectedTime}
          />
          <View style={styles.buttonContainer}>
            <CustomButton
              layoutmode="fullWidth"
              title="선택완료"
              variant="big"
              disabled={!selectedDate || !selectedTime}
              bgColor={colors.primary}
              onPress={() => {
                // TODO: disabled가 안먹히는 버그 해결하기
                if (!selectedDate || !selectedTime) return;
                navigation.navigate('NextScreen');
              }}
            />
          </View>
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
    marginBottom: 22,
    flex: 1,
  },
  box: {
    flex: 1,
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#b6c1cd',
  },
  semiTitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.71,
    color: colors.gray100,
    marginBottom: 13,
    letterSpacing: 0,
    textAlign: 'left',
  },
  buttonContainer: {
    marginTop: 24,
  },
});

export default MainReservation;
