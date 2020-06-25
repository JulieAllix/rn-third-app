import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({ route, navigation }) => {

    const {categoryId} = route.params;
    const catId = JSON.parse(JSON.stringify(categoryId));
    const selectedCategory = CATEGORIES.find(cat => cat.id == catId);

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    // To set the header title dynamically
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedCategory.title,
        });
    });

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <MealList 
            listData={displayedMeals} 
            navigation={navigation} 
        />
    );
};

export default CategoryMealsScreen;