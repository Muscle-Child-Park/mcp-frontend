import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ReservationCard from 'src/components/system/ReservationCard';
import SortingBar from 'src/components/system/SortingBar';
import {sortTags} from 'src/constants/common';

export default function MyReservation() {
  const [currentTag, setCurrentTag] = useState(sortTags[0]);
  return (
    <ScrollView style={styles.containerWrapper}>
      <View style={styles.container}>
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
          <ReservationCard
            text="하체, 유산소 운동"
            time="09:00 - 10:00"
            mode="cancelSuccess"
          />
        </View>
      </View>
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
    marginVertical: 20,
  },
  history: {
    flex: 1,
    gap: 24,
  },
});
