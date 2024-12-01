import React from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView
} from "react-native";

import AlcMainInput from '../Components/AlcMainInput';
import Title from '../Components/Title';
import AlcButton from '../Components/AlcButton';
import EstilosGlobais from '../Estilos/Globais';

const TelaCadastro = () => {
  return (
    <SafeAreaView style={StylesTelaCadastro.container}>
      <View style={EstilosGlobais.title}>
        <Title/>
      </View>
      <View style={StylesTelaCadastro.inputs}>
        <AlcMainInput placeHolder={"Nome"}/>
        <AlcMainInput placeHolder={"Sobrenome"}/>
        <AlcMainInput placeHolder={"CPF"}/>
        <AlcMainInput placeHolder={"Senha"} secureTextEntry={true}/>
        <AlcMainInput placeHolder={"E-mail"}/>
        <AlcMainInput placeHolder={"Endereço"}/>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}> 
          <AlcMainInput placeHolder={"Número"} flex={1}/>
          <AlcMainInput placeHolder={"Telefone"} flex={1}/>
        </View>
        <View style={{flexDirection: 'row', backgroundColor: 'blue', justifyContent:'center'}}>
          <AlcButton text={"Confirmar"} flex={1} backgroundColor={'black'}/>
          <AlcButton text={"Sair"} flex={1} backgroundColor={'black'}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const StylesTelaCadastro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  inputs: {
    flexDirection: 'column', 
    //justifyContent: 'space-between',
    flex: 9,
    backgroundColor: 'blue',
    padding: 30
  }
});

export default TelaCadastro;