export const sortTagsForMentee = ['전체', '수업내용', '취소내용'];
export const sortTagsForMentor = ['전체', '수강중', '수강완료'];
export const sortTypes = ['최근 추가순', '최근 수업순', '가나다순'];
export const exerciseTags = ['근력', '유산소'] as const;
export const initialExerciseInfo = {
  근력: {kg: '', num: '', set: ''},
  유산소: {
    time: '',
  },
};
export const checkList = [
  '모두 동의',
  '[필수] 서비스 이용 약관 동의',
  '[필수] 개인정보 수집 및 이용 동의',
  '[필수] 개인정보 제3자 제공 동의',
];
export const slides = [
  {
    id: '1',
    image: require('src/assets/images/onboarding1.png'),
  },
  {
    id: '2',
    image: require('src/assets/images/onboarding2.png'),
  },
  {
    id: '3',
    image: require('src/assets/images/onboarding3.png'),
  },
];
