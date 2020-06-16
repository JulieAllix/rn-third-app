import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  Font.loadAsync({
    'merriweather': require('./assets/fonts/Merriweather-Regular.ttf'),
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setFontLoaded(true)} 
      />
    );
  };

  return (
    <View>
      <Text>Let's go for the third app !</Text>
    </View>
  );
}

