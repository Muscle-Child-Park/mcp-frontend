import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useContext} from 'react';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {HomeIcon, ScheduleIcon, ChatIcon, UserIcon} from 'src/assets/images';
import {colors} from 'src/constants/colors';
import {Chat, Home, My, Reservation} from 'src/screens/Home';

const iconMap = {
  홈: HomeIcon,
  예약: ScheduleIcon,
  채팅: ChatIcon,
  마이: UserIcon,
} as const;

type TabIcons = keyof typeof iconMap;

type BottomTabNavigatorParamList = {
  홈: undefined;
  예약: undefined;
  채팅: undefined;
  마이: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();
export type HomeTabProps =
  NativeStackNavigationProp<BottomTabNavigatorParamList>;

export default function HomeNavigator() {
  const safeInsets = useContext(SafeAreaInsetsContext);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconKey = route.name as TabIcons;
          const IconComponent = iconMap[iconKey];
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
        // tabBarIconStyle: {},
        headerStyle: {
          // borderWidth: 1,
          // borderColor: 'red',
          height: 62 + (safeInsets?.top ?? 0),
          borderBottomWidth:
            route.name === '마이' || route.name === '채팅' ? 0.33 : 0,
        },
        headerTitle: route.name === '마이' ? '마이페이지' : route.name,
        headerTitleStyle: {
          fontSize: 22,
          // fontWeight: 600,
          color: 'black',
        },
        headerTitleAlign: 'center',
        headerShown: route.name !== '홈',
      })}>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="예약" component={Reservation} />
      <Tab.Screen name="채팅" component={Chat} />
      <Tab.Screen name="마이" component={My} />
    </Tab.Navigator>
  );
}
