import React from 'react';
import {Text, View} from 'react-native';
import {colors} from 'src/constants/colors';
import ReservationCard from './ReservationCard';

interface Props {
  log: string;
}

const FeedListItem = ({log}: Props) => {
  return (
    // <Text
    //   style={{
    //     marginHorizontal: 20,
    //     color: colors.gray100,
    //     fontWeight: '500',
    //     fontSize: 16,
    //   }}>
    //   {log}
    // </Text>
    <View style={{marginHorizontal: 20, gap: 8}}>
      <ReservationCard
        text="하체, 유산소 운동"
        time="09:00 - 10:00"
        mode="pt"
      />
      <ReservationCard
        text="개인운동"
        time="09:00 - 10:00"
        mode="personalExercise"
      />
    </View>
  );
};

export default FeedListItem;
