import { SET_DEVICE_WIDTH } from '../actions/meals';
import { Dimensions } from 'react-native';

const initialWidth = Dimensions.get('window').width;
const initialHeight = Dimensions.get('window').height;

const initialState = {
    availableDeviceWidth: initialWidth,
    availableDeviceHeight: initialHeight
};

const screenReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEVICE_WIDTH:
            return { 
                ...state, 
                availableDeviceWidth: action.deviceWidth 
            };
        default: 
            return state;
    }
    return state;
}

export default screenReducer;