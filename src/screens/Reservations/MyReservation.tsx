import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ReservationCard from 'src/components/system/ReservationCard';
import SortingBar from 'src/components/system/SortingBar';
import {sortTags} from 'src/constants/common';

const MyReservation = () => {
  const [currentTag, setCurrentTag] = useState(sortTags[0]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <ReservationCard
        text="하체, 유산소 운동"
        time="09:00 - 10:00"
        mode="today"
      />
      <View style={styles.sortingBar}>
        <SortingBar currentTag={currentTag} setCurrentTag={setCurrentTag} />
      </View>
      <View style={styles.history}>
        <ReservationCard
          text="8월 28일 운동"
          time="09:00 - 10:00"
          mode="reservationSuccess"
        />
        <ReservationCard
          text="하체, 유산소 운동"
          time="09:00 - 10:00"
          mode="classSuccess"
        />
        <ReservationCard
          text="하체, 유산소 운동"
          time="09:00 - 10:00"
          mode="cancelSuccess"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  history: {
    gap: 12,
  },
  sortingBar: {
    paddingVertical: 20,
  },
});
export default MyReservation;
