import React from 'react';
import {
  Pressable,
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Tag from './Tag';
import {colors} from 'src/constants/colors';
import {SortDown} from 'src/assets/images';

const SortingBar = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width: width - 40}]}>
      <View style={styles.left}>
        <Tag text="전체" isSelected />
        <Tag text="수업내용" />
        <Tag text="취소내용" />
      </View>
      <TouchableOpacity style={styles.right} onPress={() => {}}>
        <Text style={styles.text}>최근 추가순</Text>
        <SortDown style={{width: 24, height: 24}} fill={'black'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  right: {flexDirection: 'row', alignItems: 'center'},
  text: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16.8,
    color: colors.gray100,
  },
});

export default SortingBar;
