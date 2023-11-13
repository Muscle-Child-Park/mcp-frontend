import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCallback, useContext} from 'react';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {HomeIcon, ScheduleIcon, ChatIcon, UserIcon} from 'src/assets/images';
import {colors} from 'src/constants/colors';
import {useUserContext} from 'src/context/UserContext';
import {useAppSelector} from 'src/hooks/useReduxHooks';
import {Chat, Home, My, Reservation} from 'src/screens/Home';

type BottomTabNavigatorParamList = {
  HomeTab: undefined;
  ReservationTab: undefined;
  ChatTab: undefined;
  MyTab: undefined;
};
type TabType = keyof typeof tabMap;

const tabMap = {
  HomeTab: {
    title: '홈',
    icon: HomeIcon,
  },
  ReservationTab: {
    title: '예약',
    icon: ScheduleIcon,
  },
  ChatTab: {
    title: '채팅',
    icon: ChatIcon,
  },
  MyTab: {
    title: '마이',
    icon: UserIcon,
  },
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();
export type HomeTabProps =
  NativeStackNavigationProp<BottomTabNavigatorParamList>;

export default function HomeNavigator() {
  const safeInsets = useContext(SafeAreaInsetsContext);
  const {
    state: {type},
  } = useUserContext();
  const {ReservationStackType} = useAppSelector(
    state => state.reservationStackType,
  );

  const getTitle = useCallback(
    (currentTab: TabType) => {
      const title = tabMap[currentTab].title;
      let header = title;
      let bottom = title;
      if (currentTab === 'ReservationTab' && type === 'mentor') {
        header = '수업';
        bottom = '수업';
      }
      if (currentTab === 'MyTab') {
        header = '마이페이지';
      }
      return {header, bottom};
    },
    [type],
  );
  const isShow = (currentTab: TabType) => {
    if (ReservationStackType === 'UserScreen') {
      return false;
    }
    return currentTab !== 'HomeTab';
  };
  return (
    <Tab.Navigator
      screenOptions={({route: {name}}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const IconComponent = tabMap[name].icon;
          return (
            <IconComponent style={{width: size, height: size}} fill={color} />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#949494',
        tabBarStyle: {
          height: 80,
          paddingHorizontal: 22,
          paddingTop: 19,
          paddingBottom: 22,
        },
        headerStyle: {
          height: 62 + (safeInsets?.top ?? 0),
          borderBottomWidth: name === 'MyTab' || name === 'ChatTab' ? 0.33 : 0,
        },
        headerTitle: getTitle(name).header,
        headerTitleStyle: {
          fontSize: 22,
          color: 'black',
        },
        headerTitleAlign: 'center',
        headerShown: isShow(name),
        title: getTitle(name).bottom,
      })}>
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="ReservationTab" component={Reservation} />
      <Tab.Screen name="ChatTab" component={Chat} />
      <Tab.Screen name="MyTab" component={My} />
    </Tab.Navigator>
  );
}
