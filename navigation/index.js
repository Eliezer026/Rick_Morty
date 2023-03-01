
import  Ionicons from "react-native-vector-icons/Ionicons";
import  MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {useColorScheme } from 'react-native';
import Colors from '../constants/Colors';
import AllEpisodes from '../screens/AllEpisodes';
import AllLocationScreen from '../screens/AllLocationScreen';
import CardDetail from "../screens/CardDetail";



//Here is the navigation
export default function Navigation() {
  return (
    <NavigationContainer
      theme={ DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator();

const RootNavigator = () => {


  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false}} />
      <Stack.Screen name="Details" component={CardDetail} options={{ headerShown: true}} />
    </Stack.Navigator>
  );
}


const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="All episodes"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="All episodes"
        component={AllEpisodes}
        initialParams={{active:true}}
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color}) => <MaterialIcons name="video-library" size={24} color={color} />
        }}
      />
      <BottomTab.Screen
        name="All Location"
        component={AllLocationScreen}
        initialParams={{active:false}}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons name="location" size={24} color={color} />
        }}
      />
      
    </BottomTab.Navigator>
  );
}
