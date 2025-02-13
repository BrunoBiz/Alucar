import React, { useEffect, useState } from 'react';

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
  const [nome, setNome] = useState('')
  const [sobreNome, setSobreNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [senha, setSenha] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState(0)
  const [telefone, setTelefone] = useState('')

  return (
    <SafeAreaView style={StylesTelaCadastro.container}>
      <View style={StylesTelaCadastro.inputs}>
        <AlcMainInput placeHolder={"Nome"} value={nome} onChangeText={(nome) => setNome(nome)}/>
        <AlcMainInput placeHolder={"Sobrenome"}/>
        <AlcMainInput placeHolder={"CPF"}/>
        <AlcMainInput placeHolder={"Senha"} secureTextEntry={true}/>
        <AlcMainInput placeHolder={"E-mail"} keyboardType={"email-address"}/>
        <AlcMainInput placeHolder={"Endereço"}/>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}> 
          <AlcMainInput placeHolder={"Número"} flex={1} keyboardType={"numeric"} onChangeText={(numero) => setNumero(numero)}/>
          <AlcMainInput placeHolder={"Telefone"} flex={1} keyboardType={"phone-pad"}/>
        </View>
        <View style={{flexDirection: 'row', backgroundColor: 'blue', justifyContent:'center'}}>
          <AlcButton text={"Confirmar"} flex={1} backgroundColor={'black'} onPress={() => {alert(`O nome digitado é: ${nome} o numero digitado é ${numero}`);}}/>
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