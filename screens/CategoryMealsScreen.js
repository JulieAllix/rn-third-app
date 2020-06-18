import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
} from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ route, navigation }) => {

    const renderMealItem = itemData => {
        return (
            <MealItem 
                title={itemData.item.title} 
                image={itemData.item.imageUrl} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={
                    () => {
                        navigation.navigate(
                            'MealDetail', 
                            {id: itemData.item.id}
                        )
                    }
                } 
            />
        );
    };

    const {categoryId} = route.params;
    const catId = JSON.parse(JSON.stringify(categoryId));
    const selectedCategory = CATEGORIES.find(cat => cat.id == catId);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedCategory.title,
        });
    });

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    }
});

export default CategoryMealsScreen;