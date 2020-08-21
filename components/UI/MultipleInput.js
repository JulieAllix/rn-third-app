import React, { useReducer, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import SingleTextInput from './SingleTextInput';
import Button from './Button';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true
      };
    default:
      return state;
  }
};

const MultipleInput = props => {
    const [activeInputId, setActiveInputId] = useState('');
    const [inputsNumber, setInputsNumber] = useState(1);
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : ['test'],
        touched: false
    });

    const { onInputChange, id } = props;

    useEffect(() => {
        if (inputState.touched) {
        onInputChange(id, inputState.value);
        }
    }, [inputState, onInputChange, id]);

    const textChangeHandler = (text, id) => {
        
        //const updatedInput = [...inputState.value]
        dispatch({ 
            type: INPUT_CHANGE, 
            value: ''
        });
    };
/*
    const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return { ...state, favoriteMeals: updatedFavMeals };
*/
    const lostFocusHandler = () => {
        dispatch({ type: INPUT_BLUR });
    };

    const addInput = () => {
        setInputsNumber(inputsNumber + 1);
    };

    let inputsArray = [];
    for(let i = 0; i < inputsNumber; i++){
    //inputState.value.map((element) => {
        let counter = 0;
        inputsArray.push(
            <SingleTextInput 
                {...props} 
                key={i}
                id={i}
                onChangeText={(text) => textChangeHandler(text, i)}
                value={inputState.value[i]}
            />
        );
        counter ++;
    //}); 
    };
    
    console.log(inputState.value);
    //console.log(inputState.value[1]);
    
    return (
        <View style={styles.formControl}>
        <Text style={styles.label}>{props.label}</Text>
        {inputsArray}
        <Button onPress={addInput}>Add another</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    formControl: {
        width: '100%',
        marginBottom: 20
    },
    label: {
        fontFamily: 'poppins-b',
        color: "#656565",
        marginVertical: 8,
    },
    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        fontFamily: 'poppins',
        color: 'red',
        fontSize: 13
    }
});

export default MultipleInput;