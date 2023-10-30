export interface BottomSheetProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

export interface User {
  username: string;
  uid: string;
}

export type ModalStep = 1 | 2; // 1(alarm) -> 2(start)
