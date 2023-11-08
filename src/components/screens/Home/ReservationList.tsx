import React from 'react';
import {StyleSheet, View} from 'react-native';
import TodayReservation from './TodayReservation';

export default function ReservationList() {
  return (
    <View style={styles.container}>
      <TodayReservation mode="success" />
      <TodayReservation />
      <TodayReservation mode="success" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
