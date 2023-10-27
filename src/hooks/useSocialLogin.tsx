import React from 'react';
import {
  login,
  logout,
  getProfile as getKakaoProfile,
  shippingAddresses as getKakaoShippingAddresses,
  unlink,
} from '@react-native-seoul/kakao-login';
import Config from 'react-native-config';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export default function useSocialLogin() {
  GoogleSignin.configure({
    webClientId: Config.GOOGLE_WEB_CLIENT_ID,
  });
  // 구글 로그인
  const signInWithGoogle = async (setLoading: (loading: boolean) => void) => {
    setLoading(true);
    // Check if your device supports Google Play
    // await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    try {
      const {idToken} = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const res = await auth().signInWithCredential(googleCredential);
      const accessToekn = await (await GoogleSignin.getTokens()).accessToken;
      console.log(res);
      console.log(accessToekn);
    } catch (e) {
      // console.error(e);
    } finally {
      setLoading(false);
    }
  };
  // 구글 로그아웃
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
  // 카카오 로그인
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
          } catch (err) {
            console.error('login err', err);
          }
        },
      },
    ]);
  };
  // 카카오 로그아웃
  const signOutWithKakao = async (): Promise<void> => {
    try {
      const message = await logout();
    } catch (err) {
      console.error('signOut error', err);
    }
  };
  // 프로필 조회
  const getProfile = async (): Promise<void> => {
    try {
      const profile = await getKakaoProfile();
    } catch (err) {
      console.error('signOut error', err);
    }
  };
  // 배송주소록 조회
  const getShippingAddresses = async (): Promise<void> => {
    try {
      const shippingAddresses = await getKakaoShippingAddresses();
    } catch (err) {
      console.error('signOut error', err);
    }
  };
  // 링크 해제
  const unlinkKakao = async (): Promise<void> => {
    try {
      const message = await unlink();
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  return {
    signInWithGoogle,
    signInWithKakao,
    signOutWithKakao,
    singOutWithGoogle,
    getProfile,
    getShippingAddresses,
    unlinkKakao,
  };
}
