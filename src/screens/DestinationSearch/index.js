import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable } from "react-native";
import styles from "./styles";
import searchResults from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "./SuggestionRow";

const DestinationSearch = () => {
  const [inputText, setInputText] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Text Input compon */}

      {/* Google place api */}
      <View style={{ height: 300 }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: "AIzaSyBd3EW3YlyQgx06eJeeoXiLD67KtCLPDec",
            language: "en",
            types: "(cities)",
          }}
          suppressDefaultStyles
          renderRow={(item) => <SuggestionRow item={item} />}
        />
      </View>

      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Pressable
            style={styles.row}
            onPress={() => navigation.navigate("Guests")}
          >
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={35} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      ></FlatList>
    </View>
  );
};

export default DestinationSearch;
