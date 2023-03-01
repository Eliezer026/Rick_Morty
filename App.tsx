import React from 'react';
import { StatusBar, useColorScheme} from 'react-native';
import Colors from './constants/Colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import FooterScreen from './screens/FooterScreen';


function App() {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Navigation/>
      <FooterScreen />
    
    </SafeAreaProvider>
  );
}


export default App;
