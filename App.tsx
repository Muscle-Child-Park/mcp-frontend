import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {UserContextProvider} from 'src/context/UserContext';
import {store} from 'src/modules/redux/Store';
import MainStackNavigator from 'src/navigation/MainNavigator';
// import type {PropsWithChildren} from 'react';

function App(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });
  return (
    <Provider store={store}>
      <UserContextProvider>
        <MainStackNavigator />
      </UserContextProvider>
    </Provider>
  );
}

export default App;
