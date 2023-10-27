import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {
  Agreement,
  Login,
  UserNameRegistration,
  UserTypeSelection,
} from 'src/screens/Intro';
import {useContext} from 'react';
import {Pressable} from 'react-native';
import {Prev} from 'src/assets/images';
import {colors} from 'src/constants/colors';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

export type IntroStackParamList = {
  LoginScreen: undefined;
  AgreementScreen: undefined;
  UserTypeSelectionScreen: undefined;
  UserNameRegistrationScreen: undefined;
};

const Stack = createNativeStackNavigator<IntroStackParamList>();
export type IntroStackProps = NativeStackScreenProps<
  IntroStackParamList,
  | 'LoginScreen'
  | 'AgreementScreen'
  | 'UserTypeSelectionScreen'
  | 'UserNameRegistrationScreen'
>;
/* 
TODO: 소셜 로그인 페이지일 때는 left header button을 빼야 함
- 영어 header tile을 한글로 바꾸기
- header title을 가운데로 옮기기
- 소셜 로그인 브런치 커밋 가져오기
*/
const title = {
  LoginScreen: '로그인',
  AgreementScreen: '약관동의',
  UserTypeSelectionScreen: '회원 유형 선택',
  UserNameRegistrationScreen: '회원 이름 등록',
};

export default function IntroNavigator() {
  const safeInsets = useContext(SafeAreaInsetsContext);
  console.log(safeInsets);
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitle: title[route.name],
        headerTitleAlign: 'center',
        headerShown: route.name !== 'LoginScreen',
        headerLeft: () => (
          <Pressable onPress={() => navigation.pop()}>
            <Prev style={{width: 24, height: 24}} fill={colors.gray100} />
          </Pressable>
        ),
      })}>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="AgreementScreen" component={Agreement} />
      <Stack.Screen
        name="UserTypeSelectionScreen"
        component={UserTypeSelection}
      />
      <Stack.Screen
        name="UserNameRegistrationScreen"
        component={UserNameRegistration}
      />
    </Stack.Navigator>
  );
}
