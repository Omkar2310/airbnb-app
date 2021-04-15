import React from "react";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { StatusBar, SafeAreaView } from "react-native";
import Router from "./src/navigation/Router";
// const post1 = feed[3];
// const post2 = feed[2];
Amplify.configure(config);
const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Router />
    </>
  );
};
export default withAuthenticator(App);
