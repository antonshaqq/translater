import React, { useState } from "react";
import { StyleSheet, View, Button, Text, Picker } from "react-native";
import { InputField } from "./src/components/InputField";
import { Translated } from "./src/components/Translated";
import { languages } from "./languages";

export default function App() {
  const [russian, setRussian] = useState("");
  const [english, setEnglish] = useState("Здесь появится перевод текста");
  const [selectedValue, setSelectedValue] = useState("en");
  const textHandler = (data) => {
    setRussian(data);
  };

  const pressHandler = () => {
    fetch(
      `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?q=${russian}&langpair=ru%7C${selectedValue}&de=a%40b.c&onlyprivate=0&mt=1`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "aee2712cbdmsh2baad80f7e95b8cp15b18ejsna39a6064f3c7",
          "x-rapidapi-host":
            "translated-mymemory---translation-memory.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setEnglish(result.responseData.translatedText))

      .catch((err) => {
        console.error(err);
      });
    // console.log(selectedValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.title}>{"Переводчик текста"}</Text>
      </View>
      <View style={styles.container}>
        <InputField textHandler={textHandler} />
        <Picker
          style={styles.picker}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {Object.keys(languages).map((key, index) => {
            return (
              <Picker.Item label={languages[key]} value={key} key={index} />
            );
          })}
        </Picker>
        <View style={styles.confirm}>
          <Button
            style={styles.confirmbtn}
            color="#77ACF1"
            title="Перевести"
            onPress={pressHandler}
          />
        </View>
        <Translated result={english} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    textAlign: "center",
  },
  picker: {
    width: 100,
    marginBottom: 25,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    display: "flex",
    color: "white",
  },
  block: {
    backgroundColor: "#77ACF1",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 45,
    padding: 10,
  },
  confirm: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  confirmbtn: {
    width: 150,
  },
});
