import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ConfirmModal from 'src/components/system/CenterModal/ConfirmModal';
import ReservationCard from 'src/components/system/ReservationCard';
import SortingBar from 'src/components/system/SortingBar';
import {sortTagsForMentee} from 'src/constants/common';

export default function UserManagement() {
  const [currentTag, setCurrentTag] = useState(sortTagsForMentee[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isCancel, setIsCancel] = useState(false);
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleConfirm = () => {
    setIsCancel(true);
  };
  const handleSuccess = () => {
    setModalVisible(false);
    setIsCancel(false);
    // TODO: cancel success api request
  };

  return (
    <ScrollView style={styles.containerWrapper}>
      <View style={styles.container}>
        <View style={styles.sortingBar}>
          <SortingBar currentTag={currentTag} setCurrentTag={setCurrentTag} />
        </View>
        <View style={styles.history}>
          <ReservationCard
            text="8월 28일 운동"
            time="09:00 - 10:00"
            mode="ticketCounting"
            modeText="1/nn"
            hasRightIcon
          />
          <ReservationCard
            text="하체, 유산소 운동"
            time="09:00 - 10:00"
            mode="ticketCounting"
            modeText="1/nn"
            hasRightIcon
          />
          <ReservationCard
            text="하체, 유산소 운동"
            time="09:00 - 10:00"
            mode="ticketCounting"
            modeText="1/nn"
            hasRightIcon
          />
          <ReservationCard
            text="하체, 유산소 운동"
            time="09:00 - 10:00"
            mode="expired"
            hasRightIcon
          />
          <ReservationCard
            text="하체, 유산소 운동"
            time="09:00 - 10:00"
            mode="expired"
            hasRightIcon
          />
        </View>
      </View>
      <ConfirmModal
        modalVisible={modalVisible}
        handleCancel={isCancel ? handleSuccess : handleCancel}
        handleConfirm={handleConfirm}
        title={isCancel ? '예약이 취소되었습니다' : '예약을 취소하시겠어요?'}
        description={isCancel ? '예약이 성공적으로 취소되었습니다' : undefined}
        confirmText="완료"
        isCancel={isCancel ? false : true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    margin: 20,
  },
  sortingBar: {
    marginBottom: 20,
  },
  history: {flex: 1, gap: 20},
});
