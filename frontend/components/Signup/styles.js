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
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    width: "100%",
    height: 60,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
  },
  loginContainer: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    display: "flex",
    marginVertical: 20,
    backgroundColor: "Green",
  },
  loginButton: {
    marginVertical: 20,
  },
  loginForm: {
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
  },
  buttonLogin: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25292e",
    borderRadius: 5,
    marginBottom: 50,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
