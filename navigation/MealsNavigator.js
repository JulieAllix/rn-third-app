import * as React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import HeaderButton from '../components/HeaderButton';

import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Meals = () => {
    return (
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
            <Stack.Screen 
                name="MealDetail" 
                component={MealDetailScreen} 
                options={{
                    headerRight: (props) => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item 
                                title='Favorite' 
                                iconName='ios-star' 
                                onPress={() => {
                                    console.log('Mark as favorite !');
                                }} 
                            />
                        </HeaderButtons>
                    )
                }}
            />
        </Stack.Navigator>
    );
}

const MealsFavTabNavigator = () => {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Meals" component={Meals} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
}

export default MealsFavTabNavigator;