import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'abril': require('./assets/fonts/AbrilFatface-Regular.ttf'),
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-b': require('./assets/fonts/Poppins-Bold.ttf')
    /*
    'merriweather': require('./assets/fonts/Merriweather-Regular.ttf'),
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf')
    */
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} 
      />
    );
  };

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
  
}