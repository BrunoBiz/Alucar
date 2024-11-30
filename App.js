import { StatusBar } from 'expo-status-bar';
import React from 'react';

//aimport { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaLogin from './Telas/TelaLogin';
import TelaCadastro from './Telas/TelaCadastro';
import TelaPrincipal from './Telas/TelaPrincipal';
import TelaDetalhesVeiculo from './Telas/TelaDetalhesVeiculo';

export default function App() {
  return (
    //<TelaLogin/>
    //<TelaCadastro/>
    //<TelaPrincipal/>
      <TelaDetalhesVeiculo/>
  );
}