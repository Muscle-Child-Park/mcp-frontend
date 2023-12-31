import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Prev} from 'src/assets/images';
import {Pressable} from 'react-native';
import FirstOnBoarding from 'src/screens/OnBoarding/FirstOnBoarding';
import {colors} from 'src/constants/colors';
import ReservationSuccess from 'src/screens/Result/ReservationSuccess';
import JournalNavigator from 'src/navigation/JournalNavigator';
import UserProfile from 'src/screens/Home/My/UserProfile';
import HomeNavigator from './HomeNavigator';
import IntroNavigator from './IntroNavigator';
import UserRegistration from 'src/screens/Home/My/UserRegistration';
import {useUserContext} from 'src/context/UserContext';
// import UserScreen from 'src/screens/Reservations/UserScreen';
import ScheduleSetting from 'src/screens/Home/My/ScheduleSetting';

export type RootStackParamList = {
  HomeScreen: undefined;
  OnboardingScreen: undefined;
  Onboarding1: undefined;
  ReservationResultScreen: undefined;
  JournalScreen: {screen: '운동 추가' | '수업 상세' | '운동 일지'}; // HomScreen 내부에 HomeTab에서 사용하기 위함
  UserProfileScreen: undefined;
  UserRegistrationScreen: undefined;
  ScheduleSettingScreen: undefined;
  IntroScreen: undefined;
  // UserScreen: {headerTitle: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type MainStackProps = NativeStackScreenProps<
  RootStackParamList,
  | 'UserProfileScreen'
  | 'OnboardingScreen'
  | 'UserRegistrationScreen'
  | 'ScheduleSettingScreen'
  | 'HomeScreen' // 쓰이는 곳에서 navigation의 type을 정해주기 위함
>;
export type BasicProps = NativeStackNavigationProp<RootStackParamList>;

export default function MainStackNavigator() {
  const {
    state: {type},
  } = useUserContext();
  const isMentee = type === 'mentee';
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="IntroScreen"
        screenOptions={({route}) => {
          if (
            route.name === 'UserProfileScreen' ||
            route.name === 'UserRegistrationScreen' ||
            route.name === 'ScheduleSettingScreen'
          ) {
            return {headerShown: true};
          }
          return {headerShown: false};
        }}>
        <Stack.Screen name="OnboardingScreen" component={FirstOnBoarding} />
        <Stack.Screen name="HomeScreen" component={HomeNavigator} />
        <Stack.Screen
          name="ReservationResultScreen"
          component={ReservationSuccess}
        />
        <Stack.Screen name="JournalScreen" component={JournalNavigator} />
        <Stack.Screen name="IntroScreen" component={IntroNavigator} />
        <Stack.Screen
          name="UserProfileScreen"
          component={UserProfile}
          options={({navigation}) => {
            return {
              headerTitle: '회원정보 수정',
              headerTitleAlign: 'center',
              // headerRight: () => <Button title="완료" onPress={() => {}} />,
              headerLeft: () => (
                <Pressable onPress={() => navigation.pop()}>
                  <Prev style={{width: 24, height: 24}} fill={colors.gray100} />
                </Pressable>
              ),
            };
          }}
        />
        <Stack.Screen
          name="UserRegistrationScreen"
          component={UserRegistration}
          options={({navigation}) => {
            const title = isMentee ? '멘토 등록' : '회원 등록';
            return {
              headerTitle: title,
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Pressable onPress={() => navigation.pop()}>
                  <Prev style={{width: 24, height: 24}} fill={colors.gray100} />
                </Pressable>
              ),
            };
          }}
        />
        <Stack.Screen
          name="ScheduleSettingScreen"
          component={ScheduleSetting}
          options={({navigation}) => {
            return {
              headerTitle: '일정 설정',
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Pressable onPress={() => navigation.pop()}>
                  <Prev style={{width: 24, height: 24}} fill={colors.gray100} />
                </Pressable>
              ),
            };
          }}
        />
        {/* <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={({navigation}) => {
            return {
              headerTitle: `회원님`,
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Pressable onPress={() => navigation.pop()}>
                  <Prev style={{width: 24, height: 24}} fill={colors.gray100} />
                </Pressable>
              ),
            };
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
