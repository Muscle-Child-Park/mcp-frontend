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
  onboarding?: number[][]; // for mentee
  agency?: string; // for mentor
}

export interface UserBody {
  name: string;
  socialId: string;
  socialType: string;
}

export interface Onboarding {
  bodyPurpose: string;
  exercisePurpose: string;
  balance: string;
  interest: string;
  lifeStyle: string;
  name: string;
}

export interface CommonResponse<T> {
  status: number;
  message: string;
  data: T;
}
// Home Info Response
export interface Home {
  trainerReservations: TrainerReservation[];
  flattenedList: FlattenedList[];
}

export interface FlattenedList {
  id: number;
  title: string;
  lessonDate: string;
  timeSlot: string;
}

export interface TrainerReservation {
  trainerId: number;
  name: string;
  ticketGenerateInfo: string;
  totalQuantity: number;
  leftQuantity: number;
}

// Personal Exercise Info Response
export interface PersonalExercise {
  exercise: Exercise[];
  title: string;
  lessonDate: string;
  timeSlot: string;
  completionToggle: boolean;
  logReflectionResponseDto: LogReflectionResponseDto;
}

export interface Exercise {
  id: number;
  exerciseType: string;
  name: string;
  weight: string;
  reps: number;
  sets: string;
  runTime: number;
}

export interface LogReflectionResponseDto {
  logId: number;
  memo: string;
}

export interface PersonalExerciseList {
  personalExerciseId: number;
  title: string;
  lessonDate: string;
  timeSlot: string;
  completionToggle: boolean;
  classType: string;
}

export interface PersonalExerciseRequestBody {
  personalExerciseRequest: PersonalExerciseRequest;
  exerciseRequestDtos: ExerciseRequestDto[];
}

export interface ExerciseRequestDto {
  exerciseType: string;
  name: string;
  sets: string;
  weight: string;
  reps: number;
  runTime: number;
}

export interface PersonalExerciseRequest {
  title: string;
  lessonDate: string;
  timeSlot: string;
  classType: string;
}

export interface MemberExerciseReflectionCreateBody {
  personalId: number;
  memberId: number;
  log: string;
}

export interface MemberExerciseReflectionEditBody {
  personalId: number;
  exerciseDiaryId: number;
  log: string;
}
