/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {LocaleConfig} from 'react-native-calendars';
// import type {PropsWithChildren} from 'react';
import MainStackNavigator from 'src/navigation/MainNavigator';

LocaleConfig.locales['ko'] = {
  formatAccessibilityLabel: "yyyy 'of' MMMM 'of' dddd d",
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  // numbers: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'] // number localization example
};
LocaleConfig.defaultLocale = 'ko';

function App(): JSX.Element {
  return <MainStackNavigator />;
}

export default App;
