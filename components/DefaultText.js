import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = props => {
    return (
        <Text style={styles.text}>{props.children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'poppins',
        textAlign: 'center',
        marginHorizontal: 10,
        fontSize: 18,
    }
});

export default DefaultText;