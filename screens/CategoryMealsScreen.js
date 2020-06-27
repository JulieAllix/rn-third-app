import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

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

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>Pas de recette trouvée, vérifiez si vous avez appliqué des filtres !</DefaultText>
            </View>
        )
    }
    return (
        <MealList 
            listData={displayedMeals} 
            navigation={navigation} 
        />
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 10
    }
});

export default CategoryMealsScreen;