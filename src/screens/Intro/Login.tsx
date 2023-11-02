import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {IntroStackProps} from 'src/navigation/IntroNavigator';
import SocialButton from 'src/components/system/SocialButton';
import useSocialLogin from 'src/hooks/useSocialLogin';
import {useUserContext} from 'src/context/UserContext';
import {User} from 'src/types/type';
import Indicator from 'src/components/screens/Intro/Login/Indicator';
import ImageSlider from 'src/components/screens/Intro/Login/ImageSlider';
import {slides} from 'src/constants/common';

const {width} = Dimensions.get('window');

export default function Login({navigation}: IntroStackProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
  };
  const [loading, setLoading] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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
  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlide(currentIndex);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <ImageSlider
        data={slides}
        updateCurrentSlideIndex={updateCurrentSlideIndex}
      />
      <Indicator data={slides} currentIndex={currentSlide} />
      <View style={[styles.buttonContainer, {width: width - 40}]}>
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
  container: {flex: 1, backgroundColor: 'white'},
  buttonContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 57,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 11,
  },
});
