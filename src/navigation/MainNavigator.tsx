import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'src/screens/Home';
import My from 'src/screens/My';
import Chatting from 'src/screens/Chatting';
import Reservation from 'src/screens/Reservation';
import {HomeIcon, ScheduleIcon, ChatIcon, UserIcon} from 'src/assets/images';
import {Button, View} from 'react-native';
import FirstOnBoarding from 'src/screens/onBoarding/FirstOnBoarding';
import {colors} from 'src/constants/colors';

const iconMap = {
  홈: HomeIcon,
  예약: ScheduleIcon,
  채팅: ChatIcon,
  MY: UserIcon,
} as const;

type TabIcons = keyof typeof iconMap;
export type RootStackParamList = {
  TestScreen: undefined;
  HomeScreen: undefined;
  OnboardingScreen: undefined;
  Onboarding1: undefined;
};

type BottomTabNavigatorParamList = {
  홈: undefined;
  예약: undefined;
  채팅: undefined;
  MY: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'TestScreen'>;

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
          height: 108,
          backgroundColor: '#ACACAC',
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        },
        headerTitle: '지현님, 오늘도 힘내볼까요?',
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

const MyScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding1" component={FirstOnBoarding} />
    </Stack.Navigator>
  );
};

const TestScreen = ({navigation}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}>
      <Button
        title="Go to Onboarding"
        onPress={() => navigation.navigate('OnboardingScreen')}
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
};

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TestScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="OnboardingScreen" component={MyScreen} />
        <Stack.Screen name="HomeScreen" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
