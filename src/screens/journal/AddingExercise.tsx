import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AddIcon} from 'src/assets/images';
import ExerciseForm, {
  ExerciseDataType,
} from 'src/components/system/ExerciseForm';
import HorizonLine from 'src/components/system/HorizonLine';
import {colors} from 'src/constants/colors';
import {exerciseTags} from 'src/constants/common';

// TODO: 추후 component화하기
const AddingExercise = () => {
  const [exercises, setExercises] = useState<ExerciseDataType[]>([
    {
      type: exerciseTags[0],
      name: '',
      info: '',
    },
  ]);

  const handleAddExericse = (exerciseData: ExerciseDataType) => {
    // 새로운 운동 객체 생성 (ID는 현재 시간으로 설정)
    // const newExercise = {...exerciseData, id: Date.now()};

    // 기존 운동 목록에 새로운 운동 추가
    // setExercises([...exercises, newExcercise]);
    setExercises([...exercises, exerciseData]);
  };

  const handleSetExercise = (
    index: number,
    updatedExercise: ExerciseDataType,
  ) => {
    // exercises 배열의 특정 인덱스에 대한 운동 데이터 업데이트
    const updatedExercises = [...exercises];
    updatedExercises[index] = updatedExercise;

    setExercises(updatedExercises);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.rowWrapper}>
          <View style={styles.row}>
            <Text style={[styles.title, {fontSize: 18}]}>8월 23일 운동</Text>
            <Text style={styles.details}>수정</Text>
          </View>
        </View>
        {/* <HorizonLine /> */}
        <View style={styles.line} />
        <View style={styles.rowWrapper}>
          <View style={styles.row}>
            <Text style={styles.title}>날짜</Text>
            <Text style={styles.details}>2023. 8. 25.</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.rowWrapper}>
          <View style={styles.row}>
            <Text style={styles.title}>시작시간</Text>
            <Text style={styles.details}>10:00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>종료시간</Text>
            <Text style={styles.details}>11:00</Text>
          </View>
        </View>
        <View style={styles.line} />
        {exercises.map((exercise, idx) => (
          <View style={{padding: 20}} key={idx}>
            <ExerciseForm
              idx={idx}
              exercise={exercise}
              setExercise={updatedExercise =>
                handleSetExercise(idx, updatedExercise)
              }
            />
          </View>
        ))}
        <Pressable
          onPress={() =>
            handleAddExericse({
              type: exerciseTags[0],
              name: '',
              info: '',
            })
          }
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            gap: 12,
          }}>
          <AddIcon />
          <Text
            style={{
              color: 'black',
              fontWeight: '500',
              fontSize: 16,
              lineHeight: 19.2,
            }}>
            운동 추가하기
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  rowWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.gray75,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 21.6,
  },
  details: {
    color: colors.gray75,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 27,
  },
  line: {flex: 1, height: 0.5, backgroundColor: colors.gray25},
});

export default AddingExercise;
