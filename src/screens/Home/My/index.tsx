import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Copy} from 'src/assets/images';
import CustomSwitch from 'src/components/system/CustomSwitch';
import ListButton from 'src/components/system/ListButton';
import {colors} from 'src/constants/colors';
import {useUserContext} from 'src/context/UserContext';
import {BasicProps} from 'src/navigation/MainNavigator';

const text = {
  mentee: {
    subName: '회원님',
    registrationTitle: '멘토 등록',
  },
  mentor: {
    subName: '트레이너님',
    registrationTitle: '회원 등록',
  },
};

export default function My() {
  const {
    state: {username: currentUser, code, type},
  } = useUserContext();
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation<BasicProps>();
  const copyToClipboard = () => {
    const textToCopy = '#00000';
    Clipboard.setString(textToCopy);
  };

  return (
    <SafeAreaView style={styles.mainBackground}>
      <View style={styles.header}>
        <Text
          style={styles.name}>{`${currentUser} ${text[type].subName}`}</Text>
        <Pressable style={styles.copyContainer} onPress={copyToClipboard}>
          <Text style={styles.uniqueNumber}>{`고유코드: #${code}`}</Text>
          <Copy />
        </Pressable>
      </View>
      <View style={styles.divider} />
      <ListButton
        title="회원정보 확인"
        handlePress={() => {
          navigation.navigate('UserProfileScreen');
        }}
        hasBorderBottom
      />
      <ListButton
        title={`${text[type].registrationTitle}`}
        handlePress={() => {
          navigation.navigate('UserRegistrationScreen');
        }}
      />
      <View style={styles.divider} />
      <View style={styles.pushRowContainer}>
        <Text style={styles.pushText}>앱 PUSH 동의</Text>
        <CustomSwitch isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      </View>
      <View style={styles.divider} />
      <ListButton
        title="로그아웃"
        handlePress={() => {
          // TODO: API 연결
        }}
        hasBorderBottom
      />
      <Text style={styles.exitText}>회원탈퇴</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    paddingVertical: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    gap: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28.8,
    color: colors.gray100,
  },
  copyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  uniqueNumber: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 21.6,
    color: colors.primary,
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
