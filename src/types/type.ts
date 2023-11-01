export type UserType = 'mentee' | 'mentor';
export type ModalStep = 1 | 2; // 1(alarm) -> 2(start)
export type LogType = {
  id: number;
  date: string;
};
export type CalendarHeaderType = 'calendar' | 'list';

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
