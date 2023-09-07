import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MainReservation from 'src/screens/Reservations/MainReservation';
import MyReservation from 'src/screens/Reservations/MyReservation';

type TopTabNavigatorParamList = {
  예약하기: undefined;
  나의예약: undefined;
};
const TopTab = createMaterialTopTabNavigator<TopTabNavigatorParamList>();

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 18, lineHeight: 27, fontWeight: '600'},
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
        },
        //lazy : 특정 탭으로 이동해야만 해당 탭을 렌더링 하도록 설정
        //lazyPreloadDistance : lazy 속성이 활성화된 상태에서 몇 칸 뒤 화면을 미리 불러올지 설정(default : 0)
        //lazyPlaceholder : lazy 속성이 활성화되어 있을 때 아직 보이지 않은 화면에서 보여줄 대체 컴포넌트
      }}>
      <TopTab.Screen name="예약하기" component={MainReservation} />
      <TopTab.Screen name="나의예약" component={MyReservation} />
    </TopTab.Navigator>
  );
};

const Reservation = () => {
  return <TopTabNavigator />;
  // return <Text>hi</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: 'black',
  },
});

export default Reservation;
