import React from 'react';

import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = ({ route, navigation }) => {

    const {categoryId} = route.params;
    const catId = JSON.parse(JSON.stringify(categoryId));
    const selectedCategory = CATEGORIES.find(cat => cat.id == catId);

    // To set the header title dynamically
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedCategory.title,
        });
    });

    const displayedMeals = MEALS.filter(
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