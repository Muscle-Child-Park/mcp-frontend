import React, {useRef, useState} from 'react';
import {View, StyleSheet, ScrollView, Animated, Text} from 'react-native';
import data from 'src/constants/survey';
import ProgressBar from './ProgressBar';
import Questions from './Questions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/MainNavigator';
import CustomButton from 'src/components/system/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from 'src/constants/colors';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding1',
  'TestScreen'
>;

const FirstOnBoarding = ({navigation}: Props) => {
  const allQuestions = data;
  const progress = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswerSelected, setCurrentAnswerSelected] = useState<
    number | null
  >(null);
  const [items, setItems] = useState<Array<string>>([]);
  const validateAnswer = (buttonIndex: number) => {
    setCurrentAnswerSelected(buttonIndex + 1);
  };
  const handleNext = () => {
    if (!currentAnswerSelected) return;
    const answer =
      allQuestions[currentQuestionIndex].options[currentAnswerSelected - 1];
    setItems([...items, answer]);
    if (currentQuestionIndex == allQuestions.length - 1) {
      // TODO: 선택한 이전 값(items)들을 한꺼번에 서버에 보내기 > 마지막 값은 따로 합쳐서 보내줘야할듯
      console.log(...items, answer);
      navigation.navigate('TestScreen');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswerSelected(null);
    }
    Animated.parallel([
      Animated.timing(progress, {
        toValue: currentQuestionIndex + 2,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 50,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 950,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  const renderOptions = () => {
    return (
      <View style={{gap: 16}}>
        {allQuestions[currentQuestionIndex]?.options.map((option, index) => (
          <Animated.View
            key={index}
            style={{
              opacity: fadeAnim,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [(150 / 4) * (index + 10), 0], // 0 : 150, 0.5 : 75, 1 : 0
                  }),
                },
              ],
            }}>
            <CustomButton
              text={option}
              layoutmode="fullWidth"
              variant={
                currentAnswerSelected !== null &&
                currentAnswerSelected - 1 === index
                  ? 'fillPrimary'
                  : undefined
              }
              key={index}
              onPress={() => validateAnswer(index)}
            />
          </Animated.View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text
              style={{
                color: colors.gray100,
                fontSize: 18,
                fontWeight: '600',
                lineHeight: 21.6,
                textAlign: 'center',
                paddingTop: 23,
                paddingBottom: 37,
              }}>
              {allQuestions[currentQuestionIndex]?.subject}
            </Text>
            <ProgressBar progress={progress} />
            <Questions
              index={currentQuestionIndex}
              question={allQuestions[currentQuestionIndex]?.question}
            />
          </View>
          {renderOptions()}
          {/* 분명, scrollView의 크기는 헤더를 제외한 전체화면인데, 왜 bottom: 0일때, 아래에서 더 위로 잡히지? > 최상단 View컴포넌트가 ScrollView 컴포넌트일 때, 발생.. */}
          {/* <View style={{position: 'absolute', bottom: 20, right: 20}}> */}
          <View style={styles.btnNext}>
            <CustomButton
              layoutmode="fullWidth"
              variant="fillPrimary"
              text="다음으로"
              onPress={() => handleNext()}
              disabled={currentAnswerSelected === null}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  // scrollView 의 세로가 꽈안참 > contentContainerStyle > flexGrow : 1
  // scrollView: {
  //   flex: 1,
  //   backgroundColor: '#ffffff',
  // },
  container: {
    flex: 1,
    height: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    // position: 'relative',
  },
  subContainer: {
    // alignItems: 'center',
  },
  optionsText: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -3, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnNext: {
    marginTop: 20,
  },
});
export default FirstOnBoarding;
