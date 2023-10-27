import {
  View,
  StyleSheet,
  Modal,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import DropdownBox from './DropdownBox';
import {sortTypes} from 'src/constants/common';
import useToggleBottomSheet from 'src/hooks/useToggleBottomSheet';

interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selected: number;
  setSelected: (selected: number) => void;
}

const BottomSheet = ({
  modalVisible,
  setModalVisible,
  selected,
  setSelected,
}: Props) => {
  const {closeModal, translateY, panResponders} = useToggleBottomSheet({
    handleCloseModal: () => {
      setModalVisible(false);
    },
    modalVisible,
  });
  // console.log(translateY);
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
          {sortTypes.map((sortType, idx) => (
            <DropdownBox
              title={sortType}
              key={idx}
              isChecked={idx === selected}
              selected={idx}
              setSelected={setSelected}
              closeModal={closeModal}
            />
          ))}
        </Animated.View>
      </View>
    </Modal>
  );
};

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
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 24,
    paddingBottom: 48,
    paddingHorizontal: 20,
  },
});

export default BottomSheet;
