import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Checkbox from 'src/components/system/Checkbox';
import CustomButton from 'src/components/system/CustomButton';
import {colors} from 'src/constants/colors';
import {checkList} from 'src/constants/common';
import {IntroStackProps} from 'src/navigation/IntroNavigator';

export default function Agreement({navigation}: IntroStackProps) {
  const [isChecked, setIsChecked] = useState([false, false, false, false]);
  const isDisabled = !isChecked.slice(1).every(check => check);

  const handlePressButton = () => {
    if (isDisabled) return;
    navigation.navigate('UserTypeSelectionScreen');
  };
  const handleCheck = (i: number, check: boolean) => {
    const newIsChecked = [...isChecked];
    newIsChecked[i] = check;
    if (i === 0) {
      newIsChecked[1] = check;
      newIsChecked[2] = check;
      newIsChecked[3] = check;
    }
    setIsChecked(newIsChecked);
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
          {checkList.map((checkContent, idx) =>
            idx === 0 ? (
              <View style={styles.allAgreement} key={idx}>
                <Checkbox
                  isChecked={isChecked[idx]}
                  onValueChangeHandler={(check: boolean) =>
                    handleCheck(idx, check)
                  }
                  text={checkContent}
                  size="medium"
                  style={{gap: 8}}
                  textColor={colors.gray100}
                  checkBoxColor={colors.primary}
                />
                <Text style={styles.subText}>
                  서비스 이용을 위해 아래 약관을 모두 동의합니다.
                </Text>
              </View>
            ) : (
              <Checkbox
                key={idx}
                isChecked={isChecked[idx]}
                onValueChangeHandler={(check: boolean) =>
                  handleCheck(idx, check)
                }
                text={checkContent}
                size="medium"
                style={{gap: 8}}
                textColor={colors.gray100}
                checkBoxColor={colors.primary}
              />
            ),
          )}
        </View>
      </View>
      <CustomButton
        disabled={isDisabled}
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
    paddingLeft: 32,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.4,
    color: colors.gray100,
  },
  checkRowContainer: {
    gap: 32,
  },
});
