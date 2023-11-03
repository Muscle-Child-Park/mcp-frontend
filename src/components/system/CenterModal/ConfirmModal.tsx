import React from 'react';
import {View, StyleSheet, Modal, Text, Pressable, Alert} from 'react-native';
import {colors} from 'src/constants/colors';

interface Props {
  modalVisible: boolean;
  handleCancel: () => void;
  handleConfirm: () => void;
  title: string;
  description?: string;
  isCancel?: boolean;
  confirmText?: string;
}

export default function ConfirmModal({
  modalVisible,
  handleCancel,
  handleConfirm,
  title,
  description,
  isCancel,
  confirmText = '완료',
}: Props) {
  // TODO: step === 1 일때, 모달을 드래그로 내리는 것 방지

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleCancel}>
      <View style={styles.overlay}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{title}</Text>
              {description && (
                <Text style={styles.description}>{description}</Text>
              )}
            </View>
            <View style={styles.buttonWrapper}>
              {isCancel && (
                <Pressable onPress={handleCancel}>
                  <Text style={[styles.buttonText, {color: colors.gray50}]}>
                    취소
                  </Text>
                </Pressable>
              )}
              <Pressable onPress={isCancel ? handleConfirm : handleCancel}>
                <Text style={[styles.buttonText, {color: colors.primary}]}>
                  {confirmText}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    paddingTop: 32,
    paddingBottom: 24,
    paddingHorizontal: 50,
    backgroundColor: 'white',
    gap: 32,
    borderRadius: 8,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textWrapper: {
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
    color: colors.gray100,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    color: colors.gray50,
    textAlign: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 81,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19.2,
  },
});
