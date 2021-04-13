import React from "react";
import { StatusBar } from "react-native";
import Entype from "react-native-vector-icons/Entypo";
import Post from "./src/components/Post";
import HomeScreen from "./src/screens/Home";
import feed from "./assets/data/feed";
import SearchResultScreen from "./src/components/SearchResults";

// const post1 = feed[3];
// const post2 = feed[2];
const App = () => {
  return (
    <>
      {/* <HomeScreen />*/}
      {/*<Post />*/}
      <StatusBar barStyle="default" />
      <SearchResultScreen />
    </>
  );
};
export default App;
