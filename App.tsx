import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainStackNavigator from 'src/navigation/MainNavigator';
// import type {PropsWithChildren} from 'react';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });
  return <MainStackNavigator />;
}

export default App;
