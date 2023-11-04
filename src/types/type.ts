export type UserType = 'mentee' | 'mentor';
export type ModalStep = 1 | 2; // 1(alarm) -> 2(start)
export type LogType = {
  id: number;
  date: string;
};
export type CalendarHeaderType = 'calendar' | 'list';

export type ExerciseType = '근력' | '유산소';
export type ModalType = 'date' | 'startTime' | 'endTime';
export type ExerciseInfoType = StrengthExerciseInfo | CardioExerciseInfo;
export interface StrengthExerciseInfo {
  kg: string;
  num: string;
  set: string;
}

export interface CardioExerciseInfo {
  time: string;
}

export interface ExerciseDataType {
  type: ExerciseType;
  name: string;
  info: ExerciseInfoType;
}

export interface SlideProps {
  id: string;
  image: any;
}
export interface BottomSheetProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

export interface User {
  username: string;
  uid: string;
  type: UserType;
  code: string;
}
