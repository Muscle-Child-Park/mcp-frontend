import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// TODO: 나중에 Reservation.tsx에 있는 타입들을 분리시킬때 이것도 없애고 거기서 가져오기
type ReservationStackParamList = {
  MainReservation: undefined;
  UserScreen: {headerTitle: string};
};

type ReservationStackType = keyof ReservationStackParamList;

interface ReservationStack {
  ReservationStackType: ReservationStackType;
}

const initialState: ReservationStack = {
  ReservationStackType: 'MainReservation',
};

/**
 * HeaderTitleSlice에서 관리할 상태를 지정합니다.
 */
export const ReservationTypeSlice = createSlice({
  name: 'reservationStackType',
  initialState,
  reducers: {
    setReservationStackType: (
      state,
      action: PayloadAction<ReservationStackType>,
    ) => {
      state.ReservationStackType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

export const {setReservationStackType} = ReservationTypeSlice.actions;
export default ReservationTypeSlice.reducer;
