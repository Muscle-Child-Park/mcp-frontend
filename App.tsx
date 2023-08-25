/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainCard from './src/components/system/MainCard';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomButton from './src/components/system/CustomButton';
import HorizonLine from './src/components/system/HorizonLine';
import SmallBox from './src/components/system/SmallBox';
import {colors} from './src/constants/colors';
import CustomHeader from './src/components/system/CustomHeader';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainBackground}>
          <View style={styles.buttonContainer}>
            <CustomButton
              title="Text"
              layoutmode="fullWidth"
              variant="stroke"
            />
            <CustomButton title="Text" layoutmode="fullWidth" variant="fill" />
            <CustomButton title="Text2" layoutmode="fullWidth" variant="big" />
            <CustomButton
              title="Text"
              layoutmode="fullWidth"
              variant="whiteBig"
            />
            <HorizonLine text="AND" />
            <CustomButton title="Text" layoutmode="inline" variant="stroke" />
            <CustomButton title="Text" layoutmode="inline" variant="fill" />
            <CustomButton title="Text2" layoutmode="inline" variant="big" />
            <CustomButton title="Text" layoutmode="inline" variant="whiteBig" />
            <HorizonLine text="AND" />
            <MainCard>
              <CustomHeader />
              <SmallBox />
              <SmallBox />
              <CustomButton
                title="수업 예약하기"
                layoutmode="inline"
                variant="fill"
              />
            </MainCard>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: colors.background,
    gap: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});

export default App;
