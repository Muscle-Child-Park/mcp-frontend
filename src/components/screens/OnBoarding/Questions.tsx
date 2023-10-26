import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from 'src/constants/colors';

interface Props {
  index: number;
  question: string;
}

const Questions = ({index, question}: Props) => {
  return (
    <View style={{paddingVertical: 32}}>
      {/* Question Counter */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        {/* <Text
          style={{color: '#333', fontSize: 15, opacity: 0.6, marginRight: 2}}>
          {index + 1}
        </Text>
        <Text style={{color: '#333', fontSize: 13, opacity: 0.6}}>
          / {data.length}
        </Text> */}
      </View>

      {/* Question */}
      <Text
        style={{
          color: colors.gray100,
          fontSize: 24,
          fontWeight: '600',
          lineHeight: 28.8,
          // textAlign: 'center',
        }}>
        {question}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Questions;
