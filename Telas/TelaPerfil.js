import React from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView,
  Image
} from "react-native";

import { useNavigation } from '@react-navigation/native';
import AlcMainInput from '../Components/AlcMainInput';
import AlcButton from '../Components/AlcButton';

const TelaPerfil = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={StylesTelaPerfil.container}>
        <View style={StylesTelaPerfil.viewPerfilImg}>
            <View style={StylesTelaPerfil.viewCircular}>
                <Image source={require('../Icones/IconePerfil.png')} style={{width: '100%', height: '100%'}}/>
            </View>
        </View>

        <View style={StylesTelaPerfil.inputs}>
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
            <View style={{flexDirection: 'row', justifyContent:'center'}}>
                <AlcButton 
                  text={"Confirmar"} 
                  flex={1} 
                  backgroundColor={'black'}/>
                <AlcButton 
                  text={"Sair"} 
                  flex={1} 
                  backgroundColor={'black'} 
                  onPress={() => navigation.goBack()}/>
            </View>
        </View>
    </SafeAreaView>
  );
};

const StylesTelaPerfil = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  viewPerfilImg: {
    flex:3,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignContent:'center'
  },

  viewCircular: {
    position: 'absolute',
    top: '5%',
    bottom: '5%',
    left: '30%',
    right: '30%',
    margin: 'auto',
    backgroundColor: 'grey',
    borderRadius: '50%',
    overflow: 'hidden',
    alignContent: 'center',
    justifyContent: 'center'
  },

  inputs: {
    flexDirection: 'column', 
    //justifyContent: 'space-between',
    flex: 9,
    backgroundColor: 'blue',
    padding: 30
  },
});

export default TelaPerfil;