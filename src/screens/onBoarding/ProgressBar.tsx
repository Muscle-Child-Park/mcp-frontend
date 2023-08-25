import React from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {colors} from 'src/constants/colors';
import data from 'src/constants/survey';

interface Props {
  progress: Animated.Value;
}

const ProgressBar = ({progress}: Props) => {
  //quiz data file imported to get the total number of questions
  const allQuestions = data;

  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ['0%', '100%'],
  }); //length of progress is initialized with 0 and will go to total length of ques
  return (
    <View style={styles.progressBarContainer}>
      <Animated.View
        style={[
          {
            height: 5,
            borderRadius: 5,
            backgroundColor: colors.primary,
          },
          {
            width: progressAnim,
          },
        ]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '100%',
    height: 5,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    // marginBottom: 10,
  },
});
export default ProgressBar;
