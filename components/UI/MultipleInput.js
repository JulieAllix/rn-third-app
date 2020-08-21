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
        isValid: action.isValid
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
    const [inputsNumber, setInputsNumber] = useState(1);
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue ? props.initialValue : [''],
        isValid: props.initiallyValid,
        touched: false
    });

    const { onInputChange, id } = props;

    useEffect(() => {
        if (inputState.touched) {
        onInputChange(id, inputState.value, inputState.isValid);
        }
    }, [inputState, onInputChange, id]);

    const textChangeHandler = (text, id) => {
        let isValid = true;
        const updatedMultipleInputValue = [...inputState.value];
        updatedMultipleInputValue[id] = text;
        //console.log(inputState.value);
        dispatch({ 
            type: INPUT_CHANGE, 
            value: updatedMultipleInputValue,
            isValid: isValid
        });
        
    };

    const lostFocusHandler = () => {
        dispatch({ type: INPUT_BLUR });
    };

    const addInput = () => {
        setInputsNumber(inputsNumber + 1);
    };

    let inputsArray = [];
    for(let i = 0; i < inputsNumber; i++){
        inputsArray.push(
            <SingleTextInput 
                {...props} 
                key={i}
                id={i}
                onChangeText={(text) => textChangeHandler(text, i)}
                value={inputState.value[i]}
            />
        );
    };
    
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