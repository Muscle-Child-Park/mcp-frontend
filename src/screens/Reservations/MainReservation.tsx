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
import SuccessReservationStep from './SuccessReservationStep';

type ReservationStackParamList = {
  MainScreen: undefined;
  NextScreen: undefined;
  SuccessScreen: undefined;
};
const Stack = createNativeStackNavigator<ReservationStackParamList>();
type Props = NativeStackScreenProps<ReservationStackParamList, 'MainScreen'>;
export type NextProps = NativeStackScreenProps<
  ReservationStackParamList,
  'NextScreen'
>;
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
      <Stack.Screen name="SuccessScreen" component={SuccessReservationStep} />
    </Stack.Navigator>
  );
};

const Reservation = ({navigation}: Props) => {
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
            onPress={() => {
              navigation.navigate('NextScreen');
            }}
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
    marginBottom: 16.34,
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
