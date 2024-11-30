import React from 'react';

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
 return (
    <SafeAreaView style={styles.container}>
        <View style={EstilosGlobais.title}>
          <Title/>
        </View>

        <View style={styles.inputs}>
          <AlcMainInput
            placeHolder={"CPF"}
          />
          <AlcMainInput
            placeHolder={"Senha"}
            secureTextEntry={true}
         />
       </View>

        <View style={styles.buttons}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
            <AlcButton text={"Login"} backgroundColor={'black'}/>
            <AlcButton text={"Cadastrar"} backgroundColor={'black'}/>
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
