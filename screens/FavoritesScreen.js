import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

const FavoritesScreen = props => {
    const availableMeals = useSelector(state => state.meals.favoriteMeals);

    /*
    const favMeals = availableMeals.filter(meal => meal.id === 'm10' || meal.id === 'm11' || meal.id === 'm12' || meal.id === 'm13' || meal.id === 'm14');
    */
    return (
        <MealList 
            listData={favMeals} 
            navigation={props.navigation} 
        />
    );
};

export default FavoritesScreen;