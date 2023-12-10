import React from 'react';
import {
  Animated,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import useToggleBottomSheet from 'src/hooks/useToggleBottomSheet';
import {BottomSheetProps} from 'src/types/type';
import CustomButton from '../CustomButton';

interface Props extends BottomSheetProps {
  children: React.ReactNode;
}

export default function DateSelectModal({
  modalVisible,
  children,
  setModalVisible,
}: Props) {
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
          {children}
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <CustomButton
                text="취소"
                layoutmode="basic"
                variant="stroke"
                onPress={() => setModalVisible(false)}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <CustomButton
                text="저장"
                layoutmode="basic"
                variant="fillPrimary"
                onPress={() => setModalVisible(false)}
              />
            </View>
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
  buttonContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    paddingTop: 20,
    width: '49%',
  },
});
