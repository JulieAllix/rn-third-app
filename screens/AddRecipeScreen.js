import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView
} from 'react-native';

const AddRecipeScreen = props => {
    return (
        <ScrollView> 
            <View style={styles.screen}>
                <Text style={styles.title}>Ajoute une recette</Text>
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
});

export default AddRecipeScreen;