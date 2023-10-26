import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomSwitch from 'src/components/system/CustomSwitch';
import ListButton from 'src/components/system/ListButton';
import {colors} from 'src/constants/colors';

const My = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainBackground}>
        <View style={styles.header}>
          <Text style={styles.name}>정지현</Text>
          <Text style={styles.uniqueNumber}>#20214</Text>
        </View>
        {/* TODO: 수강권 이미지 */}
        <View style={styles.courseImage} />
        <ListButton title="회원정보 수정" handlePress={() => {}} />
        <View style={styles.divider} />
        <View style={styles.pushRowContainer}>
          <Text style={styles.pushText}>앱 PUSH 동의</Text>
          <CustomSwitch isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
        </View>
        <View style={styles.divider} />
        <ListButton title="로그아웃" handlePress={() => {}} hasBorderBottom />
        <Text style={styles.exitText}>회원탈퇴</Text>
      </View>
    </SafeAreaView>
  );
};

export default My;

const styles = StyleSheet.create({
  mainBackground: {
    paddingVertical: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    gap: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28.8,
    color: colors.gray100,
  },
  uniqueNumber: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.6,
    color: colors.primary,
  },
  courseImage: {
    marginHorizontal: 20,
    height: 176,
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 25,
  },
  divider: {
    height: 8,
    backgroundColor: colors.background,
  },
  pushRowContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pushText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: colors.gray75,
  },
  exitText: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.8,
    color: colors.gray50,
    borderBottomColor: colors.gray25,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
});
