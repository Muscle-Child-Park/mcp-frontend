import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import CustomButton from 'src/components/system/CustomButton';
import SelectableCard from 'src/components/system/SelectableCard';
import {colors} from 'src/constants/colors';
import {IntroStackProps} from 'src/navigation/IntroNavigator';

export default function UserTypeSelection({navigation}: IntroStackProps) {
  // 0: not selected, 1: selecte trainer , 2: select menti
  const [isSelected, setIsSelected] = useState(0);
  const isDisabled = isSelected === 0;
  const handlePressButton = () => {
    if (isDisabled) return;
    navigation.navigate('UserNameRegistrationScreen');
  };
  const handleSelect = (i: number) => {
    setIsSelected(i);
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            메이브에 오신 걸 환영해요! 어떤 회원이신가요?
          </Text>
          <Text style={styles.description}>
            {`회원 유형에 따라 필요한 온보딩 절차를 
친절하게 안내해드릴게요`}
          </Text>
        </View>
        <View style={styles.UserTypeRowContainer}>
          <SelectableCard
            title="트레이너/멘토"
            description={`PT 트레이너
멘토링이 가능한 헬창`}
            isSelected={isSelected === 1}
            handleSelect={() => handleSelect(1)}
          />
          <SelectableCard
            title="멘티"
            description={`PT 수강생
멘토가 필요한 헬린이`}
            isSelected={isSelected === 2}
            handleSelect={() => handleSelect(2)}
          />
        </View>
      </View>
      <CustomButton
        disabled={isDisabled}
        layoutmode="basic"
        text="다음으로"
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
    gap: 99,
  },
  textContainer: {
    paddingTop: 12,
    gap: 12,
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
  UserTypeRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
