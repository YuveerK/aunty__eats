import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { styles } from "../components/Signup/styles";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";

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
  }, [Email, Password, ConfirmPassword, PhoneNumber]);

  const emailValidation = async (text) => {
    setEmail(text);
    if (Email === "" || !Email.includes("@")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  console.log(
    Email +
      "-----------" +
      EmailError +
      "\n" +
      Password +
      "-----------" +
      PasswordError +
      "\n" +
      ConfirmPassword +
      "-----------" +
      ConfirmPasswordError +
      "\n" +
      PhoneNumber +
      "-----------" +
      PhoneNumberError +
      "\n"
  );

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <ScrollView>
          <View style={styles.loginForm}>
            <View style={styles.inputField}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
                <Text
                  style={[styles.label, { fontFamily: "Inter_400Regular" }]}
                >
                  Email
                </Text>
              </View>
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={Email}
              />
            </View>

            <View style={styles.inputField}>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.label,
                    {
                      fontFamily: "Inter_400Regular",
                    },
                  ]}
                >
                  Password
                </Text>
              </View>

              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={Password}
              />
            </View>

            <View style={styles.inputField}>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.label,
                    {
                      fontFamily: "Inter_400Regular",
                    },
                  ]}
                >
                  Confirm Password
                </Text>
              </View>

              <TextInput
                style={styles.input}
                onChangeText={setConfirmPassword}
                value={ConfirmPassword}
              />
            </View>

            <View style={styles.inputField}>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.label,
                    {
                      fontFamily: "Inter_400Regular",
                    },
                  ]}
                >
                  Phone Number
                </Text>
              </View>

              <TextInput
                style={styles.input}
                onChangeText={setPhoneNumber}
                value={PhoneNumber}
              />
            </View>
            <Button
              title="Create Account"
              style={styles.loginButton}
              color={"#25292e"}
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
          <Text style={{ marginTop: 20, fontFamily: "Inter_400Regular" }}>
            Already a member?{" "}
            <Link to={"/Login"} style={{ fontSize: 16, color: "blue" }}>
              Sign in
            </Link>
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;
