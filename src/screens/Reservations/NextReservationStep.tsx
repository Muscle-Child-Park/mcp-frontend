import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Checkbox from 'src/components/system/Checkbox';
import CustomButton from 'src/components/system/CustomButton';
import {NextProps} from './MainReservation';

const NextReservationStep = ({navigation}: NextProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <View style={style.body}>
          <TouchableOpacity
            style={{
              width: 110,
              height: 110,
              borderRadius: 50,
              backgroundColor: '#D9D9D9',
              marginBottom: 28.5,
            }}
          />
          <Text
            style={{
              width: 204,
              color: 'black',
              flexDirection: 'row',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: 22,
              lineHeight: 33,
              textAlign: 'center',
              marginBottom: 25.96,
            }}>
            8월 9일 오전 9:00시 수업으로 예약할까요?
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 24,
              color: 'black',
              marginBottom: 5,
            }}>
            당일 취소는 불가하니 시간을 꼭 확인해주세요!
          </Text>
          <Checkbox
            isChecked={isChecked}
            onValueChangeHandler={setIsChecked}
            text="확인했어요!"
            size="small"
          />
        </View>
        <View style={style.footer}>
          <CustomButton
            layoutmode="fullWidth"
            title="예약하기"
            variant="big"
            bgColor="#333333"
            onPress={() => navigation.navigate('SuccessScreen')}
            disabled={!isChecked}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    marginTop: 70,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 36.34,
    flex: 1,
    justifyContent: 'space-between',
  },
  body: {alignItems: 'center'},
  footer: {alignItems: 'center'},
});

export default NextReservationStep;
