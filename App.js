import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

//import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import MealsNavigator from './navigation/MealsNavigator';

import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import Colors from './constants/Colors';

enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    'merriweather': require('./assets/fonts/Merriweather-Regular.ttf'),
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const Stack = createStackNavigator();
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
      <Stack.Navigator
        initialRouteName="Categories"
        headerMode="screen"
        screenOptions={{
          headerStyle: {backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'},
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }}
      >
        <Stack.Screen 
          name="Categories" 
          component={CategoriesScreen} 
          options={({ route }) => ({ title: 'Meal Categories'})}
        />
        <Stack.Screen 
          name="CategoryMeals" 
          component={CategoryMealsScreen} 
        />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

/*
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Meals" component={MealsNavigator} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
    </NavigationContainer>
*/