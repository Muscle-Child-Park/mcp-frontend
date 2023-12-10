export const morning = [
  {id: 0, time: '7:00', isActive: true},
  {id: 1, time: '8:00', isActive: true},
  {id: 2, time: '9:00', isActive: true},
  {id: 3, time: '10:00', isActive: true},
  {id: 4, time: '11:00', isActive: true},
];

export const afternoon = [
  {id: 0, time: '12:00', isActive: true},
  {id: 1, time: '1:00', isActive: true},
  {id: 2, time: '2:00', isActive: true},
  {id: 3, time: '3:00', isActive: true},
  {id: 4, time: '4:00', isActive: true},
  {id: 5, time: '5:00', isActive: true},
  {id: 6, time: '6:00', isActive: true},
  {id: 7, time: '7:00', isActive: true},
  {id: 8, time: '8:00', isActive: true},
  {id: 9, time: '9:00', isActive: true},
  {id: 10, time: '10:00', isActive: true},
  {id: 11, time: '11:00', isActive: true},
];

export const daysofweek = ['월', '화', '수', '목', '금', '토', '일'];
// 각 요일에 대한 순서를 나타내는 객체 생성
export const dayOrder = {월: 1, 화: 2, 수: 3, 목: 4, 금: 5, 토: 6, 일: 7};
export type DayOrder = keyof typeof dayOrder;
