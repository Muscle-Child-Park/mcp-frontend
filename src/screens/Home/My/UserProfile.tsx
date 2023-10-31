import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {colors} from 'src/constants/colors';
import {useUserContext} from 'src/context/UserContext';

export default function UserProfile() {
  const {
    state: {username: currentUser},
  } = useUserContext();
  const [username, setUsername] = useState(currentUser);
  const onChangeText = (text: string) => setUsername(text);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainBackground}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>회원 이름</Text>
          <Pressable
            onPress={() => {
              // TODO: API 연결
            }}>
            <Text style={styles.button}>변경</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={username}
            onChangeText={onChangeText}
            placeholder="이름을 입력해주세요."
            placeholderTextColor={colors.gray50}
            style={styles.input}
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
    gap: 18,
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
    borderRadius: 8,
    backgroundColor: colors.background,
    paddingVertical: 5,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  input: {
    color: colors.gray100,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
  },
});
