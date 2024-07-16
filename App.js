import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalculationScreen from './src/screens/CalculationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown:false}}
        initialRouteName="Calculation">
        <Stack.Screen name="Calculation" component={CalculationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
