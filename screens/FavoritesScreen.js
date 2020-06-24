import React from 'react';

import MealList from '../components/MealList';

import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm10' || meal.id === 'm11' || meal.id === 'm12' || meal.id === 'm13');
    return (
        <MealList 
            listData={favMeals} 
            navigation={props.navigation} 
        />
    );
};

export default FavoritesScreen;