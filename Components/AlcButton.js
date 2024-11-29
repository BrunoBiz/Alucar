import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Label from "./Label";

const AlcButton = ({ 
    text, 
    onPress,
    flex
}) => (
  //<TextInput style={[styles.textInput, {flex}, style]}
  <TouchableOpacity style={[styles.button, {flex}]}
    onPress={onPress}
  >
    <Label text={text} style={{ left: 0, fontWeight: "bold", color: 'white' }} />
  </TouchableOpacity>
);

export default AlcButton;

const styles = StyleSheet.create({

  button: {
    backgroundColor: "black",
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
