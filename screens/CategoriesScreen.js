import React from 'react';
import { 
    FlatList, 
    StyleSheet,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
                title={itemData.item.title}
                image={itemData.item.image}
                onSelect={
                    () => {
                        navigation.navigate( 
                            'CategoryMeals',
                            {categoryId: itemData.item.id}
                        )
                    }
                }
            />
        );
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default CategoriesScreen;