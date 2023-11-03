import {useNavigation} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {useState} from 'react';
import {View, StyleSheet, Text, ScrollView, SafeAreaView} from 'react-native';
import Calendar from 'src/components/system/Calendar';
import ConfirmModal from 'src/components/system/CenterModal/ConfirmModal';
import CustomButton from 'src/components/system/CustomButton';
import HorizonLine from 'src/components/system/HorizonLine';
import TimeSelection from 'src/components/system/TimeSelector';
import {colors} from 'src/constants/colors';
import {NextReservationStep} from 'src/screens/Reservations';
import {BasicProps} from './MainNavigator';

type ReservationStackParamList = {
  MainScreen: undefined;
  NextScreen: undefined;
  SuccessScreen: undefined;
};
const Stack = createNativeStackNavigator<ReservationStackParamList>();
type ReservationStackProps = NativeStackScreenProps<
  ReservationStackParamList,
  'MainScreen'
>;
// export type NextProps = NativeStackScreenProps<
//   ReservationStackParamList,
//   'NextScreen'
// >;
// export type SuccessProps = NativeStackScreenProps<
//   ReservationStackParamList,
//   'SuccessScreen'
// >;

export default function ReservationNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainScreen" component={Reservation} />
      <Stack.Screen name="NextScreen" component={NextReservationStep} />
    </Stack.Navigator>
  );
}

const Reservation = () => {
  // Context로 만들기
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<BasicProps>();
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleConfirm = () => {
    // TODO: 화면 뮤테이션이 있는데, 이는 잠깐의 로딩을 주어서 처리하자
    setModalVisible(false);
    navigation.navigate('ReservationResultScreen');
  };
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
              text="선택완료"
              variant="fillPrimary"
              disabled={!selectedDate || !selectedTime}
              onPress={() => {
                // TODO: disabled가 안먹히는 버그 해결하기
                if (!selectedDate || !selectedTime) return;
                setModalVisible(true);
              }}
            />
          </View>
        </View>
      </ScrollView>
      <ConfirmModal
        modalVisible={modalVisible}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        title={`8월 9일 오후 9:00시
수업을 예약하시겠어요?`}
        description="수업 취소는 전날까지 가능해요"
        confirmText="예약하기"
        isCancel
      />
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
