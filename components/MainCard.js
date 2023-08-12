import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";


const MainCard = () => {
    return (
    <View style={styles.card}/>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: 'white',
    width: deviceWidth - 40,
    margin: 20,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
  },

});

export default MainCard;