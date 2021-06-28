import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Translated = ({ result = "Здесь появится перевод текста" }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginBottom: 15,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#77ACF1",
    borderRadius: 5,
    width: 300,
    height: "auto",
    padding: 5,
    marginLeft: "auto",
    marginRight: "auto",
    borderStyle: "solid",
    fontSize: 15,
    textAlign: "left",
  },
  text: {
    color: "black",
  },
});
