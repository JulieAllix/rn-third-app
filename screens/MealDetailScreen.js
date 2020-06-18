import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    StyleSheet 
} from 'react-native';

import { MEALS } from '../data/dummy-data';

import MealDetail from '../components/MealDetail';

const MealDetailScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const mealId = JSON.parse(JSON.stringify(id));
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
        });
    });

    return (
        <View style={styles.screen}>
            <MealDetail
                title={selectedMeal.title} 
                image={selectedMeal.imageUrl} 
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                ingredients={selectedMeal.ingredients}
                steps={selectedMeal.steps}
            />
            <Text>{mealId}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealDetailScreen;

            /*
            <MealDetail 
                title={itemData.item.title} 
                image={itemData.item.imageUrl} 
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                ingredients={itemData.item.ingredients}
                steps={itemData.item.steps}
            />
            */