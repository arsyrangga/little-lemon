import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");

  const validateEmail = (e) => {
    return e.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const isValidEmail = validateEmail(email)
  

  const handleChangeText = (data) => {
    setEmail(data);
  };
  const handleClick = () => {
    Alert.alert("Thanks for subscribing, stay tuned!");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        style={styles.img}
      />
      <Text style={styles.textStyle}>Subscribe to our newsletter for our</Text>
      <Text style={styles.textStyle}>latest delicious recipes!</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type your email"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={handleChangeText}
      />
      <Pressable
        style={[
          styles.button,
          {
            backgroundColor: !isValidEmail ? "gray" : "#495E57",
          },
        ]}
        onPress={handleClick}
        disabled={!isValidEmail}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  img: {
    resizeMode: "contain",
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  textStyle: {
    fontSize: 18,
  },
  button: {
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
