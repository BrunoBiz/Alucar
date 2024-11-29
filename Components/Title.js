import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({text, style}) => 
    <Text style={[styles.text, style]}>Alucar</Text>


export default Title;

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center',
        marginTop: 30
      },
})