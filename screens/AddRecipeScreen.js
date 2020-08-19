import React, {useState, useCallback, useReducer} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Alert
} from 'react-native';
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
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            name: '',
            image: '',
            time: '',
            difficulty: '',
            cost: '',
        },
        inputValidities: {
            name: false,
            image: false,
            time: false,
            difficulty: false,
            cost: false,
        },
        formIsValid: false
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
            await dispatch(
                createRecipe(//action à créer
                    formState.inputValues.name,
                    formState.inputValues.image,
                    formState.inputValues.time,
                    formState.inputValues.difficulty,
                    formState.inputValues.cost
                )
            );
            props.navigation.goBack();
        } catch (err) {
          setError(err.message);
        };
        
        setIsLoading(false);
        
    });
    return (
        <ScrollView> 
            <View style={styles.screen}>
            <Input
                id="name"
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
                id="image"
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
                id="time"
                label="Durée (en minutes)"
                errorText="Entrez un temps valide svp !"
                keyboardType="decimal-pad"
                returnKeyType="next"
                onInputChange={inputChangeHandler}
                required
                min={1}
            />
            <Input
                id="difficulty"
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
                id="cost"
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