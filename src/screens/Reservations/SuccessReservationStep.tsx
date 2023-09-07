import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomButton from 'src/components/system/CustomButton';
import {SuccessProps} from './MainReservation';

const SuccessReservationStep = ({navigation}: SuccessProps) => {
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
            8월 9일 오전 9:00시 수업이 예약되었어요!
          </Text>
        </View>
        <View style={style.footer}>
          <CustomButton
            layoutmode="fullWidth"
            title="홈으로"
            variant="big"
            bgColor="#333333"
            onPress={() => navigation.navigate('MainScreen')} // 홈으로 가야한다... 흠...
          />
          <CustomButton
            layoutmode="fullWidth"
            title="예약 보러가기"
            variant="stroke"
            bgColor="#333333"
            onPress={() => navigation.navigate('MainScreen')} // 예약바로 가기으로 가야한다... 흠...
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
  footer: {alignItems: 'center', gap: 8},
});

export default SuccessReservationStep;
