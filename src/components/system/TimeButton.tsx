import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  time: string;
  onSelectTime: (time: string) => void;
  selected: string | null;
  isActive: boolean;
}

const backgroundColor = {
  able: ['#EBECEC', '#FFFFFF'],
  disable: ['#E4E4E4', '#F3F3F3'],
  selected: ['#1F70FF', '#EEF3FF'],
};

const TimeButton = ({time, onSelectTime, selected, isActive}: Props) => {
  return (
    <Pressable
      disabled={!isActive}
      // delayPressIn={0}
      onPress={() => {
        onSelectTime(time);
      }}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          !isActive
            ? backgroundColor.disable
            : selected === time
            ? backgroundColor.selected
            : backgroundColor.able
        }
        style={[
          styles.box,
          isActive && selected === time && {borderColor: '#1F70FF'},
          !isActive && {borderColor: '#E4E4E4'},
        ]}>
        <Text
          style={[
            styles.text,
            !isActive && {
              color: '#989898',
            },
            isActive &&
              selected === time && {
                color: '#1F70FF',
              },
          ]}>
          {time}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 107,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#EBECEC',
    borderRadius: 4,
  },
  text: {
    color: 'black',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19.09,
  },
});

export default TimeButton;
