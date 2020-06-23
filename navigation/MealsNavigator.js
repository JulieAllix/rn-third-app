import * as React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import HeaderButton from '../components/HeaderButton';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultStackNavOptions = {
    headerStyle: {backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'},
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const Meals = ({navigation}) => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            headerMode="screen"
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen 
                name="Categories" 
                component={CategoriesScreen} 
                options={({ route }) => ({ 
                    title: 'Meal Categories',
                    headerLeft: () => (
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item 
                                title="Menu" 
                                iconName="ios-menu"
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                            />
                        </HeaderButtons>
                    )
                })}
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
};

const FavNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Favorites"
            headerMode="screen"
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen 
                name="Favorites" 
                component={FavoritesScreen} 
                options={({ route }) => ({ 
                    title: 'Your favorite recipes',
                    headerLeft: () => (
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item 
                                title="Menu" 
                                iconName="ios-menu"
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                            />
                        </HeaderButtons>
                    )
                })}
            />
            <Stack.Screen 
                name="MealDetail" 
                component={MealDetailScreen} 
                options={({ route }) => ({ title: 'Meal Details'})}
            />
        </Stack.Navigator>
    );
};

const MealsFavTabNavigator = () => {
    if (Platform.OS === 'android') {
        return (
            <MaterialTab.Navigator
                activeColor="white"
                shifting
            >
                <MaterialTab.Screen 
                    name="Meals" 
                    component={Meals}
                    options={{
                        tabBarIcon: (tabInfo) => {
                            return <Ionicons 
                                name='ios-restaurant' 
                                size={25} 
                                color={tabInfo.color}
                            />;
                        },
                        tabBarColor: Colors.primaryColor
                    }}
                />
                <MaterialTab.Screen 
                    name="Favorites" 
                    component={FavNavigator}
                    options={{
                        tabBarIcon: (tabInfo) => {
                            return <Ionicons 
                                name='ios-star' 
                                size={25} 
                                color={tabInfo.color}
                            />;
                        },
                        tabBarColor: Colors.accentColor
                    }}
                />
            </MaterialTab.Navigator>
        );
    } else {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: Colors.accentColor
                }}
            >
                <Tab.Screen 
                    name="Meals" 
                    component={Meals}
                    options={{
                        tabBarIcon: (tabInfo) => {
                            return <Ionicons 
                                name='ios-restaurant' 
                                size={25} 
                                color={tabInfo.color}
                            />;
                        }
                    }}
                />
                <Tab.Screen 
                    name="Favorites" 
                    component={FavNavigator}
                    options={{
                        tabBarIcon: (tabInfo) => {
                            return <Ionicons 
                                name='ios-star' 
                                size={25} 
                                color={tabInfo.color}
                            />;
                        }
                    }}
                />
            </Tab.Navigator>
        );
    };
};

const FiltersNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator
            initialRouteName="Filters"
            headerMode="screen"
            screenOptions={defaultStackNavOptions}
        >
            <Stack.Screen 
                name="Filters" 
                component={FiltersScreen}
                options={({ route }) => ({ 
                    title: 'Filter Meals',
                    headerLeft: () => (
                        <HeaderButtons
                            HeaderButtonComponent={HeaderButton}
                        >
                            <Item 
                                title="Menu" 
                                iconName="ios-menu"
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                            />
                        </HeaderButtons>
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: Colors.accentColor,
                    labelStyle: {
                        fontFamily: 'montserrat'
                    }
                }}>
                <Drawer.Screen 
                    name="MealsFavs" 
                    component={MealsFavTabNavigator} 
                    options={() => ({drawerLabel: 'Meals'})}
                />
                <Drawer.Screen 
                    name="Filters" 
                    component={FiltersNavigator} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;