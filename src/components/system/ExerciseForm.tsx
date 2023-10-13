import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {exerciseTags} from 'src/constants/common';
import Tag from './Tag';
import {colors} from 'src/constants/colors';

interface Props {
  idx: number;
  exercise: ExerciseDataType;
  setExercise: (exercise: ExerciseDataType) => void;
}

export type ExerciseDataType = {
  type: string; // '근력', '유산소'
  name: string;
  info: string;
};

const ExerciseForm = ({idx, exercise, setExercise}: Props) => {
  // const [exerciseTagType, setExerciseTagType] = useState(exercise.type);

  const handleInputChange = (value: string, name: keyof ExerciseDataType) => {
    const updatedExerciseData = {...exercise};
    updatedExerciseData[name] = value;

    setExercise(updatedExerciseData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`운동${idx + 1}`}</Text>
      <View style={styles.tagRow}>
        {exerciseTags.map((exerciseName, idx) => (
          <Tag
            text={exerciseName}
            isSelected={exerciseName === exercise.type}
            onClick={() =>
              handleInputChange(exerciseName as keyof ExerciseDataType, 'type')
            }
            key={idx}
          />
        ))}
      </View>
      <TextInput
        style={styles.inputForName}
        onChangeText={text => handleInputChange(text, 'name')}
        value={exercise.name}
        placeholder="운동명"
        placeholderTextColor={colors.gray50}
        keyboardType="default"
      />
      <TextInput
        editable
        multiline
        numberOfLines={1}
        maxLength={100}
        placeholder="추가적으로 남기고 싶은 내용을 적어주세요"
        placeholderTextColor={colors.gray50}
        onChangeText={text => handleInputChange(text, 'info')}
        value={exercise.info}
        style={styles.inputForInfo}
      />
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
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
});

export default ExerciseForm;
