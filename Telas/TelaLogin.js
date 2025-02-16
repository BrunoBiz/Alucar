import React, { useState } from 'react';
import { auth } from '../src/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert
} from "react-native";

import AlcMainInput from '../Components/AlcMainInput';
import AlcButton from '../Components/AlcButton';

const TelaLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [user, setUser] = useState('')

  async function validarUsuario() {
    if (email == "" || senha == "") {
      alert("Dados inválidos!");
      return;
    }

    try {
      const credenciaisUsuario = await signInWithEmailAndPassword(auth, email, senha)
      const usuarioLogado = credenciaisUsuario.user;

      // Armazena o ID
      await AsyncStorage.setItem('uid', usuarioLogado.uid);
      //console.log(usuarioLogado.uid)
      
      // Vai para tela principal
      navigation.navigate('Home');
    } catch (error) {
      console.error("Erro - Login usuario", error);
      Alert.alert("Erro ao logar!", error.message); // Include error message for debugging
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputs}>
          <AlcMainInput
            placeHolder={"E-mail"}
            value={email}
            onChangeText={(email) => setEmail(email)}
            keyboardType={"email-address"}
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
