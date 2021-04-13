import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import styles from "./styles";

const HomeScreen = () => {
  return (
    <View>
      {/*Search bar is here
       */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn("Presses Search button")}
      >
        <Fontisto name="search" size={25} color={"#f15454"} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        style={styles.image}
        source={require("../../../assets/images/wallpaper.jpg")}
      >
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn("Explore btn clicked")}
        >
          <Text style={styles.buttonText}>Explore Nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
