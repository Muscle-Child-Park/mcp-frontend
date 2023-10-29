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

export default function Login({navigation}: IntroStackProps) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.darker,
  };
  const {width} = useWindowDimensions();
  const [loading, setLoading] = useState<boolean>(false);
  const {signInWithGoogle, signInWithKakao} = useSocialLogin();
  const handlePress = async (signIn: () => Promise<boolean>) => {
    setLoading(true);
    const result = await signIn();
    setLoading(false);
    if (result) {
      navigation.navigate('AgreementScreen');
    }
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
