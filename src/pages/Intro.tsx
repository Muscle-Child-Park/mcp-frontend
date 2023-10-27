import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  login,
  logout,
  getProfile as getKakaoProfile,
  shippingAddresses as getKakaoShippingAddresses,
  unlink,
} from '@react-native-seoul/kakao-login';
import ResultView from './IntroView';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '484202875409-u5bmg90eekcfq7nadtjgvlriloah866b.apps.googleusercontent.com',
});

const Intro = () => {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // 일반적인 패키지 사용 > 파베 적용 x
  /*
  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
      if ((error as any).code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if ((error as any).code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (
        (error as any).code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
      ) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

*/
  const signInWithGoogle = async () => {
    setLoading(true);
    // Check if your device supports Google Play
    // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const res = await auth().signInWithCredential(googleCredential);
    const accessToekn = await (await GoogleSignin.getTokens()).accessToken;
    console.log(res);
    setResult(JSON.stringify(res));
    console.log(accessToekn);
    setLoading(false);
  };

  const singOutWithGoogle = async () => {
    // try {
    //   await GoogleSignin.signOut();
    //   //  setState({user: null}); // Remember to remove the user from your app's state as well
    // } catch (error) {
    //   console.error(error);
    // }

    auth()
      .signOut()
      .then(() => {
        console.log('로그아웃 성공');
      })
      .catch(e => Alert.alert('Error', e.message));
    //  setState({user: null}); // Remember to remove the user from your app's state as well
  };

  const signInWithKakao = async (): Promise<void> => {
    Alert.alert('로그인', '카카오톡으로 간편로그인', [
      {text: '취소', style: 'cancel'},
      {
        text: '계속',
        onPress: async () => {
          try {
            const token = await login();
            const result = JSON.stringify(token);
            console.log(result);
            setResult(result);
          } catch (err) {
            console.error('login err', err);
          }
        },
      },
    ]);
  };

  const signOutWithKakao = async (): Promise<void> => {
    try {
      const message = await logout();

      setResult(message);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  const getProfile = async (): Promise<void> => {
    try {
      const profile = await getKakaoProfile();

      setResult(JSON.stringify(profile));
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  const getShippingAddresses = async (): Promise<void> => {
    try {
      const shippingAddresses = await getKakaoShippingAddresses();

      setResult(JSON.stringify(shippingAddresses));
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  const unlinkKakao = async (): Promise<void> => {
    try {
      const message = await unlink();

      setResult(message);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  return (
    <View style={styles.container}>
      <ResultView result={result} />
      <Pressable style={styles.button} onPress={signInWithKakao}>
        <Text style={styles.text}>카카오 로그인</Text>
      </Pressable>
      {/* <Pressable style={styles.button} onPress={() => getProfile()}>
        <Text style={styles.text}>프로필 조회</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => getShippingAddresses()}>
        <Text style={styles.text}>배송주소록 조회</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => unlinkKakao()}>
        <Text style={styles.text}>링크 해제</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => signOutWithKakao()}>
        <Text style={styles.text}>카카오 로그아웃</Text>
      </Pressable> */}
      {/* <Pressable style={styles.button} onPress={signInWithGoogle}>
        <Text style={styles.text}>구글 로그인</Text>
      </Pressable> */}
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signInWithGoogle}
        disabled={loading}
      />
      {/* <Pressable style={styles.button} onPress={singOutWithGoogle}>
        <Text style={styles.text}>구글 로그아웃</Text>
      </Pressable> */}
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
    // borderWidth: 1,
  },
  button: {
    // backgroundColor: '#FEE500',
    backgroundColor: '#F7E314',
    borderRadius: 7,
    borderWidth: 0,
    width: '80%',
    maxWidth: '100%',
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    // marginHorizontal: 10,
  },
  text: {
    color: '#3C1E1E',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
