import React from 'react';
import {StyleSheet} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationProp,
} from '@react-navigation/material-top-tabs';
import ReservationNavigator from 'src/navigation/ReservationNavigator';
import {MyReservation, UserManagement} from '../Reservations';
import {useUserContext} from 'src/context/UserContext';
import {ExerciseJournal} from '../Journal';

type TopTabNavigatorParamList = {
  Reserve: undefined;
  MyReservation: undefined;
};
export type TopTabProps =
  MaterialTopTabNavigationProp<TopTabNavigatorParamList>;

const TopTab = createMaterialTopTabNavigator<TopTabNavigatorParamList>();
const title = {
  mentee: {
    Reserve: '예약하기',
    MyReservation: '나의예약',
  },
  mentor: {
    Reserve: '예약관리',
    MyReservation: '회원관리',
  },
} as const;

const TopTabNavigator = () => {
  const {
    state: {type},
  } = useUserContext();
  const isMentee = type === 'mentee';
  return (
    <TopTab.Navigator
      screenOptions={({route}) => ({
        tabBarLabelStyle: {
          fontSize: 18,
          lineHeight: 21.6,
          fontWeight: '600',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
        },
        tabBarStyle: {
          height: 48, // 초기 지연 렌더링 고려
        },
        title: title[type][route.name],
        //lazy : 특정 탭으로 이동해야만 해당 탭을 렌더링 하도록 설정
        //lazyPreloadDistance : lazy 속성이 활성화된 상태에서 몇 칸 뒤 화면을 미리 불러올지 설정(default : 0)
        //lazyPlaceholder : lazy 속성이 활성화되어 있을 때 아직 보이지 않은 화면에서 보여줄 대체 컴포넌트
      })}>
      <TopTab.Screen
        name="Reserve"
        component={isMentee ? ReservationNavigator : ExerciseJournal}
      />
      <TopTab.Screen
        name="MyReservation"
        component={isMentee ? MyReservation : UserManagement}
      />
    </TopTab.Navigator>
  );
};

// 멘티 - 예약하기/나의예약 / 멘토 - 수업관리(예약관리/회원관리)
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
