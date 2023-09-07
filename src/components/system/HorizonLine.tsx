import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  text?: string;
  isMarginVertical?: boolean;
}

const HorizonLine = ({text, isMarginVertical = false}: Props) => {
  return (
    <View style={[styles.container, isMarginVertical && {marginVertical: 16}]}>
      <View style={styles.line} />
      {text && (
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  line: {flex: 1, height: 1, backgroundColor: '#0000001A'},
  text: {width: 50, textAlign: 'center', color: 'black'},
});

export default HorizonLine;
