import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from 'src/components/system/CustomButton';
import {colors} from 'src/constants/colors';
import {useUserContext} from 'src/context/UserContext';
import {IntroProps} from 'src/navigation/IntroNavigator';
import {BasicProps} from 'src/navigation/MainNavigator';

type HomeScreenProp = CompositeNavigationProp<IntroProps, BasicProps>;

export default function UserNameRegistration() {
  // 0: not selected, 1: selecte trainer , 2: select mentee
  const {
    state: {username: currentUser},
    actions: {changeUserName},
  } = useUserContext();
  const [username, setUsername] = useState(currentUser);
  const navigation = useNavigation<HomeScreenProp>();
  const onChangeText = (text: string) => {
    setUsername(text);
  };
  const handlePressButton = () => {
    if (isDisabled) return;
    changeUserName(username);
    navigation.navigate('OnboardingScreen');
  };
  const isDisabled = username.length === 0;
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>회원님의 이름을 입력해주세요</Text>
          <Text style={styles.description}>
            {`선생님의 인증을 위해 필요한 정보에요
정확한 실명을 입력해주세요`}
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            value={username}
            onChangeText={onChangeText}
            placeholder="이름을 입력해주세요"
            placeholderTextColor={colors.gray50}
            style={styles.input}
            maxLength={10}
          />
          <Text style={styles.inputLength}>{`${username.length}/10`}</Text>
        </View>
      </View>
      <CustomButton
        disabled={isDisabled}
        layoutmode="basic"
        text="다음으로"
        variant="fillPrimary"
        onPress={handlePressButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'space-between',
  },
  main: {
    gap: 138,
  },
  textContainer: {
    paddingTop: 12,
    gap: 41,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28.8,
    color: colors.gray100,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: colors.gray75,
  },
  inputWrapper: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderRadius: 8,
    // backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 16,
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
  },
  inputLength: {
    // backgroundColor: 'blue',
    textAlign: 'right',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.6,
    color: colors.gray25,
  },
});
