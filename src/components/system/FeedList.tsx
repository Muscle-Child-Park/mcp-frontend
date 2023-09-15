import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import FeedListItem from './FeedListItem';

type logType = {
  id: number;
  date: string;
};

interface Props {
  logs: logType[];
  ListHeaderComponent: React.JSX.Element;
}

const FeedList = ({logs, ListHeaderComponent}: Props) => {
  return (
    <FlatList
      data={logs}
      renderItem={({item}) => <FeedListItem log={item.date} />}
      keyExtractor={log => `${log.id}`}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

const styles = StyleSheet.create({
  seperator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});

export default FeedList;
