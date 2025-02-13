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
import MapView from 'react-native-maps';


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
                <Text style={StylesTelaDetalhes.LabelTitulo}>Local Atual:</Text>
                <View style={{borderWidth: 1}}>
                    <MapView style={{width: '100%', height: '100%'}} />
                </View>
            </View>

            
            <View style={StylesTelaDetalhes.dadosValor}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={StylesTelaDetalhes.Informacao}>
                        <View style={{flex:1}}>
                            <Text style={StylesTelaDetalhes.LabelTitulo}>Disponibilidade:</Text>
                            <View style={{flexDirection:'row'}}>
                                <Image source={require('../Icones/StatusVerde.png')} style={StylesTelaDetalhes.IconeStatus}/>
                                <Text style={[StylesTelaDetalhes.LabelDado]}>Disponível</Text>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StylesTelaDetalhes.LabelTitulo}>Categoria</Text>
                            <Text style={[StylesTelaDetalhes.LabelDado]}>Premium</Text>
                        </View>
                    </View>
                </View>

                <View style={{flex:0.7, flexDirection:'row', justifyContent: 'center', alignContent: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>R$ 450,00 / Dia</Text>
                </View>

                <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignContent:'center'}}>
                    <AlcButton text={'Confirmar'} backgroundColor={'green'}/>
                </View>
            </View>
        </View>
    </SafeAreaView>
 );
};

const StylesTelaDetalhes = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "blue"
    },
  
    card:{
        flex: 9,
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 5
    },

    carrousel: {
        flex: 3.5,
        //backgroundColor: 'red',
        padding: 15,
        alignContent: 'center',
        justifyContent: 'center'
    },

    dados: {
      flex: 3,
      padding: 30,
      paddingBottom: 0,
    },

    dadosValor: {
        flex: 3,
        padding: 30,
        paddingBottom: 20,
        paddingTop: 0
      },

    mapa: {
        flex: 3.5,
        padding: 30,
        //backgroundColor: 'green'
    },

    Imagem: {
        flex: 1,
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
        //backgroundColor: 'green'
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
        color: 'blue',
        fontSize: 13
    },

    LabelDado: {
        fontWeight: 'bold',
        color: 'black'
    },
    
    IconeStatus:{
        width: 20,
        height: 20
    },
});

export default TelaDetalhesVeiculo;
