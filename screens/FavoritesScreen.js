import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return <View style={styles.content}>
            <DefaultText>Pas de recettes mises en favoris. Ajoutez-en !</DefaultText>
        </View>
    }
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;