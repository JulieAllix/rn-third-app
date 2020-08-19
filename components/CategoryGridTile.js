import React from 'react';
import { useSelector } from 'react-redux';
import { 
    TouchableOpacity, 
    View, 
    Text, 
    StyleSheet ,
    Platform,
    TouchableNativeFeedback,
    Dimensions,
    ImageBackground
} from 'react-native';

const CategoryGridTile = props => {
    let availableDeviceWidth = useSelector(state => state.screen.availableDeviceWidth);
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android') {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp  
                style={{flex: 1}}  
                onPress={props.onSelect}
            >
                <ImageBackground
                style={styles.container} 
                source={props.image}
                >
                    <Text style={{...styles.title, ...{fontSize: availableDeviceWidth > 325 ? 23 : 16,}}} numberOfLines={2}>{props.title}</Text>
                </ImageBackground>
            </TouchableCmp>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 5,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21  ? 'hidden' : 'visible',
        elevation: 5,

    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    title: {
        fontFamily: 'abril',
        //fontSize: 23,
        textAlign: 'right',
        color: 'white'
    }
});

export default CategoryGridTile;
