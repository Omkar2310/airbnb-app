import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Router from "./src/navigation/Router";
// const post1 = feed[3];
// const post2 = feed[2];
const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Router />
    </>
  );
};
export default App;
