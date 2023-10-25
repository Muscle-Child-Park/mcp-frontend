import React from 'react';
import MainCard from './MainCard';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from 'src/constants/colors';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function CourseCard({title, children}: Props) {
  return (
    <MainCard style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.body}>{children}</View>
    </MainCard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  title: {
    width: '100%',
    fontSize: 18,
    lineHeight: 21.6,
    color: colors.gray100,
    paddingBottom: 16,
    borderBottomWidth: 0.33,
    borderBottomColor: colors.gray25,
  },
  body: {
    width: '100%',
  },
});
