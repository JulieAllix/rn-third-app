import { SET_DEVICE_WIDTH } from '../actions/meals';
import { Dimensions } from 'react-native';

const initialWidth = Dimensions.get('window').width;
const initialHeight = Dimensions.get('window').height;

let orientation = '';
if (initialWidth > initialHeight) {
    orientation = 'horizontal';
} else {
    orientation = 'vertical';
};

const initialState = {
    availableDeviceWidth: initialWidth,
    availableDeviceHeight: initialHeight,
    orientation: orientation,
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