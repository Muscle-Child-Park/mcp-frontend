import React, {useState} from 'react';
import {Text, StyleSheet, SafeAreaView, View, TextInput} from 'react-native';
import ConfirmModal from 'src/components/system/CenterModal/ConfirmModal';
import CustomButton from 'src/components/system/CustomButton';
import ReservationCard from 'src/components/system/ReservationCard';
import {colors} from 'src/constants/colors';
import {useUserContext} from 'src/context/UserContext';

export default function UserRegistration() {
  const [uniqueNumber, setUniqueNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {
    state: {type},
  } = useUserContext();
  const isMentee = type === 'mentee';
  const subText = isMentee ? '선생님' : '회원님';
  const onChangeUniqueNumber = (text: string) => setUniqueNumber(text);
  // TODO: 텍스트인풋 컴포넌트 화
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleConfirm = () => {
    // TODO: 화면 뮤테이션이 있는데, 이는 잠깐의 로딩을 주어서 처리하자
    setModalVisible(false);
  };
  const registration = () => {
    setModalVisible(true);
  };
  return (
    <SafeAreaView style={styles.mainBackground}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>고유 번호</Text>
        <TextInput
          value={uniqueNumber}
          onChangeText={onChangeUniqueNumber}
          placeholder="#000000"
          placeholderTextColor={colors.gray50}
          style={styles.input}
        />
      </View>
      {!isMentee && (
        <View style={[styles.inputContainer, styles.divider]}>
          <Text style={styles.title}>수강 횟수</Text>
          <TextInput
            value={uniqueNumber}
            onChangeText={onChangeUniqueNumber}
            placeholder="0"
            placeholderTextColor={colors.gray50}
            style={styles.input}
          />
        </View>
      )}
      <View style={styles.buttonContainer}>
        <CustomButton
          text="등록하기"
          variant="fillPrimary"
          onPress={registration}
        />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.title}>
          {isMentee ? '멘토 리스트' : '등록 대기 리스트'}
        </Text>
        {isMentee ? (
          <View style={styles.list}>
            <ReservationCard
              mode="waitingForApproval"
              text={`홍길동 ${subText}`}
              hasRightIcon
            />
            <ReservationCard
              mode="approvalComplete"
              text={`김차박 ${subText}`}
              hasRightIcon
            />
          </View>
        ) : (
          <View style={styles.list}>
            <ReservationCard
              mode="registrationComplete"
              text={`홍길동 ${subText}`}
              hasRightIcon
            />
            <ReservationCard
              mode="registrationComplete"
              text={`김차박 ${subText}`}
              hasRightIcon
            />
          </View>
        )}
      </View>
      <ConfirmModal
        modalVisible={modalVisible}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        title={`전창준 선생님에게
멘토를 신청하시겠어요?`}
        description="선생님이 신청을 수락하시면 알려드릴게요"
        confirmText="신청"
        isCancel
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: 'white',
  },
  divider: {borderTopWidth: 0.33, borderColor: colors.gray25},
  inputContainer: {
    justifyContent: 'center',
    padding: 20,
    gap: 20,
  },
  title: {
    color: colors.gray75,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
  },
  button: {
    color: colors.gray75,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 27,
  },
  input: {
    color: colors.gray100,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  listContainer: {gap: 20, padding: 20, flex: 1},
  list: {
    // flex: 1,
    gap: 11,
  },
});
