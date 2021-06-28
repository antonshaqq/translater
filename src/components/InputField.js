import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

export const InputField = ({ textHandler }) => {
  return (
    <View style={styles.block}>
      <View style={styles.inputfield}>
        <TextInput
          onChangeText={(e) => textHandler(e)}
          placeholder="Введите текст на русском"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    alignItems: "center",
    marginBottom: 15,
    marginTop: 50,

    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "#336fcc",
    height: 40,
  },
  inputfield: {
    borderColor: "#77ACF1",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: 300,
    height: 40,
  },
  text: { textAlign: "left", color: "white", fontSize: 20 },
});
