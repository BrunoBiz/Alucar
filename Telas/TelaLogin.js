import React, { useState } from 'react';
import {db} from '../src/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";

import AlcMainInput from '../Components/AlcMainInput';
import AlcButton from '../Components/AlcButton';

const TelaLogin = () => {
  const navigation = useNavigation();
  const [cpf, setCPF] = useState('')
  const [senha, setSenha] = useState('')
  
  function validarUsuario() {
    if (cpf == "" || senha == "" || cpf.length != 11) {
      alert("Dados inválidos!");
      return;
    }

    const refUsuario = db.ref(`Usuarios/${cpf}`).once('value', (snapshot) => {
      const dataUsuario = snapshot.val();
      if (dataUsuario) {
        if (senha == dataUsuario.senha){
          navigation.navigate('Home');
        } else {
          alert("Usuário/senha inválidos!");
          return;
        }
      } else {
        alert("Usuário/senha inválidos!");
        return;
      }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputs}>
          <AlcMainInput
            placeHolder={"CPF"}
            value={cpf}
            onChangeText={(cpf) => setCPF(cpf)}
            keyboardType={"numeric"}
          />
          <AlcMainInput
            placeHolder={"Senha"}
            secureTextEntry={true}
            value={senha}
            onChangeText={(senha) => setSenha(senha)}
         />
       </View>

        <View style={styles.buttons}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
            <AlcButton text={"Cadastrar"} backgroundColor={'black'} onPress={() => navigation.navigate('Cadastro')}/>
            <AlcButton text={"Login"} backgroundColor={'black'} onPress={validarUsuario}/>
          </View>
          <Text style={{color: 'white', textDecorationLine: 'underline', fontWeight: 'bold'}}>Esqueceu sua Senha?</Text>
        </View>
    </SafeAreaView>
 );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  
    inputs: {
      flex: 5,
      justifyContent: 'flex-end',
      backgroundColor: 'blue',
      padding: 30,
      paddingBottom: 0
    },
  
    buttons: {
      flex: 5, 
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      backgroundColor: 'blue'
    }
  });

export default TelaLogin;
