import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from 'src/constants/colors';

interface Props {
  time: string;
  onSelectTime: (time: string[]) => void;
  selected: string[] | null;
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
        if (selected?.includes(time)) {
          const newArr = selected.filter(item => item !== time);
          onSelectTime(newArr);
          return;
        }
        const newArr = [...(selected ?? []), time];
        onSelectTime(newArr);
      }}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          !isActive
            ? backgroundColor.disable
            : selected?.includes(time)
            ? backgroundColor.selected
            : backgroundColor.able
        }
        style={[
          styles.box,
          isActive && selected?.includes(time) && {borderColor: '#1F70FF'},
          !isActive && {borderColor: '#E4E4E4'},
        ]}>
        <Text
          style={[
            styles.text,
            !isActive && {
              color: '#989898',
            },
            isActive &&
              selected?.includes(time) && {
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
    width: 80,
    // paddingHorizontal: 20.5,
    paddingVertical: 12.5,
    borderWidth: 1,
    borderColor: '#EBECEC',
    borderRadius: 4,
  },
  text: {
    color: colors.gray100,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19.09,
    textAlign: 'center',
  },
});

export default TimeButton;
