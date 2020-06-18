import * as React from 'react';
import { Platform } from 'react-native';
//import { createStackNavigator } from 'react-navigation-stack';
import { createStackNavigator } from '@react-navigation/stack';

import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors'

const Stack = createStackNavigator();

function MealsNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            headerMode="screen"
            screenOptions={{
                headerStyle: {backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'},
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
            }}
        >
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
  );
}

/*
const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetail: {
            screen: MealDetailScreen
        }
    },
    {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    }
});

/*
const Tab = createBottomTabNavigator();

export default function MealsFavTabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Meals" component={MealsNavigator} />
                <Tab.Screen name="Favorites" component={FavoritesScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};


const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
});

export default createAppContainer(MealsFavTabNavigator);

*/
export default MealsNavigator;