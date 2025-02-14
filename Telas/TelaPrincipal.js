import React from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";

import AlcHomeScreenButton from '../Components/AlcHomeScreenButton';
import { useNavigation } from '@react-navigation/native';

const TelaPrincipal = () => {
  const navigation = useNavigation();
  return (
       <SafeAreaView style={StylesTelaPrincipal.container}>
            <View style={StylesTelaPrincipal.groupView}>
                <View style={StylesTelaPrincipal.inputs}>
                    <AlcHomeScreenButton 
                      text={"Veículos"} 
                      icone={require('../Icones/IconeCarro.png')}
                      onPress={() => navigation.navigate('Lista')}/>
                    <AlcHomeScreenButton 
                      text={"Perfil"}  
                      icone={require('../Icones/IconePerfil.png')}
                      onPress={() => navigation.navigate('Perfil')}/>
                </View>
                <View style={StylesTelaPrincipal.inputs}>
                    <AlcHomeScreenButton 
                      text={"Histórico"} 
                      icone={require('../Icones/IconeHistorico.png')}
                      onPress={() => alert("Não implementado")}/>
                    <AlcHomeScreenButton 
                      text={"Vigentes"} 
                      icone={require('../Icones/IconeVigentes.png')}
                      onPress={() => alert("Não implementado")}/>
                </View>
            </View>
        </SafeAreaView>
    );
  };
  
  const StylesTelaPrincipal = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  
    inputs: {
      flexDirection: 'row', 
      //flex: 1,
      backgroundColor: 'blue',
      justifyContent: 'center'
    },

    groupView: {
        flex: 9,
        backgroundColor: 'blue',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
  });
  
  export default TelaPrincipal;