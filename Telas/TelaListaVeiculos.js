import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";

import { Searchbar } from 'react-native-paper';

import Title from '../Components/Title';
import EstilosGlobais from '../Estilos/Globais';
import AlcCardScroll from '../Components/AlcCardScroll';

const TelaListaVeiculos = () => {
 return (
    <SafeAreaView style={StylesTelaLista.container}>
        <View style={EstilosGlobais.title}>
          <Title/>
        </View>

        <View style={StylesTelaLista.ViewPesquisa}>
            <Searchbar placeholder="Search" iconColor="blue" />
        </View>

        <View style={StylesTelaLista.ViewCards}>
            <AlcCardScroll/>
        </View>

     </SafeAreaView>
 );
};

const StylesTelaLista = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  
    ViewPesquisa:{
        flex: 1,
        backgroundColor: 'blue',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop:5,
        paddingBottom: 5
    },

    ViewCards: {
        flex: 8,
        backgroundColor: 'blue',
        paddingLeft: 30,
        paddingRight: 30
    },
  });

export default TelaListaVeiculos;
