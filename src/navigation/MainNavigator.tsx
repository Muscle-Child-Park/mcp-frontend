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
import MentorRegistration from 'src/screens/Home/My/MentorRegistration';

export type RootStackParamList = {
  HomeScreen: undefined;
  OnboardingScreen: undefined;
  Onboarding1: undefined;
  ReservationResultScreen: undefined;
  JournalScreen: undefined;
  UserProfileScreen: undefined;
  MentorRegistrationScreen: undefined;
  IntroScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type MainStackProps = NativeStackScreenProps<
  RootStackParamList,
  'UserProfileScreen' | 'OnboardingScreen' | 'MentorRegistrationScreen' // 쓰이는 곳에서 navigation의 type을 정해주기 위함
>;
export type BasicProps = NativeStackNavigationProp<RootStackParamList>;

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="IntroScreen"
        screenOptions={({route}) => {
          if (
            route.name === 'UserProfileScreen' ||
            route.name === 'MentorRegistrationScreen'
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
          name="MentorRegistrationScreen"
          component={MentorRegistration}
          options={({navigation}) => {
            return {
              headerTitle: '멘토 등록',
              headerTitleAlign: 'center',
              headerLeft: () => (
                <Pressable onPress={() => navigation.pop()}>
                  <Prev style={{width: 24, height: 24}} fill={colors.gray100} />
                </Pressable>
              ),
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
