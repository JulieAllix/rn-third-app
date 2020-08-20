import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';
import screenReducer from './store/reducers/screen';

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
  screen: screenReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
      <SafeAreaView style={styles.screen}>
        <MealsNavigator />
      </SafeAreaView>
    </Provider>
  );
  
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

});