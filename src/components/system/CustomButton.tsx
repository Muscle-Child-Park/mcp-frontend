import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  useWindowDimensions,
} from 'react-native';
import {colors} from 'src/constants/colors';

interface CustomButtonProps {
  text: string;
  layoutmode?: 'basic' | 'fullWidth';
  variant?: 'stroke' | 'fillPrimary';
  isActive?: boolean;
  disabled?: boolean;
}

interface Props extends TouchableOpacityProps, CustomButtonProps {}

const CustomButton = ({
  text,
  layoutmode = 'basic',
  variant,
  isActive = false,
  disabled,
  ...rest
}: Props) => {
  const {width} = useWindowDimensions();

  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        layoutmode === 'fullWidth' && {
          width: width - 40,
        },
        variant === 'stroke' && {
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: colors.primary,
        },
        variant === 'fillPrimary' && {
          backgroundColor: colors.primary,
        },
        // disabled && {opacity: 0.7},
        disabled && {backgroundColor: colors.gray25},
      ]}
      {...rest}>
      <Text
        style={[
          buttonStyles.text,
          // layoutmode === "fullWidth" && {
          //   fontSize: 16,
          //   fontWeight: "500",
          //   lineHeight: 19.2,
          // },
          variant === 'stroke' && {color: colors.primary},
          variant === 'fillPrimary' && {color: 'white'},
          disabled && {color: 'white'},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  button: {
    width: '100%',
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.gray100,
    lineHeight: 19.2,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default CustomButton;
