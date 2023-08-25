import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'src/screens/Home';
import My from 'src/screens/My';
import Chatting from 'src/screens/Chatting';
import Reservation from 'src/screens/Reservation';
import {
  HomeIcon,
  ReservationIcon,
  ChattingIcon,
  SettingIcon,
} from 'src/assets/images';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const iconMap = {
  홈: HomeIcon,
  예약: ReservationIcon,
  채팅: ChattingIcon,
  MY: SettingIcon,
} as const;

type TabIcons = keyof typeof iconMap;

const MyTabs = () => {
  return (
    // <Tab.Navigator screenOptions={{headerShown: false}} >
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconKey = route.name as TabIcons;
          const IconComponent = iconMap[iconKey];
          return (
            <IconComponent style={{width: size, height: size}} fill={color} />
          );
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: '#949494',
        tabBarStyle: {
          height: 80,
          paddingHorizontal: 22,
          paddingTop: 19,
          paddingBottom: 22,
        },
        // tabBarIconStyle: {},
        headerStyle: {
          height: 108,
          backgroundColor: '#ACACAC',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        },
        headerTitle: '지현님, 좋은 아침이에요!',
        headerTitleStyle: {
          fontSize: 22,
          // fontWeight: 600,
          position: 'absolute',
          left: 4,
          bottom: 15,
          lineHeight: 22,
          color: '#FFFFFF',
        },
      })}>
      <Tab.Screen name="홈" component={Home} />
      <Tab.Screen name="예약" component={Reservation} />
      <Tab.Screen name="채팅" component={Chatting} />
      <Tab.Screen name="MY" component={My} />
    </Tab.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="홈"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
