import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Checkbox from 'src/components/system/Checkbox';
import CustomButton from 'src/components/system/CustomButton';
import {colors} from 'src/constants/colors';
import {IntroStackProps} from 'src/navigation/IntroNavigator';

export default function Agreement({navigation}: IntroStackProps) {
  const [isChecked, setIsChecked] = useState(false); // [0, 1, 2]
  const handlePressButton = () => {
    navigation.navigate('UserTypeSelectionScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>약관에 동의해주세요</Text>
          <Text style={styles.description}>
            {`여러분의 개인정보와 서비스 이용 권리를
안전하게 잘 지켜드릴게요`}
          </Text>
        </View>
        <View style={styles.checkRowContainer}>
          <View style={styles.allAgreement}>
            <Checkbox
              isChecked={isChecked}
              onValueChangeHandler={setIsChecked}
              text="모두 동의"
              size="medium"
              style={{gap: 8}}
              textColor={colors.gray100}
              checkBoxColor={colors.primary}
            />
            <Text style={styles.subText}>
              서비스 이용을 위해 아래 약관을 모두 동의합니다.
            </Text>
          </View>
          <Checkbox
            isChecked={isChecked}
            onValueChangeHandler={setIsChecked}
            text="[필수] 서비스 이용 약관 동의"
            size="medium"
            style={{gap: 8}}
            textColor={colors.gray100}
            checkBoxColor={colors.primary}
          />
          <Checkbox
            isChecked={isChecked}
            onValueChangeHandler={setIsChecked}
            text="[필수] 개인정보 수집 및 이용 동의"
            size="medium"
            style={{gap: 8}}
            textColor={colors.gray100}
            checkBoxColor={colors.primary}
          />
          <Checkbox
            isChecked={isChecked}
            onValueChangeHandler={setIsChecked}
            text="[필수] 개인정보 제3자 제공 동의"
            size="medium"
            style={{gap: 8}}
            textColor={colors.gray100}
            checkBoxColor={colors.primary}
          />
        </View>
      </View>
      <CustomButton
        layoutmode="basic"
        text="확인"
        variant="fillPrimary"
        onPress={handlePressButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    justifyContent: 'space-between',
  },
  main: {
    gap: 78,
  },
  textContainer: {
    paddingTop: 12,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28.8,
    color: colors.gray100,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.2,
    color: colors.gray75,
  },
  allAgreement: {
    gap: 8,
    marginBottom: 8,
  },
  subText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.4,
    color: colors.gray100,
  },
  checkRowContainer: {
    gap: 32,
  },
});
