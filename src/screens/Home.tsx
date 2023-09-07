import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
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
import {RightArrow} from 'src/assets/images';
import MainCard from 'src/components/system/MainCard';
import CustomButton from 'src/components/system/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import getDeviceWidth from 'src/utils/getDeviceWidth';

const styles = StyleSheet.create({
  mainBackground: {
    flex: 1,
    backgroundColor: colors.background,
    gap: 14,
  },
  title: {
    width: getDeviceWidth() - 40,
    marginHorizontal: 20,
    height: 68,
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 33.6,
    color: '#222222',
    marginTop: 52,
    // marginBottom: 24,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    color: '#6C6C6C',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
  },
});

/**
 * 
background: linear-gradient(180deg, #57AEFF -30.67%, rgba(255, 255, 255, 0.0885417) 40.64%),
linear-gradient(0deg, #F2F3F5, #F2F3F5);

 */
const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <LinearGradient
          start={{x: 0.5, y: -0.367}}
          // end={{x: 0, y: 0.464}}
          // locations={[-0.367, 0.464]}
          colors={['#57AEFF', '#FFFFFF17']}
          style={styles.mainBackground}>
          <Text style={styles.title}>지현님, {'\n'}오늘도 힘내볼까요?</Text>
          <MainCard>
            <View style={{flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: colors.gray5,
                    fontSize: 14,
                    fontWeight: '600',
                    paddingBottom: 13,
                  }}>
                  김민재 트레이너님 (빌리프짐)
                </Text>
                <RightArrow style={{width: 22, height: 22}} fill="#404040" />
              </View>
              <Text
                style={{
                  color: colors.gray5,
                  fontSize: 20,
                  fontWeight: '600',
                  paddingBottom: 8,
                }}>
                3 / 10 회 남았어요!
              </Text>
              <ProgressBar percent={30} />
            </View>
          </MainCard>
          <MainCard>
            <CustomHeader
              hasLeftIcon={true}
              hasRightIcon={true}
              headerSize="h3"
              headerText="이번주 예약"
            />
            <SmallBox header="하체, 유산소" body="5일 (토) 오전 10:00" />
            <SmallBox header="코어" body="5일 (토) 오전 10:00" />
            <CustomButton
              text="수업 예약하기"
              variant="fillPrimary"
              onPress={() => {}}
            />
          </MainCard>
          <MainCard>
            <CustomHeader
              hasLeftIcon={true}
              hasRightIcon={true}
              headerSize="h3"
              headerText="운동일지"
            />
            <Text style={styles.text}>
              PT 수업부터 개인운동까지 운동기록을 확인해보세요
            </Text>
          </MainCard>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
