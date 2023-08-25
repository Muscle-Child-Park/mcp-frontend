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

const styles = StyleSheet.create({
  mainBackground: {
    marginTop: 11,
    backgroundColor: colors.background,
    gap: 14,
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

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainBackground}>
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
                  김민재 트레이너님 (빌리프잡)
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
              title="수업 예약하기"
              layoutmode="inline"
              variant="fill"
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
