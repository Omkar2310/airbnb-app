import { StatusBar } from "expo-status-bar";
import React from "react";
import Entype from "react-native-vector-icons/Entypo";
import Post from "./src/components/Post";
import HomeScreen from "./src/screens/Home";

const App = () => {
  return (
    <>
      {/* <HomeScreen />*/}

      {/*<Post />*/}
      <StatusBar style="auto" />

      <Post />
    </>
  );
};
export default App;
