import { Button, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { styles } from "../components/Login/styles";
const Login = ({ navigation }) => {
  const [text, onChangeText] = useState("Useless Text");

  const navigateTo = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading1}>Aunty Eats</Text>
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.inputField}>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>

        <View style={styles.inputField}>
          <Text>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>

        <View style={{ marginVertical: 30 }}>
          <Button title="Login" onPress={navigateTo} />
        </View>
        <Button
          title="Sign Up"
          style={styles.loginButton}
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

export default Login;
