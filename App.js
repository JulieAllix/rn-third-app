import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

//import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MealsNavigator from './navigation/MealsNavigator';
import FavoritesScreen from './screens/FavoritesScreen';
import CategoriesScreen from './screens/CategoriesScreen';

enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    'merriweather': require('./assets/fonts/Merriweather-Regular.ttf'),
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const Tab = createBottomTabNavigator();

  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} 
      />
    );
  };

  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Meals" component={MealsNavigator} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

