import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationProp,
} from '@react-navigation/material-top-tabs';
import {MyReservation, UserManagement} from '../Reservations';
import {useUserContext} from 'src/context/UserContext';
import {ExerciseJournal} from '../Journal';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import UserScreen from '../Reservations/UserScreen';
import MainReservation from '../Reservations/MainReservation';
import {RouteProp} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from 'src/hooks/useReduxHooks';
import {setReservationStackType} from 'src/modules/redux/slice/ReservationTypeSlice';

export type ReservationStackParamList = {
  MainReservation: undefined;
  UserScreen: {headerTitle: string};
};

type TopTabNavigatorParamList = {
  Reserve: undefined;
  MyReservation: undefined;
};
export type TopTabProps =
  MaterialTopTabNavigationProp<TopTabNavigatorParamList>;
export type ReservationStackProps =
  NativeStackNavigationProp<ReservationStackParamList>;

export type UserScreenRouteProp = RouteProp<
  ReservationStackParamList,
  'UserScreen'
>;

const TopTab = createMaterialTopTabNavigator<TopTabNavigatorParamList>();
const Stack = createNativeStackNavigator<ReservationStackParamList>();

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
        component={isMentee ? MainReservation : ExerciseJournal}
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
  const dispatch = useAppDispatch();
  return (
    <Stack.Navigator
      initialRouteName="MainReservation"
      screenOptions={({route}) => {
        if (route.name === 'MainReservation') {
          dispatch(setReservationStackType('MainReservation'));
          return {headerShown: false};
        } else {
          dispatch(setReservationStackType('UserScreen'));
          return {headerShown: true};
        }
      }}>
      <Stack.Screen name="MainReservation" component={TopTabNavigator} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
    </Stack.Navigator>
  );

  // return <Text>hi</Text>;
};

export default Reservation;
