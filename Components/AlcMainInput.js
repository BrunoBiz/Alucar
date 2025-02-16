import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const AlcMainInput = ({
    style,
    value,
    onChangeText,
    placeHolder,
    secureTextEntry,
    flex,
    keyboardType,
    disabled 
}) => (
    <TextInput 
        style={[styles.textInput, {flex}, style, disabled && styles.disabledInput]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        editable={!disabled}
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
    },
    disabledInput: {
        backgroundColor: '#ddd',
        borderColor: '#ccc',
        opacity: 0.7,
    }
});