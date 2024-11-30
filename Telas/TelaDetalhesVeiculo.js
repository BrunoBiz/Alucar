import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image
} from "react-native";

import AlcMainInput from '../Components/AlcMainInput';
import Title from '../Components/Title';
import AlcButton from '../Components/AlcButton';
import EstilosGlobais from '../Estilos/Globais';

const TelaDetalhesVeiculo = () => {
 return (
    <SafeAreaView style={StylesTelaDetalhes.container}>
        <View style={EstilosGlobais.title}>
          <Title/>
        </View>
        <View style={StylesTelaDetalhes.card}>
            <View style={StylesTelaDetalhes.carrousel}>
                <Image source={require('../Imagens/ImagemCarro.jpg')} style={StylesTelaDetalhes.Imagem}/>
            </View>

            <View style={StylesTelaDetalhes.dados}>
                <View style={StylesTelaDetalhes.DadosTitulo}>
                    <Text style={StylesTelaDetalhes.LabelTitulo}>Modelo</Text>
                    <Text style={[StylesTelaDetalhes.LabelDado]}>Gol Power</Text>
                </View>
                <View style={StylesTelaDetalhes.groupView}>
                    <View style={StylesTelaDetalhes.Informacao}>
                        <View style={{flex:1}}>
                            <Text style={StylesTelaDetalhes.LabelTitulo}>Ano</Text>
                            <Text style={[StylesTelaDetalhes.LabelDado]}>2013-2014</Text>
                        </View>

                        <View style={{flex:1}}>
                            <Text style={StylesTelaDetalhes.LabelTitulo}>Capacidade</Text>
                            <Text style={[StylesTelaDetalhes.LabelDado]}>4</Text>
                        </View>
                    </View>

                    <View style={StylesTelaDetalhes.Informacao}>
                        <View style={{flex:1}}>
                            <Text style={StylesTelaDetalhes.LabelTitulo}>Combustível</Text>
                            <Text style={[StylesTelaDetalhes.LabelDado]}>Flex</Text>
                        </View>

                        <View style={{flex:1}}>
                            <Text style={StylesTelaDetalhes.LabelTitulo}>Câmbio</Text>
                            <Text style={[StylesTelaDetalhes.LabelDado]}>Manual, 5</Text>
                        </View>
                    </View>

                </View>
            </View>

            <View style={StylesTelaDetalhes.mapa}>
                
            </View>

            
            <View style={StylesTelaDetalhes.dados2}>
                
            </View>
        </View>
    </SafeAreaView>
 );
};

const StylesTelaDetalhes = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "blue",
    },
  
    card:{
        flex: 9,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 5
    },

    carrousel: {
        flex: 3.5,
        backgroundColor: 'red ',
        padding: 30,
    },

    dados: {
      flex: 3,
      padding: 30,
      paddingBottom: 0
    },

    mapa: {
        flex: 3.5,
        padding: 30,
    },

    dados2: {
        flex: 3,
        padding: 30,
        paddingBottom: 0
    },

    Imagem: {
        flex: 1,
        resizeMode: 'center',
    },

    DadosTitulo:{
        flex:1,
        flexDirection: 'column',
        //backgroundColor: 'red'
    },

    groupView: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
//        backgroundColor: 'green'
    },

    Informacao: {
        flex: 1,
        flexDirection: 'row', 
        //backgroundColor: 'pink',
        justifyContent: 'center'
    },

    LabelTitulo: {
        fontWeight: 'bold',
        color: 'blue'
    },

    LabelDado: {
        fontWeight: 'bold',
        color: 'black'
    },

});

export default TelaDetalhesVeiculo;