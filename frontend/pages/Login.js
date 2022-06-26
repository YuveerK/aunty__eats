import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../components/Login/styles";
import { Link } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
const Login = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  const [text, onChangeText] = useState("Useless Text");

  const navigateTo = () => {
    navigation.navigate("Home");
  };
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading1}>Aunty Eats</Text>
        </View>

        <View style={styles.loginContainer}>
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
                onChangeText={onChangeText}
                value={text}
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
                <Link to={"/Home"} style={{ fontSize: 16, color: "blue" }}>
                  Forgot password?
                </Link>
              </View>

              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <TouchableOpacity style={styles.buttonLogin} onPress={navigateTo}>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Inter_700Bold",
                  fontSize: 20,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 20, fontFamily: "Inter_400Regular" }}>
            New to Aunty Eats?{" "}
            <Link to={"/SignUp"} style={{ fontSize: 16, color: "blue" }}>
              Sign Up
            </Link>
          </Text>
        </View>
      </View>
    );
  }
};

export default Login;
