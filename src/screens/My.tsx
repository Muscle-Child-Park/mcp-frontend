import React from 'react';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import HorizonLine from 'src/components/system/HorizonLine';
import SmallBox from 'src/components/system/SmallBox';
import {colors} from 'src/constants/colors';
import CustomHeader from 'src/components/system/CustomHeader';
import ProgressBar from 'src/components/system/ProgressBar';
import {RightArrow} from 'src/assets/images';
import MainCard from 'src/components/system/MainCard';

const My = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainBackground}>
          <View style={styles.buttonContainer}>
            <MainCard>
              <CustomHeader
                hasLeftIcon={true}
                hasRightIcon={true}
                headerSize="h3"
                headerText="Heading 3"
              />
              <SmallBox header="Paragraph" body="Paragraph Small" />
              <SmallBox header="Paragraph" body="Paragraph Small" />
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
                  <RightArrow style={{width: 22, height: 22}} fill="#404040" />
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
};

export default My;

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
