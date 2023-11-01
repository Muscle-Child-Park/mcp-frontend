import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {colors} from 'src/constants/colors';
import {CalendarHeaderType} from 'src/types/type';

interface Props {
  type: CalendarHeaderType;
  title: string;
  onPress: () => void;
}

const buttonText = {
  calendar: '리스트로 보기',
  list: '캘린더로 보기',
};

export default function CustomHeader({onPress, title, type}: Props) {
  const [month, year] = title.split(' ');
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.month}>{month}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
      <Pressable onPress={onPress}>
        <Text style={styles.button}>{buttonText[type]}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
  },
  month: {
    fontSize: 28,
    fontWeight: '300',
    // lineHeight: 33.6,
    color: colors.gray100,
  },
  year: {
    fontSize: 15,
    fontWeight: '300',
    // lineHeight: 33.6,
    color: colors.gray100,
  },
  button: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: colors.gray100,
  },
});
