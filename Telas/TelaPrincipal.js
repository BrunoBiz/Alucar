import React from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text
} from "react-native";

import Title from '../Components/Title';
import EstilosGlobais from '../Estilos/Globais';
import AlcHomeScreenButton from '../Components/AlcHomeScreenButton';

const TelaPrincipal = () => {
    return (
       <SafeAreaView style={StylesTelaPrincipal.container}>
            <View style={EstilosGlobais.title}>
                <Title/>
            </View>
            <View style={StylesTelaPrincipal.groupView}>
                <View style={StylesTelaPrincipal.inputs}>
                    <AlcHomeScreenButton text={"Veículos"} icone={require('../Icones/IconeCarro.png')}/>
                    <AlcHomeScreenButton text={"Perfil"}  icone={require('../Icones/IconePerfil.png')}/>
                </View>
                <View style={StylesTelaPrincipal.inputs}>
                    <AlcHomeScreenButton text={"Histórico"} icone={require('../Icones/IconeHistorico.png')}/>
                    <AlcHomeScreenButton text={"Vigentes"} icone={require('../Icones/IconeVigentes.png')}/>
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