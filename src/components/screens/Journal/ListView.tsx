import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ReservationCard from 'src/components/system/ReservationCard';
import {colors} from 'src/constants/colors';
import {JournalStackProps} from 'src/navigation/JournalNavigator';
import CustomHeader from './CustomHeader';

// TODO: 무한스크롤로 구현해야할 듯? > calendar이용할 수 있는지 조사
interface Props {
  onTabPress: () => void;
}
export default function ListView({onTabPress}: Props) {
  const navigation = useNavigation<JournalStackProps>();
  return (
    <View style={styles.container}>
      {/* <CustomHeader onPress={onTabPress} title={currentTitle} type="list" /> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 14,
        }}>
        <View style={{gap: 9, alignItems: 'center'}}>
          <Text
            style={{
              color: colors.gray100,
              fontWeight: '600',
              fontSize: 18,
              lineHeight: 21.6,
            }}>
            30
          </Text>
          <Text
            style={{
              color: colors.gray100,
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 16.8,
            }}>
            월요일
          </Text>
        </View>
        <ReservationCard
          text="하체, 유산소 운동"
          time="09:00 - 10:00"
          mode="pt"
          handlePress={() => navigation.navigate('수업 상세')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 14,
        }}>
        <View
          style={{
            gap: 9,
            alignItems: 'center',
            width: 40,
            // flex: 0,
          }}></View>
        <ReservationCard
          text="유산소"
          time="10:30 - 11:00"
          mode="personalExercise"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 14,
        }}>
        <View style={{gap: 9, alignItems: 'center'}}>
          <Text
            style={{
              color: colors.gray100,
              fontWeight: '600',
              fontSize: 18,
              lineHeight: 21.6,
            }}>
            31
          </Text>
          <Text
            style={{
              color: colors.gray100,
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 16.8,
            }}>
            화요일
          </Text>
        </View>
        <ReservationCard text="코어" time="09:00 - 10:00" mode="pt" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 8,
  },
});
