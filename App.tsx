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

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainBackground}>
          <MainCard />
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: '#F5F7F9',
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
