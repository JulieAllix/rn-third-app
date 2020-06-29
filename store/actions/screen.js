export const SET_DEVICE_WIDTH = 'SET_DEVICE_WIDTH';

export const setAvailableDeviceWidth = (newWidth) => {
    return { 
        type: SET_DEVICE_WIDTH, 
        deviceWidth: newWidth
    };
};

