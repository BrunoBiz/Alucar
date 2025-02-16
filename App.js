import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { DefaultTheme, colors } from 'react-native-paper';

import firebaseConfig from './src/firebaseConfig';

// Telas
import TelaLogin from './Telas/TelaLogin';
import TelaCadastro from './Telas/TelaCadastro';
import TelaPrincipal from './Telas/TelaPrincipal';
import TelaDetalhesVeiculo from './Telas/TelaDetalhesVeiculo';
import TelaPerfil from './Telas/TelaPerfil';
import TelaListaVeiculos from './Telas/TelaListaVeiculos';
import TelaCheckout from './Telas/TelaCheckout';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <MyStack /> 
    </NavigationContainer>
  );
}

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
      }}
    >
      <Stack.Screen name="Login" component={TelaLogin}/> 
      <Stack.Screen name="Home" component={TelaPrincipal}/> 
      <Stack.Screen name="Cadastro" component={TelaCadastro}/> 
      <Stack.Screen name="Checkout" component={TelaCheckout}/> 
      <Stack.Screen name="Detalhes" component={TelaDetalhesVeiculo}/> 
      <Stack.Screen name="Lista" component={TelaListaVeiculos}/> 
      <Stack.Screen name="Perfil" component={TelaPerfil}/> 
    </Stack.Navigator>
  );
} 

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
  },
  headerTitle: {
    fontWeight: "bold",
    color: 'white',
    textAlign: 'center'
  },
});