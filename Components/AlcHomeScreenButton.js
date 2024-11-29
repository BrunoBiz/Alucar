import { 
    StyleSheet,
    Text, 
    View,
    TouchableOpacity,
    Image } 
from "react-native";

import React from "react";
import Label from "./Label";

const AlcHomeScreenButton = ({ 
    text, 
    onPress,
    flex,
    icone
}) => (
  <TouchableOpacity style={[styles.button, {flex}]}
    onPress={onPress}
  >
    <Image style={[styles.icone]} source={icone}></Image>
    <Label text={text} style={{ left: 0, fontWeight: "bold", color: 'black' }} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({

  button: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    width: 120,
    height: 120,
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    aspectRatio: 1
    },

  icone: {
    width: 50,
    height: 50
  }
});

export default AlcHomeScreenButton;