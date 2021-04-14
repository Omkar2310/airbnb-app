import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearch from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guest";
import HomeTabNavigator from "../navigation/HomeTabNavigator";
import SearchResultScreen from "../screens/SearchResults";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearch}
          options={{
            title: "Where you wanna go?",
          }}
        />
        <Stack.Screen
          name={"Guests"}
          component={GuestsScreen}
          options={{
            title: "How many People are there?",
          }}
        />
        <Stack.Screen
          name={"Search Results"}
          component={SearchResultScreen}
          options={{
            title: "Your Available Destinations",
          }}
        />
        <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: "Accomodation Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
