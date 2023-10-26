import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Agreement,
  Login,
  UserNameRegistration,
  UserTypeSelection,
} from 'src/screens/Intro';

export type IntroStackParamList = {
  LoginScreen: undefined;
  AgreementScreen: undefined;
  UserTypeSelectionScreen: undefined;
  UserNameRegistrationScreen: undefined;
};

const Stack = createNativeStackNavigator<IntroStackParamList>();

export default function IntroNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
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
