import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {BasicProps} from 'src/navigation/MainNavigator';
import {StyleSheet, SafeAreaView, ScrollView, View, Text} from 'react-native';
import Calendar from 'src/components/system/Calendar';
import HorizonLine from 'src/components/system/HorizonLine';
import TimeSelection from 'src/components/system/TimeSelector';
import CustomButton from 'src/components/system/CustomButton';
import ConfirmModal from 'src/components/system/CenterModal/ConfirmModal';
import {colors} from 'src/constants/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReservationCard from 'src/components/system/ReservationCard';

type ReservationStackParamList = {
  TrainerSelect: undefined;
  DateSelect: undefined;
};

const Stack = createNativeStackNavigator<ReservationStackParamList>();
type ReservationStackProps = NativeStackScreenProps<ReservationStackParamList>;

export default function MainReservation() {
  return (
    <Stack.Navigator
      initialRouteName="TrainerSelect"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TrainerSelect" component={TrainerSelect} />
      <Stack.Screen name="DateSelect" component={DateSelect} />
    </Stack.Navigator>
  );
}

const TrainerSelect = ({navigation}: ReservationStackProps) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.boxContainer}>
        <View style={[styles.box, {gap: 20}]}>
          <ReservationCard
            hasRightIcon
            text="정지현 트레이너님"
            time="등록일: YY/MM/DD"
            mode="ticketCounting"
            modeText="1/7회"
            handlePress={() => navigation.navigate('DateSelect')}
          />
          <ReservationCard
            hasRightIcon
            text="이호정 트레이너님"
            time="등록일: YY/MM/DD"
            mode="ticketCounting"
            modeText="1/7회"
            handlePress={() => navigation.navigate('DateSelect')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const DateSelect = () => {
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
      <ScrollView style={styles.boxContainer}>
        <View style={styles.box}>
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
    flex: 1,
    backgroundColor: '#fff',
    // borderWidth: 1,
    // borderColor: '#b6c1cd',
  },
  box: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 22,
    flex: 1,
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
