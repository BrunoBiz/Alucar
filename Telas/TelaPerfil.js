import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  View,
  SafeAreaView,
  Image
} from "react-native";

import { useNavigation } from '@react-navigation/native';
import AlcMainInput from '../Components/AlcMainInput';
import AlcButton from '../Components/AlcButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig, db, auth } from '../src/firebaseConfig';

const TelaPerfil = () => {
  const navigation = useNavigation();
  const [uid, setUid] = useState(null)
  const [nome, setNome] = useState('')
  const [sobreNome, setSobreNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState(0)
  const [telefone, setTelefone] = useState(0)

  useEffect(() => {
    async function getUid() {
      try {
        const auxUid = await AsyncStorage.getItem('uid');
        if (auxUid) {
          setUid(auxUid);
          //console.log(auxUid);
        }
      } catch (error) {
        console.error("Erro - Carregar perfil", error);
      }
    }

    async function carregaDados() {
      const snapshot = await db.ref(`Usuarios/${uid}`).once('value');
      const dadosUsuario = snapshot.val();
      if (dadosUsuario) {
        setNome(dadosUsuario.nome);
        setSobreNome(dadosUsuario.sobreNome)
        setCPF(dadosUsuario.cpf)
        setEmail(dadosUsuario.email)
        setEndereco(dadosUsuario.endereco)
        setNumero(dadosUsuario.numero)
        setTelefone(dadosUsuario.telefone)
      }
    }

    getUid();
    carregaDados();
  });
  
  return (
    <SafeAreaView style={StylesTelaPerfil.container}>
        <View style={StylesTelaPerfil.viewPerfilImg}>
            <View style={StylesTelaPerfil.viewCircular}>
                <Image source={require('../Icones/IconePerfil.png')} style={{width: '100%', height: '100%'}}/>
            </View>
        </View>

        <View style={StylesTelaPerfil.inputs}>
            <AlcMainInput 
              placeHolder={"Nome"} 
              value={nome}
              disabled={true}/>
            <AlcMainInput 
              placeHolder={"Sobrenome"} 
              value={sobreNome}
              disabled={true}/>
            <AlcMainInput 
              placeHolder={"CPF"} 
              value={cpf}
              disabled={true}/>
            <AlcMainInput 
              placeHolder={"E-mail"} 
              value={email}
              disabled={true}/>
            <AlcMainInput 
              placeHolder={"Endereço"} 
              value={endereco}
              disabled={true}/>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}> 
            <AlcMainInput 
              placeHolder={"Número"} 
              flex={1} 
              value={numero}
              disabled={true}/>
            <AlcMainInput 
              placeHolder={"Telefone"} 
              flex={1} 
              value={telefone}
              disabled={true}/>
        </View>
            <View style={{flexDirection: 'row', justifyContent:'center'}}>
                <AlcButton 
                  text={"Voltar"} 
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