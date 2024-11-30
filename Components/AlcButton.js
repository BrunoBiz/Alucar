import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Label from "./Label";

const AlcButton = ({ 
    text, 
    onPress,
    flex,
    backgroundColor
}) => (
    <TouchableOpacity style={[styles.button, {flex}, {backgroundColor}]}
        onPress={onPress}
    >
        <Label text={text} style={{ left: 0, fontWeight: "bold", color: 'white' }} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        width: 120,
        height: 45,
        margin: 5,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default AlcButton;
