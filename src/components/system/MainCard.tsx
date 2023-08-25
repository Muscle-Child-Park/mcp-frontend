import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

interface Props {
  children: React.ReactNode;
}

const MainCard = ({children}: Props) => {
  return <View style={styles.card}>{children}</View>;
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: 'white',
    width: deviceWidth - 40,
    marginHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    elevation: 1,
  },
});

export default MainCard;
