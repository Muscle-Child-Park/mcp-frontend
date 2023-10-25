import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CourseCard from 'src/components/system/CourseCard';
import CustomButton from 'src/components/system/CustomButton';
import MainCard from 'src/components/system/MainCard';
import {colors} from 'src/constants/colors';

export default function DetailedCourse() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView style={styles.container}>
        <View
          style={{
            gap: 12,
          }}>
          <Text style={styles.courseTitle}>10회차 중 1번째 수업</Text>
          <View style={styles.dayContainer}>
            <Text style={styles.days}>23년 8월 28일</Text>
            <Text style={styles.days}>오전 10:00 - 11:00</Text>
          </View>
          <CourseCard title="완료한 운동">
            {/* <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  color: colors.gray100,
                  fontSize: 16,
                  fontWeight: '500',
                  lineHeight: 19.2,
                }}>
                레그프레스
              </Text>
              <Text>40kg</Text>
              <Text>20x5set</Text>
            </View> */}
            <Text style={styles.defaultText}>
              아직 수업이 완료되지 않았어요
            </Text>
          </CourseCard>
          <CourseCard title="선생님의 메모">
            <Text style={styles.defaultText}>
              아직 수업이 완료되지 않았어요
            </Text>
          </CourseCard>
          <CourseCard title="나의 회고록">
            <Text style={styles.defaultText}>
              선생님이 지현님께 더 좋은 수업을 제공할 수 있게 회고록을
              작성해볼까요?
            </Text>
            <CustomButton
              layoutmode="basic"
              text="회고록 작성하기"
              variant="fillPrimary"
              onPress={() => {
                // TODO: 회고록 작성 로직 고민
              }}
            />
          </CourseCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background2,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.blue,
    lineHeight: 24,
  },
  dayContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  days: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.gray75,
    lineHeight: 19.2,
  },
  defaultText: {
    paddingVertical: 20,
    color: colors.gray100,
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
    lineHeight: 21,
  },
});
