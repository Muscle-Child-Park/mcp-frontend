import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {UserScreenRouteProp} from '../Home/Reservation';
import {HomeTabProps} from 'src/navigation/HomeNavigator';
import {useAppDispatch, useAppSelector} from 'src/hooks/useReduxHooks';

export default function UserScreen({route}: {route: UserScreenRouteProp}) {
  useEffect(() => {
    if (route.params?.headerTitle) {
      // dispatch(setHeaderTitle(route.params.headerTitle));
    }
  }, [route]);
  return <Text>test</Text>;
}
