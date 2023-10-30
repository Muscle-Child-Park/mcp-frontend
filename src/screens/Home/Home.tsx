import React, {useContext, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  StatusBar,
  View,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SmallBox from 'src/components/system/SmallBox';
import {colors} from 'src/constants/colors';
import CustomHeader from 'src/components/system/CustomHeader';
import ProgressBar from 'src/components/system/ProgressBar';
import MainCard from 'src/components/system/MainCard';
import CustomButton from 'src/components/system/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {BasicProps} from 'src/navigation/MainNavigator';
import PushAlarmModal from 'src/components/system/BottomSeetModal/PushAlarmModal';
import {HomeTabProps} from 'src/navigation/HomeNavigator';
import {useUserContext} from 'src/context/UserContext';

/**
background: linear-gradient(180deg, #57AEFF -30.67%, rgba(255, 255, 255, 0.0885417) 40.64%),
linear-gradient(0deg, #F2F3F5, #F2F3F5);
*/
type HomeScreenProp = CompositeNavigationProp<HomeTabProps, BasicProps>;

const Home = () => {
  const {width} = useWindowDimensions();
  const safeInsets = useContext(SafeAreaInsetsContext);
  const navigation = useNavigation<HomeScreenProp>();
  const [modalVisible, setModalVisible] = useState(true);
  const {
    state: {username},
  } = useUserContext();

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
          <Text style={[styles.title, {width: width - 40}]}>
            {`${username}님,
오늘도 힘내볼까요?`}
          </Text>
          <MainCard>
            <View
              style={{
                gap: 5,
              }}>
              <Text style={styles.trainerInfo}>
                김민재 트레이너님 (빌리프짐)
              </Text>
              <Text style={styles.remainCount}>3 / 10 회 남았어요!</Text>
            </View>
            <ProgressBar percent={30} />
          </MainCard>
          <MainCard>
            <CustomHeader headerSize="h4" headerText="이번주 예약" />
            <View style={{gap: 6}}>
              <SmallBox header="하체, 유산소" body="5일 (토) 오전 10:00" />
              <SmallBox header="코어" body="5일 (토) 오전 10:00" />
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                text="수업 예약하기"
                onPress={() => {
                  navigation.navigate('예약');
                }}
                variant="fillPrimary"
              />
            </View>
          </MainCard>
          {/* TODO: button 으로 만들어야할듯.. > onPress(() => {navigation.navigate('JournalScreen')}) */}
          <Pressable
            onPress={() => {
              navigation.navigate('JournalScreen');
            }}>
            <MainCard>
              <View style={{gap: 8}}>
                <CustomHeader headerSize="h4" headerText="운동일지" />
                <Text style={styles.text}>
                  PT 수업부터 개인운동까지 운동기록을 확인해보세요
                </Text>
              </View>
            </MainCard>
          </Pressable>
          <PushAlarmModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
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
  title: {
    height: 68,
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 33.6,
    color: colors.gray100,
    marginTop: 52,
    marginBottom: 16,
  },
  buttonContainer: {
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // gap: 20,
  },
  text: {
    color: '#8B8B8B',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
  },
  trainerInfo: {
    color: colors.gray100,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
  },
  remainCount: {
    color: colors.gray100,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21.6,
  },
});

export default Home;
