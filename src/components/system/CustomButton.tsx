import {colors} from '@/constants/colors';
import getDeviceWidth from '@/utils/getDeviceWidth';
import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: string;
  layoutmode: 'inline' | 'fullWidth';
  variant: 'stroke' | 'fill' | 'big' | 'whiteBig';
}

const CustomButton = ({title, layoutmode, variant}: Props) => {
  // const [isPressed, setIsPressed] = useState(false);
  const deviceWidth = getDeviceWidth();
  // console.log(deviceWidth);
  const buttonStyles = StyleSheet.create({
    button: {
      // flex: 1,
      // marginHorizontal: 16,
      width: layoutmode === 'fullWidth' ? deviceWidth - 40 : deviceWidth - 75, // 레이아웃 모드에 따라 width 조절
      maring: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 15,
      paddingRight: 29,
      paddingBottom: 15,
      paddingLeft: 29,
      borderRadius: 4,
      // elevation: 6,
      backgroundColor:
        variant === 'fill' || variant === 'big' ? colors.test : 'white',
      borderWidth: variant === 'stroke' ? 2 : 0,
      borderColor: variant === 'stroke' ? colors.testBorder : 'none',
    },
    text: {
      fontSize: variant === 'big' || variant === 'whiteBig' ? 20 : 16,
      lineHeight: variant === 'big' || variant === 'whiteBig' ? 28 : 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: variant === 'whiteBig' || variant === 'stroke' ? 'black' : 'white',
    },
  });

  const handlePress = () => {
    // setIsPressed(true);
    Alert.alert('Button pressed');
  };

  // const handlePressOut = () => {
  //   setIsPressed(false);
  // };

  return (
    // <Pressable
    <TouchableOpacity
      onPress={handlePress}
      style={buttonStyles.button}
      // onPressOut={handlePressOut}
    >
      <Text style={buttonStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
