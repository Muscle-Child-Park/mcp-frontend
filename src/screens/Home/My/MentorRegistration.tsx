import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import CustomButton from 'src/components/system/CustomButton';
import ReservationCard from 'src/components/system/ReservationCard';
import {colors} from 'src/constants/colors';

export default function MentorRegistration() {
  const [uniqueNumber, setUniqueNumber] = useState('');
  const onChangeUniqueNumber = (text: string) => setUniqueNumber(text);
  // TODO: 텍스트인풋 컴포넌트 화
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
      <View style={styles.inputContainer}>
        <Text style={styles.title}>수강 횟수</Text>
        <TextInput
          value={uniqueNumber}
          onChangeText={onChangeUniqueNumber}
          placeholder="0회"
          placeholderTextColor={colors.gray50}
          style={styles.input}
        />
      </View>
      <CustomButton text="등록하기" variant="fillPrimary" />
      <View style={styles.listContainer}>
        <Text style={styles.title}>멘토 리스트</Text>
        <View style={styles.list}>
          <ReservationCard
            mode="classSuccess"
            text="신현석 선생님"
            hasRightIcon
          />
          <ReservationCard
            mode="classSuccess"
            text="석현신 선생님"
            hasRightIcon
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  inputContainer: {
    justifyContent: 'center',
    marginBottom: 20,
    gap: 22.5,
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
  listContainer: {gap: 20, marginTop: 38, flex: 1},
  list: {
    // flex: 1,
    gap: 11,
  },
});
