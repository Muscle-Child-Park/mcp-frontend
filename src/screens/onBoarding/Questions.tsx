import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import data from 'src/constants/survey';

interface Props {
  index: number;
  question: string;
}

const Questions = ({index, question}: Props) => {
  return (
    <View style={{marginVertical: 35}}>
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
          color: 'black',
          fontSize: 22,
          fontWeight: '600',
          lineHeight: 26.25,
          textAlign: 'center',
        }}>
        {question}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Questions;
