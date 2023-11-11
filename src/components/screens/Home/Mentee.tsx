import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import CustomButton from 'src/components/system/CustomButton';
import MainCard from 'src/components/system/MainCard';
import SmallBox from 'src/components/system/SmallBox';
import {HomeTabProps} from 'src/navigation/HomeNavigator';
import {BasicProps} from 'src/navigation/MainNavigator';
import CustomHeader from './CustomHeader';
import ProgressBar from './ProgressBar';
import {colors} from 'src/constants/colors';

type HomeScreenProp = CompositeNavigationProp<HomeTabProps, BasicProps>;

interface Props {
  username: string;
}

export default function Mentee({username}: Props) {
  const [isRegistered, setIsRegistered] = useState(false); // TODO: 선생님 등록 여부
  const {width} = useWindowDimensions();
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <>
      <Text style={[styles.title, {width: width - 40}]}>
        {`${username}님,
오늘도 힘내볼까요?`}
      </Text>
      {isRegistered ? (
        <>
          <MainCard>
            <View style={styles.trainerBoxContainer}>
              <Text style={styles.trainerInfo}>
                김민재 트레이너님 (빌리프짐)
              </Text>
              <Text style={styles.remainCount}>3 / 10 회 남았어요!</Text>
            </View>
            <ProgressBar percent={30} />
          </MainCard>
          <MainCard>
            <View style={styles.reservationContainer}>
              <CustomHeader headerSize="h4" headerText="이번주 예약" />
              <View style={styles.smallBoxContainer}>
                <SmallBox header="하체, 유산소" body="5일 (토) 오전 10:00" />
                <SmallBox header="코어" body="5일 (토) 오전 10:00" />
              </View>
              <View style={styles.buttonContainer}>
                <CustomButton
                  text="수업 예약하기"
                  onPress={() => {
                    navigation.navigate('ReservationTab');
                  }}
                  variant="fillPrimary"
                />
              </View>
            </View>
          </MainCard>
        </>
      ) : (
        <MainCard>
          <View style={styles.emptyContainer}>
            <CustomHeader headerSize="h4" headerText="등록된 수강권이 없어요" />
            <CustomButton
              text="선생님 등록하기러 가기"
              onPress={() => {
                navigation.navigate('UserRegistrationScreen');
              }}
              layoutmode="basic"
              variant="fillPrimary"
            />
          </View>
        </MainCard>
      )}
      <Pressable
        onPress={() => {
          navigation.navigate('JournalScreen', {screen: '운동 일지'});
        }}>
        <MainCard>
          <View style={styles.exerciseJournalContainer}>
            <CustomHeader headerSize="h4" headerText="운동일지" />
            <Text style={styles.text}>
              PT 수업부터 개인운동까지 운동기록을 확인해보세요
            </Text>
          </View>
        </MainCard>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    height: 68,
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 33.6,
    color: colors.gray100,
    marginTop: 52,
    marginBottom: 16,
  },
  trainerBoxContainer: {
    gap: 5,
  },
  smallBoxContainer: {gap: 6},
  buttonContainer: {
    width: '100%',
  },
  text: {
    color: '#8B8B8B',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
  },
  trainerInfo: {
    color: colors.gray100,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
  },
  remainCount: {
    color: colors.gray100,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
  },
  reservationContainer: {
    width: '100%',
    gap: 12,
    marginVertical: 4,
  },
  emptyContainer: {
    width: '100%',
    gap: 12,
    // marginVertical: 4,
  },
  exerciseJournalContainer: {
    gap: 8,
    marginVertical: 4,
  },
});
