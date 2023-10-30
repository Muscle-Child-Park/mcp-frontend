import {
  View,
  StyleSheet,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Text,
  Pressable,
} from 'react-native';
import CustomButton from '../CustomButton';
import useToggleBottomSheet from 'src/hooks/useToggleBottomSheet';
import {colors} from 'src/constants/colors';
import {BottomSheetProps, ModalStep} from 'src/types/type';
import {Copy} from 'src/assets/images';
import Clipboard from '@react-native-clipboard/clipboard';

interface Props extends BottomSheetProps {
  step: ModalStep;
  username: string;
  setStep: (step: ModalStep) => void;
}

const modalInfo = {
  1: {
    title: `PUSH 알림을 켜고
빠르게 소식을 받아보세요`,
    description: `빠르게 일정을 확인하시는 것 외의
불필요한 연락은 드리지 않을게요`,
    buttonText: '알림을 활용할게요',
  },
  2: {
    title: `님,
회원이 되신 걸 축하해요!`,
    description: `건강한 습관 MAVE에서 PT를 등록하려면 
아래의 고유코드를 선생님께 전달해주세요`,
    buttonText: '시작하기',
  },
};

export default function IntroductionModal({
  step,
  setStep,
  modalVisible,
  setModalVisible,
  username,
}: Props) {
  // TODO: step === 1 일때, 모달을 드래그로 내리는 것 방지
  const {closeModal, translateY, panResponders} = useToggleBottomSheet({
    handleCloseModal: () => {
      setModalVisible(false);
    },
    modalVisible,
  });

  const copyToClipboard = () => {
    const textToCopy = '#00000';
    Clipboard.setString(textToCopy);
  };
  return (
    <Modal
      visible={modalVisible}
      animationType={'fade'}
      transparent
      statusBarTranslucent>
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={step === 2 ? closeModal : undefined}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            ...styles.bottomSheetContainer,
            transform: [{translateY: translateY}],
          }}
          {...panResponders.panHandlers}>
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.title}>
                {step === 2
                  ? username.concat(modalInfo[step].title)
                  : modalInfo[step].title}
              </Text>
            </View>
            <Text style={styles.description}>
              {modalInfo[step].description}
            </Text>
            {step === 2 && (
              <View style={styles.codeContainer}>
                <Text style={styles.code}>#00000</Text>
                <Pressable
                  style={styles.copyContainer}
                  onPress={copyToClipboard}>
                  <Text style={styles.copyText}>복사하기</Text>
                  <Copy />
                </Pressable>
              </View>
            )}
          </View>
          <View style={styles.buttonWrapper}>
            <CustomButton
              layoutmode="basic"
              text={modalInfo[step].buttonText}
              variant="fillPrimary"
              onPress={() => {
                // TODO: 회고록 작성 로직 고민
                if (step === 2) {
                  closeModal();
                }
              }}
            />
            {step === 1 && (
              <Pressable style={styles.secondButton} onPress={() => setStep(2)}>
                <Text style={styles.secondText}>다음에 할래요</Text>
              </Pressable>
            )}
          </View>
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
    // justifyContent: 'center',
    width: '100%',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 24,
    paddingBottom: 48,
    paddingHorizontal: 20,
  },
  textContainer: {marginVertical: 32, gap: 16},
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
  codeContainer: {
    gap: 4,
  },
  code: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28.8,
    color: colors.primary,
  },
  copyContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  copyText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.4,
    color: colors.gray100,
  },
  buttonWrapper: {
    width: '100%',
    gap: 16,
  },
  secondButton: {
    width: '100%',
  },
  secondText: {
    width: '100%',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.4,
    color: colors.gray50,
    textAlign: 'center',
    borderBottomColor: colors.gray25,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});
