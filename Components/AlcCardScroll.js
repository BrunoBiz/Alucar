import React, { useState } from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardVeiculo = ({ source, modeloCarro, descricao, descricao2, portas, capacidade, valorDia}) => {
  const navigation = useNavigation();
  return (
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detalhes')}>
        <View style={styles.cardImagemVeiculoView}>
          <Image source={ source } style={styles.cardImagemVeiculo}/>
        </View>
        <View style={styles.cardDadosVeiculo}>
          <Text style={styles.cardModeloVeiculo}>{modeloCarro}</Text>
          <Text style={styles.cardDescricao}>{descricao}</Text>
          <Text style={styles.cardDescricao}>{descricao2}</Text>
          <View style={styles.cardDetalhesVeiculo}>
            <Image style={styles.iconesDescricao} source={require('../Icones/IconePortaCarro.png')}/>
            <Text>{portas}</Text>
            <Image style={styles.iconesDescricao} source={require('../Icones/IconePerfil.png')}/>
            <Text>{capacidade}</Text>
          </View>
          <View style={styles.cardDetalhesVeiculo}>
            <Text style={styles.cardModeloVeiculo}>R$ {valorDia} / Dia</Text>
            <Image source={require('../Icones/StatusVerde.png')} style={styles.iconeStatus}/>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  const AlcCardScroll = () => {
    const [cardsData] = useState([
        { source: require('../Imagens/ImagemCarro.jpg'), modeloCarro: 'Gol Power', descricao: '2013-2014', descricao2: 'Passageiro', portas: '4', capacidade: '5', valorDia: '29,00' },
        { source: require('../Imagens/ImagemCarro2.jpg'), modeloCarro: 'Cruze', descricao: '2018-2019', descricao2: 'Passageiro', portas: '4', capacidade: '5', valorDia: '55,00' },
        { source: require('../Imagens/ImagemCarro.jpg'), modeloCarro: 'Gol Power', descricao: '2013-2014', descricao2: 'Passageiro', portas: '4', capacidade: '5' },
        { source: require('../Imagens/ImagemCarro.jpg'), modeloCarro: 'Gol Power', descricao: '2013-2014', descricao2: 'Passageiro', portas: '4', capacidade: '5' },
        { source: require('../Imagens/ImagemCarro.jpg'), modeloCarro: 'Gol Power', descricao: '2013-2014', descricao2: 'Passageiro', portas: '4', capacidade: '5' },
        { source: require('../Imagens/ImagemCarro.jpg'), modeloCarro: 'Gol Power', descricao: '2013-2014', descricao2: 'Passageiro', portas: '4', capacidade: '5' },
      // ... more cards
    ]);
  
    return (
      <FlatList
        data={cardsData}
        renderItem={({ item }) => <CardVeiculo {...item} />}
        keyExtractor={(item) => item.modeloCarro}
        style={styles.cardLista}
      />
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      margin: 10,
      padding: 10,
      flexDirection: 'row'
    },
    cardImagemVeiculo: {
      width: '100%',
      height: 100,
      borderRadius: 10,
    },

    cardImagemVeiculoView:{
      flex:1, 
      padding:5
    },

    cardDadosVeiculo: {
      marginTop: 10,
      flex: 1
    },
    cardModeloVeiculo: {
      fontSize: 18,
      textAlign: 'right',
      fontWeight: 'bold',
      //backgroundColor: 'red'
    },
    cardDescricao: {
      fontSize: 14,
      textAlign: 'right',
      //backgroundColor: 'yellow'
    },
    cardLista: {
      flex: 2,
    },

    iconesDescricao: {
      width: 13,
      height: 13,
      margin:3
    },

    iconeStatus:{
      width: 20,
      height: 20,
      margin:3
    },

    cardDetalhesVeiculo:{
      //backgroundColor: 'red', 
      flexDirection: 'row-reverse',
    },

  });
  
  export default AlcCardScroll;