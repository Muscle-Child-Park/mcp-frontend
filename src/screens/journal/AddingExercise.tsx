import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AddIcon} from 'src/assets/images';
import ExerciseForm, {
  ExerciseDataType,
} from 'src/components/system/ExerciseForm';
import HorizonLine from 'src/components/system/HorizonLine';
import {colors} from 'src/constants/colors';
import {exerciseTags} from 'src/constants/common';
import ko from 'date-fns/esm/locale/ko/index.js';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {format} from 'date-fns';

type ModalType = 'date' | 'startTime' | 'endTime';

// TODO: 추후 component화하기
const AddingExercise = () => {
  const [exercises, setExercises] = useState<ExerciseDataType[]>([
    {
      type: exerciseTags[0],
      name: '',
      info: '',
    },
  ]);
  // useState Hook를 사용하여 날짜와 모달 유형, 노출 여부를 설정할 변수를 생성
  const [date, onChangeDate] = useState(new Date()); // 선택 날짜
  const [startDate, setStartDate] = useState(new Date()); // 시작 시간
  const [endDate, setEndDate] = useState(new Date()); // 종료 시간
  const [mode, setMode] = useState<ModalType>('date'); // 모달 유형
  const [visible, setVisible] = useState(false); // 모달 노출 여부

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

  const onPressDate = () => {
    setMode('date');
    setVisible(true);
  };

  const onPressStartTime = () => {
    setMode('startTime');
    setVisible(true);
  };

  const onPressEndTime = () => {
    setMode('endTime');
    setVisible(true);
  };

  const onConfirm = (selectedDate: Date) => {
    // 날짜 또는 시간 선택 시
    switch (mode) {
      case 'date':
        onChangeDate(selectedDate); // 선택한 날짜 변경
        break;
      case 'startTime':
        setStartDate(selectedDate); // 시작 시간 변경
        break;
      case 'endTime':
        setEndDate(selectedDate); // 종료 시간 변경
        break;
      default:
        break;
    }
    setVisible(false); // 모달 close
  };

  const onCancel = () => {
    // 취소 시
    setVisible(false); // 모달 close
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
          <TouchableOpacity style={styles.row} onPress={onPressDate}>
            <Text style={styles.title}>날짜</Text>
            <Text style={styles.details}>
              {format(new Date(date), 'YYY. M. d.', {locale: ko})}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} />
        <View style={styles.rowWrapper}>
          <TouchableOpacity style={styles.row} onPress={onPressStartTime}>
            <Text style={styles.title}>시작시간</Text>
            <Text style={styles.details}>
              {format(new Date(startDate), 'p', {locale: ko})}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.row} onPress={onPressEndTime}>
            <Text style={styles.title}>종료시간</Text>
            <Text style={styles.details}>
              {format(new Date(endDate), 'p', {locale: ko})}
            </Text>
          </TouchableOpacity>
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
        <DateTimePickerModal
          isVisible={visible}
          mode={mode.includes('Time') ? 'time' : 'date'}
          onConfirm={onConfirm}
          onCancel={onCancel}
          date={date}
        />
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
