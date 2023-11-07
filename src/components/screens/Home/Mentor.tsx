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
import {colors} from 'src/constants/colors';
import CustomHeader from './CustomHeader';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {HomeTabProps} from 'src/navigation/HomeNavigator';
import {BasicProps} from 'src/navigation/MainNavigator';
import ReservationList from './ReservationList';

interface Props {
  username: string;
}

type HomeScreenProp = CompositeNavigationProp<HomeTabProps, BasicProps>;

export default function Mentor({username}: Props) {
  const [hasMentee, setHasMentee] = useState(true); // TODO: 학생 등록 여부
  const {width} = useWindowDimensions();
  const navigation = useNavigation<HomeScreenProp>();
  return (
    <>
      <Text style={[styles.title, {width: width - 40}]}>
        {`${username} 트레이너님,
오늘도 힘내볼까요?`}
      </Text>
      {hasMentee ? (
        <>
          <Pressable
            onPress={() => {
              navigation.navigate('UserRegistrationScreen');
            }}>
            <MainCard>
              <View style={styles.pressContainer}>
                <CustomHeader
                  headerSize="body4"
                  headerText="승인을 기다리는 학생이 있습니다"
                />
                <CustomHeader
                  headerSize="h4"
                  headerText="정지현 학생을 승인해주시겠나요?"
                />
              </View>
            </MainCard>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('예약');
            }}>
            <MainCard>
              <View style={styles.pressContainer}>
                <CustomHeader headerSize="body4" headerText="운동 일지" />
                <CustomHeader
                  headerSize="h4"
                  headerText="N개의 업데이트가 있어요"
                />
              </View>
            </MainCard>
          </Pressable>
          <MainCard>
            <View style={styles.todayReservationContainer}>
              <CustomHeader headerSize="h4" headerText="오늘 예약" />
              <ReservationList />
              <CustomButton
                text="캘린더 전체보기"
                layoutmode="basic"
                variant="fillPrimary"
              />
            </View>
          </MainCard>
        </>
      ) : (
        <MainCard>
          <View style={styles.emptyContainer}>
            <CustomHeader
              headerSize="h4"
              headerText="아직 등록된 수강생이 없어요"
            />
            <CustomButton
              text="회원 등록하러 가기"
              onPress={() => {
                navigation.navigate('UserRegistrationScreen');
              }}
              layoutmode="basic"
              variant="fillPrimary"
            />
          </View>
        </MainCard>
      )}
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
  emptyContainer: {
    width: '100%',
    gap: 12,
    // marginVertical: 4,
  },
  pressContainer: {
    gap: 5,
  },
  todayReservationContainer: {
    width: '100%',
    gap: 12,
  },
});
