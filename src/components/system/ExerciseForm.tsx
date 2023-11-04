import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {exerciseTags, initialExerciseInfo} from 'src/constants/common';
import Tag from './Tag';
import {colors} from 'src/constants/colors';
import {
  CardioExerciseInfo,
  ExerciseDataType,
  ExerciseType,
  StrengthExerciseInfo,
} from 'src/types/type';

interface Props {
  idx: number;
  exercise: ExerciseDataType;
  setExercise: (exercise: ExerciseDataType) => void;
  deleteExercise: () => void;
}

const ExerciseForm = ({idx, exercise, setExercise, deleteExercise}: Props) => {
  // const [exerciseTagType, setExerciseTagType] = useState(exercise.type);

  const handleInputChange = (
    value: string,
    name: keyof ExerciseDataType,
    infoKey?: string,
  ) => {
    const updatedExerciseData = {...exercise};
    if (name === 'info' && infoKey) {
      updatedExerciseData[name] = {
        ...updatedExerciseData[name],
        [infoKey]: value,
      };
      setExercise(updatedExerciseData);
      return;
    } else if (name === 'type') {
      updatedExerciseData[name] = value as ExerciseType;
      updatedExerciseData.info = initialExerciseInfo[value as ExerciseType];
    } else if (name === 'name') {
      updatedExerciseData[name] = value;
    }
    // 다시 생각해보자;

    setExercise(updatedExerciseData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`운동${idx + 1}`}</Text>
      <View style={styles.tagRowWrapper}>
        <View style={styles.tagRow}>
          {exerciseTags.map((exerciseName, idx) => (
            <Tag
              text={exerciseName}
              isSelected={exerciseName === exercise.type}
              onClick={() =>
                handleInputChange(
                  exerciseName as keyof ExerciseDataType,
                  'type',
                )
              }
              key={idx}
            />
          ))}
        </View>
        <Pressable onPress={deleteExercise}>
          <Text style={styles.delete}>삭제</Text>
        </Pressable>
      </View>
      <TextInput
        style={styles.inputForName}
        onChangeText={text => handleInputChange(text, 'name')}
        value={exercise.name}
        placeholder="운동명"
        placeholderTextColor={colors.gray50}
        keyboardType="default"
      />
      {exercise.type === '근력' ? (
        <View
          style={[
            styles.inputForInfo,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}>
          <View style={[styles.strengthInputContainer, {width: 92}]}>
            <TextInput
              editable
              style={styles.strengthInput}
              value={(exercise.info as StrengthExerciseInfo).kg}
              onChangeText={text => handleInputChange(text, 'info', 'kg')}
              textAlign="right"
              // verticalAlign="middle"
            />
            <Text style={styles.subText}>kg</Text>
          </View>
          <View style={[styles.strengthInputContainer, {width: 89}]}>
            <TextInput
              style={styles.strengthInput}
              value={(exercise.info as StrengthExerciseInfo).num}
              onChangeText={text => handleInputChange(text, 'info', 'num')}
              textAlign="right"
            />
            <Text style={styles.subText}>회</Text>
          </View>
          <View style={[styles.strengthInputContainer, {width: 65}]}>
            <TextInput
              style={styles.strengthInput}
              value={(exercise.info as StrengthExerciseInfo).set}
              onChangeText={text => handleInputChange(text, 'info', 'set')}
              textAlign="right"
            />
            <Text style={styles.subText}>세트</Text>
          </View>
        </View>
      ) : (
        <TextInput
          editable
          multiline
          numberOfLines={1}
          maxLength={100}
          placeholder="시간"
          placeholderTextColor={colors.gray50}
          onChangeText={text => handleInputChange(text, 'info', 'time')}
          value={(exercise.info as CardioExerciseInfo).time}
          style={styles.inputForInfo}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {gap: 16},
  title: {
    color: colors.gray75,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 21.6,
  },
  tagRowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  delete: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: colors.warnning,
  },
  inputForName: {
    backgroundColor: colors.background,
    paddingVertical: 20,
    paddingHorizontal: 16,
    color: colors.gray100,
    borderRadius: 8,
  },
  inputForInfo: {
    backgroundColor: colors.background,
    paddingVertical: 20,
    paddingHorizontal: 16,
    color: colors.gray100,
    borderRadius: 8,
  },
  strengthInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    height: 36,
  },
  strengthInput: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  subText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: 'black',
  },
});

export default ExerciseForm;
