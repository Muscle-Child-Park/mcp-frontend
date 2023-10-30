import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {UserContextProvider} from 'src/context/UserContext';
import MainStackNavigator from 'src/navigation/MainNavigator';
// import type {PropsWithChildren} from 'react';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });
  return (
    <UserContextProvider>
      <MainStackNavigator />
    </UserContextProvider>
  );
}

export default App;
