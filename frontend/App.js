import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { StatusBar, Text, View } from "react-native";
import Navigation from "./navigation/Navigation";
import Login from "./pages/Login";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar />
      <Navigation />
    </View>
  );
}
