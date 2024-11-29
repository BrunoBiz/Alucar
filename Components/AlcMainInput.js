import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const AlcMainInput = ({
    style,
    value,
    onChangeText,
    placeHolder,
    secureTextEntry,
    flex
}) => (
    <TextInput 
        style={[styles.textInput, {flex}, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
    />
);

export default AlcMainInput;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#eee',
        height: 45,
        margin: 5,
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        fontSize: 20
    }
});