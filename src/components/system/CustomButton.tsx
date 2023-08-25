import {colors} from 'src/constants/colors';
import getDeviceWidth from 'src/utils/getDeviceWidth';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  layoutmode: 'inline' | 'fullWidth';
  variant: 'stroke' | 'fill' | 'big' | 'whiteBig';
  className?: string;
  isActive?: boolean;
}

interface Props extends TouchableOpacityProps, CustomButtonProps {}

const CustomButton = ({
  title,
  layoutmode,
  variant,
  className,
  isActive = false,
  ...rest
}: Props) => {
  const deviceWidth = getDeviceWidth();
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
      opacity: variant === 'fill' && !isActive ? 0.4 : 1, // for Survey's Next Btn
      // elevation: 6,
      backgroundColor:
        variant === 'fill' || variant === 'big' || isActive
          ? colors.primary
          : 'white',
      borderWidth: variant === 'stroke' ? 2 : 0,
      borderColor:
        variant === 'stroke' && !isActive ? colors.testBorder : 'transparent',
      // shadowColor: '#171717',
      // shadowOffset: {width: -3, height: 3},
      // shadowOpacity: 0.2,
      // shadowRadius: 3,
    },
    // active: {
    //   backgroundColor: '#404040',
    //   borderColor: 'transparent',
    // },
    text: {
      fontSize: variant === 'stroke' ? 15 : 18,
      lineHeight: 21.48,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color:
        variant === 'whiteBig' || (variant === 'stroke' && !isActive)
          ? 'black'
          : 'white',
      // textAlign: 'center',
    },
  });

  type styleKeys = keyof typeof buttonStyles;

  const selectedStyles = className ? buttonStyles[className as styleKeys] : {};

  return (
    // <Pressable
    <TouchableOpacity style={[buttonStyles.button, selectedStyles]} {...rest}>
      <Text style={buttonStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
