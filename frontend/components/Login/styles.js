import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading1: {
    fontSize: 40,
    height: 50,
  },
  headingContainer: {
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    width: "100%",
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    borderWidth: 6,
    borderColor: "black",
  },
  inputField: {
    display: "flex",
    marginVertical: 20,
    backgroundColor: "Green",
  },
  loginButton: {
    marginVertical: 20,
  },
});
