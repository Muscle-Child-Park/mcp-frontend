import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from 'src/constants/colors';

const SwitchButton = () => {
  const [selectedTab, isSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, selectedTab === 0 && {backgroundColor: 'white'}]}
        onPress={() => isSelectedTab(0)}>
        <Text style={styles.text}>달력으로 보기</Text>
      </TouchableOpacity>
      {/* <View style={styles.spacer} /> */}
      <TouchableOpacity
        style={[styles.button, selectedTab === 1 && {backgroundColor: 'white'}]}
        onPress={() => isSelectedTab(1)}>
        <Text style={styles.text}>리스트로 보기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: 41,
    backgroundColor: '#F5F6F8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
  },
  button: {
    width: '49%',
    height: '90.24%', // 100% - (2/41)*100%*2 =
    margin: 2,
    borderRadius: 8,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    // width: ''
  },
  text: {
    color: colors.gray100,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16.8,
  },
});

export default SwitchButton;
