import React, {
    useState, 
    useCallback, 
    useReducer
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Alert
} from 'react-native';

import { createRecipe } from '../store/actions/meals';

import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};

const AddRecipeScreen = props => {
    const editedRecipe = '';
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            title: editedRecipe ? editedRecipe.title :'',
            imageUrl: editedRecipe ? editedRecipe.imageUrl :'',
            duration: editedRecipe ? editedRecipe.duration :'',
            complexity: editedRecipe ? editedRecipe.complexity :'',
            affordability: editedRecipe ? editedRecipe.affordability :'',
        },
        inputValidities: {
            title: editedRecipe ? true : false,
            imageUrl: editedRecipe ? true : false,
            duration: editedRecipe ? true : false,
            complexity: editedRecipe ? true : false,
            affordability: editedRecipe ? true : false,
        },
        formIsValid: editedRecipe ? true : false
    });

    const inputChangeHandler = useCallback(
        (inputIdentifier, inputValue, inputValidity) => {
            dispatchFormState({
                type: FORM_INPUT_UPDATE,
                value: inputValue,
                isValid: inputValidity,
                input: inputIdentifier
            });
        },
        [dispatchFormState]
    );

    const submitHandler = useCallback(async() => {
        if (!formState.formIsValid) {
          Alert.alert('Erreur de saisie', 'Vérifiez les erreurs dans le formulaire svp.', [
            { text: 'Ok' }
          ]);
          return;
        }
        setError(null);
        setIsLoading(true);
        try {
            if (editedRecipe) {
                await dispatch(
                    createRecipe(
                        prodId,
                        formState.inputValues.title,
                        formState.inputValues.description,
                        formState.inputValues.imageUrl
                    )
                );
            } else {
                console.log('a cliqué');
                await dispatch(
                    createRecipe(
                        formState.inputValues.title,
                        formState.inputValues.imageUrl,
                        formState.inputValues.duration,
                        formState.inputValues.complexity,
                        formState.inputValues.affordability
                    )
                );
                console.log('cc');
            }
            props.navigation.goBack();
        } catch (err) {
            console.log('erreur');
          setError(err.message);
        };
        
        setIsLoading(false);
        
    });

    return (
        <ScrollView> 
            <View style={styles.screen}>
            <Input
                id="title"
                label="Nom de la recette"
                errorText="Entrez un nom valide svp !"
                keyboardType="default"
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onInputChange={inputChangeHandler}
                required
            />
            <Input
                id="imageUrl"
                label="Photo"
                errorText="Entrez un url valide svp !"
                keyboardType="default"
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onInputChange={inputChangeHandler}
                required
            />
            <Input
                id="duration"
                label="Durée (en minutes)"
                errorText="Entrez un temps valide svp !"
                keyboardType="decimal-pad"
                returnKeyType="next"
                onInputChange={inputChangeHandler}
                required
                min={1}
            />
            <Input
                id="complexity"
                label="Niveau de difficulté"
                errorText="Entrez un niveau de difficulté valide svp !"
                keyboardType="default"
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onInputChange={inputChangeHandler}
                required
            />
            <Input
                id="affordability"
                label="Coût (abordable, coûteux, ou cher)"
                errorText="Entrez un coût valide svp !"
                keyboardType="default"
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onInputChange={inputChangeHandler}
                required
            />
            <Button onPress={submitHandler}>Valider</Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        margin: 20
    },
});

export default AddRecipeScreen;