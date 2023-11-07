import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RightArrow} from 'src/assets/images';
import CustomButton from 'src/components/system/CustomButton';
import CustomTextInput from 'src/components/system/CustomTextInput';
import {colors} from 'src/constants/colors';
import data from 'src/constants/survey';
import {useUserContext} from 'src/context/UserContext';
import {MainStackProps} from 'src/navigation/MainNavigator';

export default function UserProfile({navigation}: MainStackProps) {
  const [hide, setHide] = useState(true);
  const {
    state: {username: currentUser, type, onboarding},
  } = useUserContext();
  const [username, setUsername] = useState(currentUser);
  const isMentee = type === 'mentee';
  const onChangeText = (text: string) => setUsername(text);
  const onPressOnboardingTab = () => setHide(prev => !prev);
  const onPressOnboardingButton = () => {
    navigation.navigate('OnboardingScreen');
  };
  const allQuestions = data;
  return (
    <SafeAreaView style={styles.mainBackground}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>회원 이름</Text>
            <Pressable
              onPress={() => {
                // TODO: API 연결
              }}>
              <Text style={styles.button}>수정</Text>
            </Pressable>
          </View>
          <CustomTextInput
            value={username}
            onChangeText={onChangeText}
            placeholder="이름을 입력해주세요."
          />
        </View>
        {!isMentee ? (
          <View style={[styles.inputContainer, styles.divider]}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>소속</Text>
              <Pressable
                onPress={() => {
                  // TODO: API 연결
                }}>
                <Text style={styles.button}>수정</Text>
              </Pressable>
            </View>
            <CustomTextInput
              value={username}
              onChangeText={onChangeText}
              placeholder="빌리프짐 성수점"
            />
          </View>
        ) : (
          <View style={[styles.inputContainer, styles.divider]}>
            <Pressable
              style={styles.onboardingTab}
              onPress={onPressOnboardingTab}>
              <Text style={styles.title}>온보딩 내용</Text>
              <RightArrow
                style={[
                  styles.arrow,
                  !hide && {transform: [{rotate: '-90deg'}]},
                ]}
                fill="#404040"
              />
            </Pressable>
            {!hide && (
              <View style={styles.onboardingUl}>
                {onboarding &&
                  onboarding.map((currentStep, index) => (
                    <View style={styles.onboardingLi} key={index}>
                      <Text style={styles.onboardingTitle}>
                        {allQuestions[index].subject}
                      </Text>
                      {currentStep.map((value, i) => (
                        <Text style={styles.onboardingSub} key={i}>
                          {allQuestions[index].options[value]}
                        </Text>
                      ))}
                    </View>
                  ))}
                <View style={styles.buttonContainer}>
                  <CustomButton
                    text="온보딩 수정하기"
                    variant="fillPrimary"
                    onPress={onPressOnboardingButton}
                  />
                </View>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    padding: 20,
    gap: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.gray75,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
  },
  button: {
    color: colors.gray75,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 27,
  },
  divider: {
    borderTopWidth: 0.33,
    borderColor: colors.gray25,
  },
  onboardingTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {width: 24, height: 24, transform: [{rotate: '90deg'}]},
  onboardingUl: {
    // flexWrap: 'wrap',
    gap: 15,
  },
  onboardingLi: {
    width: '50%',
    gap: 13,
  },
  onboardingTitle: {
    color: colors.gray100,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    textDecorationLine: 'underline',
  },
  onboardingSub: {
    color: colors.gray75,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18.8,
  },
  buttonContainer: {
    // paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
