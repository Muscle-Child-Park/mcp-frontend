import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'src/screens/Home';
import My from 'src/screens/My';
import Chat from 'src/screens/Chat';
import Reservation from 'src/screens/Reservation';
import {HomeIcon, ScheduleIcon, ChatIcon, UserIcon} from 'src/assets/images';
import {Button, View} from 'react-native';
import FirstOnBoarding from 'src/screens/onBoarding/FirstOnBoarding';
import {colors} from 'src/constants/colors';
import ReservationSuccess from 'src/screens/Result/ReservationSuccess';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import MainJournal from 'src/screens/journal/MainJournal';

const iconMap = {
  홈: HomeIcon,
  예약: ScheduleIcon,
  채팅: ChatIcon,
  마이: UserIcon,
} as const;

type TabIcons = keyof typeof iconMap;
export type RootStackParamList = {
  TestScreen: undefined;
  HomeScreen: undefined;
  OnboardingScreen: undefined;
  Onboarding1: undefined;
  ReservationResult: undefined;
  JournalScreen: undefined;
};

type BottomTabNavigatorParamList = {
  홈: undefined;
  예약: undefined;
  채팅: undefined;
  마이: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'TestScreen'>;
export type BasicProps = NativeStackNavigationProp<RootStackParamList>;

export type HomeTabProps =
  NativeStackNavigationProp<BottomTabNavigatorParamList>;

const MyTabs = () => {
  const safeInsets = useContext(SafeAreaInsetsContext);
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
        <Stack.Screen name="ReservationResult" component={ReservationSuccess} />
        <Stack.Screen name="JournalScreen" component={MainJournal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
