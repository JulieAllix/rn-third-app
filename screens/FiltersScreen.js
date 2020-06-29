import React, { useState, useEffect, useCallback } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Switch,
    Platform,
    ScrollView
} from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
    return (
    <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
            trackColor={{true: Colors.primaryColor}}
            thumbColor={Platform.OS === "android" ? Colors.primaryColor : ''}
            value={props.state} 
            onValueChange={props.onChange}
        />
    </View>)
};

const FiltersScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <ScrollView> 
            <View style={styles.screen}>
                <Text style={styles.title}>Filtres disponibles</Text>
                <FilterSwitch 
                    label='Gluten-free' 
                    state={isGlutenFree}
                    onChange={newValue => setIsGlutenFree(newValue)}
                />
                <FilterSwitch 
                    label='Lactose-free' 
                    state={isLactoseFree}
                    onChange={newValue => setIsLactoseFree(newValue)}
                />
                <FilterSwitch 
                    label='Vegan' 
                    state={isVegan}
                    onChange={newValue => setIsVegan(newValue)}
                />
                <FilterSwitch 
                    label='Végétarien' 
                    state={isVegetarian}
                    onChange={newValue => setIsVegetarian(newValue)}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'abril',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }

});

export default FiltersScreen;