import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import CustomButton from 'src/components/system/CustomButton';
import {useNavigation} from '@react-navigation/native';
import type {CompositeNavigationProp} from '@react-navigation/native';
import {TopTabProps} from '../Home/Reservation';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import {colors} from 'src/constants/colors';
import {HomeTabProps} from 'src/navigation/HomeNavigator';

type ReservationScreenProp = CompositeNavigationProp<HomeTabProps, TopTabProps>;

const ImagePath = require('src/assets/images/logo.png');

export default function ReservationSuccess() {
  const navigation = useNavigation<ReservationScreenProp>();
  const safeInsets = useContext(SafeAreaInsetsContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={[
          styles.container,
          {paddingTop: 152.49 + (safeInsets?.top ?? 0)},
        ]}>
        <View style={styles.body}>
          <Image
            source={ImagePath}
            style={{
              width: 229,
              height: 235,
              marginBottom: 65.36,
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.time}>8월 9일 오후 9:00시</Text>
            <Text style={styles.title}>수업이 예약되었어요</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <CustomButton
            layoutmode="fullWidth"
            text="홈으로"
            variant="fillPrimary"
            onPress={() => {
              /* navigation.popToTop(); > MinaReservation에 Screen내부에 있을 때, 적용 
              현재, mainNavigator에 있으므로 ReservationSuccess 컴포넌트로 오기 전 적용
              */
              navigation.navigate('홈');
            }}
          />
          <CustomButton
            layoutmode="fullWidth"
            text="예약 보러가기"
            variant="stroke"
            onPress={() => {
              // navigation.popToTop();
              navigation.navigate('나의예약');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 40 + 34,
  },
  body: {alignItems: 'center'},
  footer: {alignItems: 'center', gap: 8},
  textContainer: {
    gap: 5,
    marginBottom: 54,
  },
  time: {
    color: colors.primary,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 36,
  },
  title: {
    color: colors.gray100,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 24,
    lineHeight: 28.8,
  },
});
