import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {Pressable, Text} from 'react-native';
import {Plus, Prev} from 'src/assets/images';
import {colors} from 'src/constants/colors';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {
  AddingExercise,
  DetailedCourse,
  ExerciseJournal,
} from 'src/screens/Journal';

type JournalStackParamList = {
  '운동 일지': undefined;
  '운동 추가': undefined;
  '수업 상세': undefined;
};
const Stack = createNativeStackNavigator<JournalStackParamList>();
export type JournalStackProps =
  NativeStackNavigationProp<JournalStackParamList>;

export default function JournalNavigator() {
  // const navigation = useNavigation<Props>(); // 운동 추가일 때, 뒤로가면 home으로
  const safeInsets = useContext(SafeAreaInsetsContext); // stack의 header style은 background밖에 안되네..?
  const renderHeaderRight = (
    type: keyof JournalStackParamList,
    navigation: any,
  ) => {
    switch (type) {
      case '운동 일지':
        return (
          <Pressable onPress={() => navigation.navigate('운동 추가')}>
            <Plus style={{width: 24, height: 24}} fill={colors.gray100} />
          </Pressable>
        );
      case '운동 추가':
        return (
          <Pressable onPress={() => navigation.pop()}>
            <Text
              style={{
                color: colors.gray100,
                fontSize: 18,
                lineHeight: 27,
                fontWeight: '400',
              }}>
              완료
            </Text>
          </Pressable>
        );
      case '수업 상세':
        return;
      default:
        return;
    }
  };
  return (
    <Stack.Navigator
      initialRouteName="운동 일지"
      screenOptions={({navigation, route}) => ({
        headerShown: true,
        // headerStyle: {
        // height: 62 + (safeInsets?.top ?? 0),
        // },
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Pressable onPress={() => navigation.pop()}>
            <Prev style={{width: 24, height: 24}} fill={colors.gray100} />
          </Pressable>
        ),
        headerRight: () => renderHeaderRight(route.name, navigation),
      })}>
      <Stack.Screen name="운동 일지" component={ExerciseJournal} />
      <Stack.Screen name="운동 추가" component={AddingExercise} />
      <Stack.Screen name="수업 상세" component={DetailedCourse} />
    </Stack.Navigator>
  );
}
