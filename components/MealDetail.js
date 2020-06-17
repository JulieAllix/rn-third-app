import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    ImageBackground 
} from 'react-native';

const MealDetail = props => {
    return (
        <View>
            <View>
                <Text>
                    {props.title}
                </Text>
            </View>
            <View>
                <Text>
                    {props.duration}
                </Text>
            </View>
            <View>
                <Text>
                    {props.complexity}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'montserrat',
        fontSize: 22,
        color: 'black',
        textAlign: 'center'
    }
});

export default MealDetail;