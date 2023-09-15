import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Animated,
  Text,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import data from 'src/constants/survey';
import ProgressBar from './ProgressBar';
import Questions from './Questions';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/navigation/MainNavigator';
import CustomButton from 'src/components/system/CustomButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from 'src/constants/colors';
import {Next, Prev} from 'src/assets/images';

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
  const [currentAnswerSelected, setCurrentAnswerSelected] = useState<number[]>(
    [],
  );
  const [items, setItems] = useState<number[][]>(
    Array.from({length: data.length}, () => []),
  );
  // const safeInsets = useContext(SafeAreaInsetsContext);
  const validateAnswer = (buttonIndex: number) => {
    if (currentAnswerSelected.includes(buttonIndex)) {
      const newArray = currentAnswerSelected.filter(n => n !== buttonIndex);
      setCurrentAnswerSelected(newArray);
      return;
    }
    setCurrentAnswerSelected([...currentAnswerSelected, buttonIndex]);
  };
  const handlePrev = () => {
    if (currentQuestionIndex === 0) {
      navigation.goBack();
    } else {
      Animated.timing(progress, {
        toValue: currentQuestionIndex, // 현재 질문 인덱스로 설정
        duration: 1000,
        useNativeDriver: false,
      }).start();
      // 뒤로 가기 눌렀을 때, 이전 했던 행위 저장
      setItems(prev => {
        const next = [...prev];
        return next.map((selectedResults, i) => {
          if (currentQuestionIndex === i) {
            return [...currentAnswerSelected];
          }
          return selectedResults;
        });
      });
      // 이전 값 복원
      setCurrentAnswerSelected(items[currentQuestionIndex - 1]);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    console.log(currentAnswerSelected);
    if (!currentAnswerSelected.length) return;
    setItems(prev => {
      const next = [...prev];
      return next.map((selectedResults, i) => {
        if (currentQuestionIndex === i) {
          return [...currentAnswerSelected];
        }
        return selectedResults;
      });
    });
    if (currentQuestionIndex == allQuestions.length - 1) {
      // TODO: 선택한 이전 값(items)들을 한꺼번에 서버에 보내기 > 마지막 값은 따로 합쳐서 보내줘야할듯
      items.pop();
      navigation.navigate('TestScreen');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswerSelected(items[currentQuestionIndex + 1]);
    }
    console.log('handleNext', currentQuestionIndex);
    Animated.parallel([
      Animated.timing(progress, {
        toValue: currentQuestionIndex + 2,
        duration: 1000,
        useNativeDriver: false,
      }),
      // Animated.sequence([
      //   Animated.timing(fadeAnim, {
      //     toValue: 0,
      //     duration: 50,
      //     useNativeDriver: false,
      //   }),
      //   Animated.timing(fadeAnim, {
      //     toValue: 1,
      //     duration: 950,
      //     useNativeDriver: false,
      //   }),
      // ]),
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
                currentAnswerSelected.includes(index)
                  ? 'fillSecondary'
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
      {/* TODO: tab이후 로직은 적용되는데, 왜 여기는 statusbar는 적용되고 자동적으로 그 아래에 렌더될까????? */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={[
            styles.container,
            // safeInsets && {paddingTop: safeInsets.top},
          ]}>
          <View style={styles.subContainer}>
            <View style={styles.header}>
              <TouchableOpacity onPress={handlePrev}>
                <Prev style={{width: 24, height: 24}} fill={colors.gray100} />
              </TouchableOpacity>
              <Text
                style={{
                  color: colors.gray100,
                  fontSize: 18,
                  fontWeight: '600',
                  lineHeight: 21.6,
                  // textAlign: 'center',
                }}>
                {allQuestions[currentQuestionIndex]?.subject}
              </Text>
              <Next style={{width: 24, height: 24}} />
            </View>
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
              disabled={!currentAnswerSelected.length}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    height: '100%',
    paddingBottom: 20,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  subContainer: {
    // alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 22,
    paddingBottom: 36,
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
