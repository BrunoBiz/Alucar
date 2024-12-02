import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image
} from "react-native";

import { Searchbar } from 'react-native-paper';

import Title from '../Components/Title';
import EstilosGlobais from '../Estilos/Globais';
import AlcMainInput from '../Components/AlcMainInput';
import RNPickerSelect from 'react-native-picker-select';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AlcButton from '../Components/AlcButton';

const TelaCheckout = () => {
  const [dtInicio, setDtInicio] = useState('2024-01-01');
  const [dtFinal, setDtFinal] = useState('2024-01-01');

  const [opcaoSelecionadaPagamento, setOpcaoSelecioandaPagamento] = useState('Cartão');
  const pagamentos = [
    { label: 'Cartão',   value: 'OptCartao'},
    { label: 'PIX',      value: 'OptPix'},
    { label: 'Dinheiro', value: 'OptDinheiro'},
  ];


  const [opcaoSelecionadaRetirada, setOpcaoSelecioandaRetirada] = useState('Cartão');
  const retirada = [
    { label: 'Presencial',   value: 'OptPresencial'},
    { label: 'Entrega',      value: 'OptEntrega'},
  ];

  return (
    <SafeAreaView style={StylesTelaCheckout.container}>
        <View style={EstilosGlobais.title}>
          <Title/>
        </View>
        <View style={StylesTelaCheckout.card}>
          <View style={StylesTelaCheckout.ViewImagemCarro}>
            <Image source={require('../Imagens/ImagemCarro.jpg')} style={StylesTelaCheckout.Imagem}/>
          </View>

          <View style={[StylesTelaCheckout.ViewPeriodo]}>
            <Text style={StylesTelaCheckout.LabelTitulo}>Período</Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={StylesTelaCheckout.LabelData}>Data de Locação:</Text>
              <AlcMainInput value={dtInicio} onChangeText={dtInicio} placeHolder={"DD/MM/YYYY"}/>
            </View>

              <View style={{flexDirection: 'row'}}>
                <Text style={StylesTelaCheckout.LabelData}>Data de Devolução:</Text>
                <AlcMainInput value={dtFinal} onChangeText={setDtFinal} placeHolder={"DD/MM/YYYY"}/>
              </View>
          </View>

          <View style={StylesTelaCheckout.ViewPagamento}>
            <Text style={StylesTelaCheckout.LabelTitulo}>Pagamento</Text>
            <RNPickerSelect 
              onValueChange={(value) => setOpcaoSelecioandaPagamento(value)}
              items={pagamentos}
              value={opcaoSelecionadaPagamento}
              placeholder={{ label: 'Opções de Pagamento', value: null }}
            />

          </View>

          <View style={StylesTelaCheckout.ViewRetirada}>
            <Text style={StylesTelaCheckout.LabelTitulo}>Retirada</Text>
            <RNPickerSelect 
              onValueChange={(value) => setOpcaoSelecioandaRetirada(value)}
              items={retirada}
              value={opcaoSelecionadaRetirada}
              placeholder={{ label: 'Opções de Retirada', value: null }}
            />
          </View>

          <View style={StylesTelaCheckout.ViewAdicionais}>
            <Text style={StylesTelaCheckout.LabelTitulo}>Adicionais</Text>
            <BouncyCheckbox text="Seguro" fillColor='blue'/>
          </View>

          <View style={StylesTelaCheckout.ViewBotoes}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
              <AlcButton text={"Confirmar"} backgroundColor={'green'}/>
              <AlcButton text={"Sair"} backgroundColor={'red'}/>
            </View>
          </View>
        </View>
     </SafeAreaView>
 );
};

const StylesTelaCheckout = StyleSheet.create({
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

    ViewImagemCarro:{
        flex:3.5,
        backgroundColor: 'white',
        padding: 15,
        alignContent: 'center',
        justifyContent: 'center'
    },

    ViewPeriodo: {
        flex:3,
        backgroundColor: 'white',
        paddingLeft: 30,
        paddingRight: 30,
    },

    ViewPagamento: {
        flex:2,
        //backgroundColor: 'pink',
        paddingLeft: 30,
        paddingRight: 30
    },

    ViewRetirada: {
        flex:2,
        //backgroundColor: 'yellow',
        paddingLeft: 30,
        paddingRight: 30
    },

    ViewAdicionais: {
        flex:2,
        //backgroundColor: 'green',
        paddingLeft: 30,
        paddingRight: 30
    },

    ViewBotoes: {
        flex:1.5,
        //backgroundColor: 'blue',
        paddingLeft: 30,
        paddingRight: 30
    },
    
    Imagem: {
      flex: 1,
      resizeMode: 'contain',
      height: '100%',
      width: '100%',
      //backgroundColor: 'green'
  },
    LabelTitulo: {
      fontWeight: 'bold',
      color: 'blue',
      fontSize: 20
    },

    LabelDado: {
      fontWeight: 'bold',
      color: 'black'
    },

    LabelData: {
      flex: 1,
      fontWeight: 'bold',
      color: 'black',
      marginTop: 15,
      fontSize: 18
    },
    inputData: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      textAlign: 'center'
    },

  });

export default TelaCheckout;
