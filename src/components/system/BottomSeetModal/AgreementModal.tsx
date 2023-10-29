import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import useToggleBottomSheet from 'src/hooks/useToggleBottomSheet';
import {BottomSheetProps} from 'src/types/type';
import CustomButton from '../CustomButton';
import {colors} from 'src/constants/colors';
import Checkbox from '../Checkbox';

interface Props extends BottomSheetProps {
  handlePressButton: () => void;
}

export default function AgreementModal({
  modalVisible,
  setModalVisible,
  handlePressButton,
}: Props) {
  const {closeModal, translateY, panResponders} = useToggleBottomSheet({
    handleCloseModal: () => {
      setModalVisible(false);
    },
    modalVisible,
  });
  const [isChecked, setIsChecked] = React.useState(false); // [0, 1, 2]

  return (
    <Modal
      visible={modalVisible}
      animationType={'fade'}
      transparent
      statusBarTranslucent>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            ...styles.bottomSheetContainer,
            transform: [{translateY: translateY}],
          }}
          {...panResponders.panHandlers}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>약관에 동의해주세요</Text>
            <Text style={styles.description}>
              여러분의 개인정보와 서비스 이용 권리를 안전하게 잘 지켜드릴게요
            </Text>
          </View>
          <View style={styles.checkRowContainer}>
            <Checkbox
              isChecked={isChecked}
              onValueChangeHandler={setIsChecked}
              text="모두 동의"
              size="medium"
              style={{gap: 8}}
              textColor={colors.gray100}
              checkBoxColor={colors.primary}
            />
            <Checkbox
              isChecked={isChecked}
              onValueChangeHandler={setIsChecked}
              text="[필수] 서비스 이용 약관 동의"
              size="medium"
              style={{gap: 8}}
              textColor={colors.gray100}
              checkBoxColor={colors.primary}
            />
          </View>
          <CustomButton
            layoutmode="basic"
            text="확인"
            variant="fillPrimary"
            onPress={handlePressButton}
          />
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    // backgroundColor: colors.gray100,
    // opacity: 0.8,
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 24,
    paddingBottom: 48,
    paddingHorizontal: 20,
    gap: 32,
  },
  textContainer: {
    paddingTop: 24,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28.8,
    color: colors.gray100,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: colors.gray100,
  },
  checkRowContainer: {
    gap: 32,
  },
});
