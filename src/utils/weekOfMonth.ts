import {getDay, startOfMonth, startOfWeek} from 'date-fns';

// 정확한 주차 계산을 위해서는 해당 날짜가 속한 월의 시작 요일을 기준으로 주차를 계산
// 만약 2023 8월의 시작 요일이 화요일이라면, 28일의 경우 월요일이다. 이는 4주차에 해당하고 화요일 부터 5주차
export function getWeekOfDay(day: Date) {
  const startOfCurrentMonth = startOfMonth(day);
  const startDayOfWeek = getDay(startOfCurrentMonth);
  const baseDate = startOfWeek(day, {weekStartsOn: startDayOfWeek});
  // const baseMonth = baseDate.getMonth() + 1;
  const baseDays = baseDate.getDate();
  const weekOfMonth = Math.ceil(baseDays / 7);
  return weekOfMonth;
}
