import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {useContext, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import AddingExercise from './AddingExercise';
import {Plus, Prev} from 'src/assets/images';
import {colors} from 'src/constants/colors';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import SwitchButton from 'src/components/system/SwitchButton';

type JournalStackParamList = {
  '운동 일지': undefined;
  '운동 추가': undefined;
};
const Stack = createNativeStackNavigator<JournalStackParamList>();
type Props = NativeStackNavigationProp<JournalStackParamList>;

const MainJournal = () => {
  // const navigation = useNavigation<Props>(); // 운동 추가일 때, 뒤로가면 home으로
  const safeInsets = useContext(SafeAreaInsetsContext); // stack의 header style은 background밖에 안되네..?
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
        headerRight: () =>
          route.name === '운동 일지' ? (
            <Pressable onPress={() => navigation.navigate('운동 추가')}>
              <Plus style={{width: 24, height: 24}} fill={colors.gray100} />
            </Pressable>
          ) : (
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
          ),
      })}>
      <Stack.Screen name="운동 일지" component={ExerciseJournal} />
      <Stack.Screen name="운동 추가" component={AddingExercise} />
    </Stack.Navigator>
  );
};

const ExerciseJournal = () => {
  const [selectedTab, isSelectedTab] = useState<0 | 1>(0);
  const navigation = useNavigation<Props>();
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView style={[styles.container]}>
        <SwitchButton selectedTab={selectedTab} isSelectedTab={isSelectedTab} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default MainJournal;
