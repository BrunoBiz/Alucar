import React, { useEffect, useState } from 'react';
import {firebaseConfig, db} from '../src/firebaseConfig';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

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
  const navigation = useNavigation();
  const [nome, setNome] = useState('')
  const [sobreNome, setSobreNome] = useState('')
  const [cpf, setCPF] = useState('')
  const [senha, setSenha] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState(0)
  const [telefone, setTelefone] = useState(0)

  function validarDados(){
    if (nome == ""){
      alert("Campo nome não informado!")
      return false
    }

    if (sobreNome == ""){
      alert("Campo sobrenome não informado!")
      return false
    }

    if (cpf.length != 11){
      alert("CPF não informado ou inválido!")
      return false
    }

    if (senha == ""){
      alert("Campo senha não informado!")
      return false
    }

    if (email == ""){
      alert("Campo e-mail não informado!")
      return false
    }

    if (endereco == ""){
      alert("Campo endereço\ não informado!")
      return false
    }

    if (numero == 0){
      alert("Campo número não informado!")
      return false
    }

    if (telefone == 0){
      alert("Campo telefone não informado!")
      return false
    }

    return true
  }

  function cadastrarDados(){
    if (validarDados()) {
      const dbRef = db.ref(`Usuarios/${cpf}`).once('value', (snapshot) => {
        const userData = snapshot.val();
        if (userData) { // Valida se o CPF já está cadastrado
          alert("Usuário já cadastrado!")
          setNome('');
        } else {
          db.ref(`Usuarios/${cpf}`).set({
              nome: nome,
              sobreNome: sobreNome,
              senha: senha,
              email: email,
              endereco: endereco,
              numero: numero,
              telefone: telefone
          });
          alert("Usuário cadastrado com sucesso!");
          navigation.goBack();
        }
      }, (error) => {
          console.error("Erro:", error);
      });
    }
  }

  return (
    <SafeAreaView style={StylesTelaCadastro.container}>
      <View style={StylesTelaCadastro.inputs}>
        <AlcMainInput 
          placeHolder={"Nome"}
          value={nome} 
          onChangeText={(nome) => setNome(nome)}/>
        <AlcMainInput 
          placeHolder={"Sobrenome"} 
          value={sobreNome} 
          onChangeText={(sobreNome) => setSobreNome(sobreNome)}/>
        <AlcMainInput 
          placeHolder={"CPF"}
          value={cpf}
          onChangeText={(cpf) => setCPF(cpf)}/>
        <AlcMainInput 
          placeHolder={"Senha"} 
          secureTextEntry={true}
          value= {senha}
          onChangeText={(senha) => setSenha(senha)}/>
        <AlcMainInput 
          placeHolder={"E-mail"} 
          keyboardType={"email-address"}
          value={email}
          onChangeText={(email) => setEmail(email)}/>
        <AlcMainInput 
          placeHolder={"Endereço"}
          value={endereco}
          onChangeText={(endereco) => setEndereco(endereco)}/>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}> 
          <AlcMainInput 
            placeHolder={"Número"} 
            flex={1} 
            keyboardType={"numeric"} 
            value={numero}
            onChangeText={(numero) => setNumero(numero)}/>
          <AlcMainInput 
            placeHolder={"Telefone"} 
            flex={1} 
            keyboardType={"phone-pad"}
            value={telefone}
            onChangeText={(telefone) => setTelefone(telefone)}/>
        </View>
        <View style={{flexDirection: 'row', backgroundColor: 'blue', justifyContent:'center'}}>
          <AlcButton 
            text={"Confirmar"} 
            flex={1} 
            backgroundColor={'black'} 
            onPress={cadastrarDados}/>
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