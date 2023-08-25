/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
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
import CustomButton from '@/components/system/CustomButton';
import HorizonLine from '@/components/system/HorizonLine';
import SmallBox from '@/components/system/SmallBox';
import {colors} from '@/constants/colors';
import CustomHeader from '@/components/system/CustomHeader';
import ProgressBar from '@/components/system/ProgressBar';
import {RightArrow} from '@/assets/images';
import MainCard from '@/components/system/MainCard';

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
              <CustomHeader
                hasLeftIcon={true}
                hasRightIcon={true}
                headerSize="h3"
                headerText="Heading 3"
              />
              <SmallBox />
              <SmallBox />
              <CustomButton
                title="Big/Fill/Default"
                layoutmode="inline"
                variant="fill"
              />
            </MainCard>
            <HorizonLine text="AND" />
            <MainCard>
              <CustomHeader
                hasLeftIcon={true}
                hasRightIcon={false}
                headerSize="h3"
                headerText="Heading 3"
              />
              <Text style={styles.text}>Paragraph Gray/50</Text>
            </MainCard>
            <HorizonLine text="AND" />
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
                    Paragraph
                  </Text>
                  <RightArrow style={{width: 24, height: 24}} />
                </View>
                <Text
                  style={{
                    color: colors.gray5,
                    fontSize: 20,
                    fontWeight: '600',
                    paddingBottom: 8,
                  }}>
                  Heading 3
                </Text>
                <ProgressBar percent={30} />
              </View>
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
  text: {
    color: '#404040',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
  },
});

export default App;
