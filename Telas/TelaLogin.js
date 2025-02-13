import React, { useEffect, useState } from 'react';
import {firebaseConfig, db} from '../src/firebaseConfig';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView
} from "react-native";

import AlcMainInput from '../Components/AlcMainInput';
import Title from '../Components/Title';
import AlcButton from '../Components/AlcButton';
import EstilosGlobais from '../Estilos/Globais';

const TelaLogin = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('')
 
  useEffect(() => {

    function carregaDados() {
      const cpf = "10926245970"; // The CPF of the user you want to retrieve
      const dbRef = db.ref(`Usuarios/${cpf}`).on('value', (snapshot) => {
        const userData = snapshot.val();
        if (userData) { // Check if the user exists
          console.log(userData.Nome);
          setNome(userData.Nome);
        } else {
          console.log("User not found.");
          // Handle the case where the user doesn't exist
        }
      }, (error) => { // Always handle errors!
          console.error("Error fetching data:", error);
      });

      const dbRef2 = db.ref('Produtos/1').set({
        nome: 'Notebook',
        marca: 'Dell'
      })

      const dbRef3 = db.ref('Produtos/1').remove()
    }

    //carregaDados();
  }, [])
 
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputs}>
          <AlcMainInput
            placeHolder={"CPF"}
            value={nome}
          />
          <AlcMainInput
            placeHolder={"Senha"}
            secureTextEntry={true}
         />
       </View>

        <View style={styles.buttons}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
            <AlcButton text={"Login"} backgroundColor={'black'}/>
            <AlcButton text={"Cadastrar"} backgroundColor={'black'} onPress={() => navigation.navigate('Cadastro')}/>
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
