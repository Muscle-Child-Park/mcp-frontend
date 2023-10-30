import React, {useState} from 'react';
import {
  Text,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {IntroStackProps} from 'src/navigation/IntroNavigator';
import SocialButton from 'src/components/system/SocialButton';
import useSocialLogin from 'src/hooks/useSocialLogin';
import {useUserContext} from 'src/context/UserContext';
import {User} from 'src/types/type';

export default function Login({navigation}: IntroStackProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
  };
  const {width} = useWindowDimensions();
  const [loading, setLoading] = useState<boolean>(false);
  const {signInWithGoogle, signInWithKakao} = useSocialLogin();
  const {actions} = useUserContext();
  const handlePress = async (
    signIn: () => Promise<Pick<User, 'username' | 'uid'>>,
  ) => {
    // TODO: 로딩 스피너 넣어주기
    setLoading(true);
    const {username, uid} = await signIn();
    console.log(username, uid);
    actions.InitUserInfo(username, uid);
    setLoading(false);
    if (uid) {
      navigation.navigate('AgreementScreen');
    }
    // TODO: uid가 없을 경우 오류처리 // toast ?
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={[styles.container, {width: width - 40}]}>
        <SocialButton
          type="kakao"
          handlePress={() => handlePress(signInWithKakao)}
          disabled={loading}
        />
        <SocialButton
          type="google"
          handlePress={() => handlePress(signInWithGoogle)}
          disabled={loading}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    marginHorizontal: 20,
    marginBottom: 57,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 11,
  },
});
