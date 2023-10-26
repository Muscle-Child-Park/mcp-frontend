import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Prev} from 'src/assets/images';
import {Button, View, Pressable} from 'react-native';
import FirstOnBoarding from 'src/screens/OnBoarding/FirstOnBoarding';
import {colors} from 'src/constants/colors';
import ReservationSuccess from 'src/screens/Result/ReservationSuccess';
import JournalNavigator from 'src/navigation/JournalNavigator';
import UserProfile from 'src/screens/Home/My/UserProfile';
import HomeNavigator from './HomeNavigator';
import IntroNavigator from './IntroNavigator';

export type RootStackParamList = {
  TestScreen: undefined;
  HomeScreen: undefined;
  OnboardingScreen: undefined;
  Onboarding1: undefined;
  ReservationResultScreen: undefined;
  JournalScreen: undefined;
  UserProfileScreen: undefined;
  IntroScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type Props = NativeStackScreenProps<
  RootStackParamList,
  'TestScreen' | 'UserProfileScreen' | 'OnboardingScreen' // 쓰이는 곳에서 navigation의 type을 정해주기 위함
>;
export type BasicProps = NativeStackNavigationProp<RootStackParamList>;

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
        title="Go to Login"
        onPress={() => navigation.navigate('IntroScreen')}
      />
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
        screenOptions={({route}) => {
          if (route.name === 'UserProfileScreen') {
            return {headerShown: true};
          }
          return {headerShown: false};
        }}>
        <Stack.Screen name="TestScreen" component={TestScreen} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
