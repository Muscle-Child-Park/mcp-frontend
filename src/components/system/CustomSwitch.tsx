import {Animated, Easing, Pressable, StyleSheet, View} from 'react-native';
import {colors} from 'src/constants/colors';

interface Props {
  isEnabled: boolean;
  setIsEnabled: (isEnabled: boolean) => void;
}

export default function CustomSwitch({isEnabled, setIsEnabled}: Props) {
  const translateX = new Animated.Value(isEnabled ? 0 : 20);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    const toValue = isEnabled ? 20 : 0;

    Animated.timing(translateX, {
      toValue,
      duration: 300, // 애니메이션 지속 시간
      easing: Easing.linear, // 애니메이션 이징
      useNativeDriver: false, // 네이티브 드라이버 사용 여부
    }).start();
  };
  return (
    <Pressable onPress={toggleSwitch} style={styles.switchContainer}>
      <View style={styles.track}>
        <Animated.View style={[styles.thumb, {transform: [{translateX}]}]} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    width: 50,
    height: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 15,
  },
  track: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 15,
    width: 47,
  },
  thumb: {width: 27, height: 27, backgroundColor: 'white', borderRadius: 15},
});
