import React, {useEffect} from 'react';
import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';

const ImagePath = require('src/assets/images/logo.png');

export default function Chat() {
  const translateY = new Animated.Value(0);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: 20, // 움직일 거리 (위아래로 20 픽셀)
          duration: 1000, // 애니메이션 지속 시간
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);
  console.log('chat');
  return (
    <View style={styles.container}>
      <Animated.Image
        source={ImagePath}
        style={[
          styles.image,
          {
            transform: [{translateY}],
          },
        ]}
      />
      <Text style={styles.text}>서비스 준비 중입니다.</Text>
      <Text style={styles.text}>다음 버전을 기대해주세요!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 229,
    height: 235,
    marginBottom: 65.36,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
