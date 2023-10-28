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
import {BottomSheetProps} from 'src/types/type';

export default function PushAlarmModal({
  modalVisible,
  setModalVisible,
}: BottomSheetProps) {
  const {closeModal, translateY, panResponders} = useToggleBottomSheet({
    handleCloseModal: () => {
      setModalVisible(false);
    },
    modalVisible,
  });
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
            <View>
              <Text style={styles.title}>PUSH 알림을 켜고</Text>
              <Text style={styles.title}>빠르게 소식을 받아보세요</Text>
            </View>
            <Text style={styles.description}>
              빠르게 일정을 확인하시는 것 외의 불필요한 연락은 드리지 않을게요
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <CustomButton
              layoutmode="basic"
              text="알림을 활용할게요"
              variant="fillPrimary"
              onPress={() => {
                // TODO: 회고록 작성 로직 고민
              }}
            />
            <Pressable style={styles.secondButton}>
              <Text style={styles.secondText}>다음에 할래요</Text>
            </Pressable>
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
