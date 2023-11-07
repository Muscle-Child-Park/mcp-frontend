import React, {useContext, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {SafeAreaView, ScrollView, StyleSheet, StatusBar} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {colors} from 'src/constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import IntroductionModal from 'src/components/system/BottomSeetModal/IntroductionModal';
import {useUserContext} from 'src/context/UserContext';
import {ModalStep} from 'src/types/type';
import Mentee from 'src/components/screens/Home/Mentee';
import Mentor from 'src/components/screens/Home/Mentor';

/**
background: linear-gradient(180deg, #57AEFF -30.67%, rgba(255, 255, 255, 0.0885417) 40.64%),
linear-gradient(0deg, #F2F3F5, #F2F3F5);
*/

const Home = () => {
  const safeInsets = useContext(SafeAreaInsetsContext);
  const [modalStep, setModalStep] = useState<ModalStep>(1);
  const [modalVisible, setModalVisible] = useState(true);
  const {
    state: {username, type},
  } = useUserContext();
  const isMentee = type === 'mentee';

  return (
    <SafeAreaView>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView>
        <LinearGradient
          start={{x: 0.5, y: -0.5067}}
          end={{x: 0.5, y: 0.3064}}
          // locations={[-0.367, 0.464]}
          colors={['#57AEFF', '#FFFFFF17']}
          style={[
            styles.mainBackground,
            safeInsets && {paddingTop: safeInsets.top},
          ]}>
          {isMentee ? (
            <Mentee username={username} />
          ) : (
            <Mentor username={username} />
          )}
          <IntroductionModal
            step={modalStep}
            setStep={setModalStep}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            username={username}
          />
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingBottom: 32,
    gap: 8,
  },
});

export default Home;
