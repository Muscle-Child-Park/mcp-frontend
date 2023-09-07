import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Checkbox from 'src/components/system/Checkbox';
import CustomButton from 'src/components/system/CustomButton';
import {colors} from 'src/constants/colors';
import {BasicProps} from 'src/navigation/MainNavigator';

const NextReservationStep = () => {
  // Context로 만들기
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation<BasicProps>();
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.body}>
          <TouchableOpacity
            style={{
              width: 110,
              height: 110,
              borderRadius: 50,
              backgroundColor: '#D9D9D9',
              marginBottom: 64,
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.time}>8월 9일 오후 9:00시</Text>
            <Text style={styles.title}>수업을 예약하시겠어요?</Text>
          </View>
          <Text style={styles.description}>수업 취소는 전날까지 가능해요!</Text>
          <Checkbox
            isChecked={isChecked}
            onValueChangeHandler={setIsChecked}
            text="네, 확인했어요!"
            size="small"
            style={{gap: 8}}
            textColor={colors.gray100}
            checkBoxColor={colors.primary}
          />
        </View>
        <View style={styles.footer}>
          <CustomButton
            layoutmode="fullWidth"
            text="예약하기"
            variant="fillPrimary"
            disabled={!isChecked}
            onPress={() => {
              if (!isChecked) return;
              // 이걸로 화면 뮤테이션이 있는데, 이는 잠깐의 로딩을 주어서 처리하자
              navigation.popToTop();
              navigation.navigate('ReservationResult');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 56,
    flex: 1,
    justifyContent: 'space-between',
  },
  body: {alignItems: 'center'},
  textContainer: {
    gap: 5,
    marginBottom: 20,
  },
  time: {
    color: colors.primary,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 36,
  },
  title: {
    color: colors.gray100,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28.8,
  },
  description: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19.2,
    color: colors.gray100,
    marginBottom: 8,
  },
  footer: {alignItems: 'center'},
});

export default NextReservationStep;
