import React, {useEffect, useRef} from 'react';
import {Animated, useWindowDimensions, StyleSheet, View} from 'react-native';

const ProgressBar = ({percent = 80}) => {
  const layout = useWindowDimensions();
  const counter = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    load(percent);
  }, []);

  const load = (count: number) => {
    Animated.timing(counter, {
      toValue: count,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const width = counter.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const styles = StyleSheet.create({
    progressBarBlock: {
      width: layout.width - 72,
      height: 8,
      flexDirection: 'row',
      backgroundColor: '#D9D9D9',
      borderRadius: 10,
    },
    ProgressBar: {
      backgroundColor: '#717171',
      borderRadius: percent,
      width,
    },
  });

  return (
    <View style={styles.progressBarBlock}>
      <Animated.View style={styles.ProgressBar} />
    </View>
  );
};

export default ProgressBar;
