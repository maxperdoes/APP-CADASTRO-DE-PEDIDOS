import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroScreen from './screens/CadastroScreen';
import VisualizarScreen from './screens/VisualizarScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Visualizar" component={VisualizarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
