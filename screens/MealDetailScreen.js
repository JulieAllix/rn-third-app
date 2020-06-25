import React from 'react';
import { useSelector } from 'react-redux';
import { 
    ScrollView,
    View, 
    Image,
    Text, 
    StyleSheet 
} from 'react-native';

import { MEALS } from '../data/dummy-data';

import MealDetail from '../components/MealDetail';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
};

const MealDetailScreen = ({ route, navigation }) => {
    const availableMeals = useSelector(state => state.meals.meals);

    const { id } = route.params;
    const mealId = JSON.parse(JSON.stringify(id));
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
        });
    });

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingrédients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Etapes</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    title: {
        fontFamily: 'abril',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 5
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailScreen;
