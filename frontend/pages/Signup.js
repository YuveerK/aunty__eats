import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import { styles } from "../components/Signup/styles";
import React, { useEffect, useState } from "react";

const Signup = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [EmailError, setEmailError] = useState(true);
  const [PasswordError, setPasswordError] = useState(true);
  const [ConfirmPasswordError, setConfirmPasswordError] = useState(true);
  const [PhoneNumberError, setPhoneNumberError] = useState(true);

  const navigateTo = () => {
    navigation.navigate("Home");
  };

  const createAccount = () => {
    if (Email === "" || Email.includes("@")) {
      setEmailError(true);
    } else if (Password === "" || Password.charAt.length < 8) {
      setPasswordError(true);
    } else if (ConfirmPassword !== Password) {
      setConfirmPasswordError(true);
    } else if (
      PhoneNumber.charAt.length !== 10 ||
      !PhoneNumber.charAt(0).startsWith("0")
    ) {
      setPhoneNumberError(true);
    }
  };

  //   console.log(
  //     "Email" +
  //       " " +
  //       EmailError +
  //       "\n" +
  //       "Password" +
  //       " " +
  //       PasswordError +
  //       "\n" +
  //       "Confirm Password" +
  //       " " +
  //       ConfirmPasswordError +
  //       "\n" +
  //       "Phone Number" +
  //       " " +
  //       PhoneNumberError
  //   );

  useEffect(() => {
    if (Email === "" || !Email.includes("@")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (Password === "" || Password.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (ConfirmPassword === Password) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }

    if (PhoneNumber.length !== 9 || PhoneNumber.charAt(0) === "0") {
      setPhoneNumberError(true);
    } else {
      setPhoneNumberError(false);
    }
  }, [Email]);

  const emailValidation = async (text) => {
    setEmail(text);
    if (Email === "" || !Email.includes("@")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  console.log(Email + "\n " + EmailError);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.loginContainer}>
          <View style={styles.inputField}>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              placeholder={"Enter your email address"}
              onChangeText={(text) => {
                setEmail(text);
                if (Email === "" || !Email.includes("@")) {
                  setEmailError(true);
                } else {
                  setEmailError(false);
                }
              }}
              value={Email}
            />

            {EmailError === "" && (
              <Text style={{ color: "red" }}>Email required</Text>
            )}
          </View>

          <View style={styles.inputField}>
            <Text>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              placeholder={"Enter a password"}
              value={Password}
            />

            {PasswordError === "" && (
              <Text style={{ color: "red" }}>Password required</Text>
            )}
          </View>

          <View style={styles.inputField}>
            <Text>Confirm Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={setConfirmPassword}
              placeholder={"Confirm your password"}
              value={ConfirmPassword}
            />
            {ConfirmPasswordError === "" && (
              <Text style={{ color: "red" }}>Passwords do no match</Text>
            )}
          </View>

          <View style={styles.inputField}>
            <Text>Phone Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPhoneNumber}
              placeholder={"Enter your phone number"}
              value={PhoneNumber}
            />
            {PhoneNumberError === "" && (
              <Text style={{ color: "red" }}>Phone number required</Text>
            )}
          </View>

          <View style={{ marginVertical: 30 }}>
            <Button
              title="Create Account"
              style={styles.loginButton}
              onPress={createAccount}
              disabled={
                EmailError === false &&
                PasswordError === false &&
                ConfirmPasswordError === false &&
                PhoneNumberError === false
                  ? false
                  : true
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signup;
